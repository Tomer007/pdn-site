import { NextRequest, NextResponse } from "next/server";

/**
 * Abandoned Cart Tracking
 * 
 * Called when a user fills in their details on checkout but doesn't complete payment.
 * Stores the lead for follow-up via email/WhatsApp automation.
 * 
 * Flow:
 * 1. User fills name + email + phone on checkout
 * 2. Client sends this data to /api/cart/abandon
 * 3. If payment isn't completed within 24h, trigger recovery email
 * 4. After 48h, send recovery email with 10% coupon
 */

// In-memory store for development (use database in production)
const abandonedCarts: Array<{
  id: string;
  email: string;
  name: string;
  phone: string;
  programSlug: string;
  amount: number;
  timestamp: string;
  recovered: boolean;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, phone, programSlug, amount } = body;

    if (!email || !programSlug) {
      return NextResponse.json(
        { success: false, error: "missing_fields" },
        { status: 400 }
      );
    }

    const cartEntry = {
      id: `CART-${Date.now()}`,
      email,
      name: name || "",
      phone: phone || "",
      programSlug,
      amount: amount || 0,
      timestamp: new Date().toISOString(),
      recovered: false,
    };

    // Check if this email already has an abandoned cart for this program
    const existingIndex = abandonedCarts.findIndex(
      (c) => c.email === email && c.programSlug === programSlug && !c.recovered
    );

    if (existingIndex >= 0) {
      // Update existing entry
      abandonedCarts[existingIndex] = cartEntry;
    } else {
      abandonedCarts.push(cartEntry);
    }

    console.log(`[Abandoned Cart] ${email} - ${programSlug} - ₪${amount}`);

    // TODO: In production:
    // 1. Store in database
    // 2. Schedule email for 24h later (reminder)
    // 3. Schedule email for 48h later (with recovery coupon)
    // 4. If payment webhook fires for this email+program, mark as recovered

    return NextResponse.json({
      success: true,
      cartId: cartEntry.id,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "server_error" },
      { status: 500 }
    );
  }
}

// GET endpoint to view abandoned carts (admin/debug only)
export async function GET() {
  return NextResponse.json({
    total: abandonedCarts.length,
    pending: abandonedCarts.filter((c) => !c.recovered).length,
    carts: abandonedCarts.slice(-20), // last 20
  });
}
