import { NextRequest, NextResponse } from "next/server";

/**
 * Meshulam Payment Creation API
 * 
 * In production, this calls the real Meshulam API.
 * For local development, it simulates the flow and returns a mock payment URL.
 * 
 * Real Meshulam endpoint: https://secure.meshulam.co.il/api/light/server/1.0/createPaymentProcess
 */

const MESHULAM_API_URL = "https://secure.meshulam.co.il/api/light/server/1.0/createPaymentProcess";

// Set to true when you have real Meshulam credentials
const USE_REAL_MESHULAM = false;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { programName, amount, customerName, customerEmail, customerPhone, couponCode } = body;

    // Validate required fields
    if (!programName || !amount || !customerName || !customerEmail || !customerPhone) {
      return NextResponse.json(
        { success: false, error: "missing_fields" },
        { status: 400 }
      );
    }

    const orderId = `PDN-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

    if (USE_REAL_MESHULAM) {
      // Real Meshulam integration
      const pageCode = process.env.MESHULAM_PAGE_CODE;
      const apiKey = process.env.MESHULAM_API_KEY;

      if (!pageCode || !apiKey) {
        return NextResponse.json(
          { success: false, error: "payment_config_missing" },
          { status: 500 }
        );
      }

      const response = await fetch(MESHULAM_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pageCode,
          apiKey,
          sum: amount,
          description: programName,
          pageField: {
            fullName: customerName,
            email: customerEmail,
            phone: customerPhone,
          },
          cField1: orderId,
          cField2: couponCode || "",
          successUrl: `${getBaseUrl(request)}/he/thank-you?order=${orderId}`,
          cancelUrl: `${getBaseUrl(request)}/he/checkout?canceled=true`,
          callbackUrl: `${getBaseUrl(request)}/api/payment/webhook`,
        }),
      });

      const data = await response.json();

      if (data.status === 1) {
        return NextResponse.json({
          success: true,
          paymentUrl: data.data.url,
          processId: data.data.processId,
          orderId,
        });
      } else {
        return NextResponse.json({
          success: false,
          error: "meshulam_error",
          details: data.err?.message || "Unknown error",
        });
      }
    } else {
      // Mock mode for local development
      // Simulate a 1-second delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const locale = request.headers.get("x-locale") || "he";
      const thankYouUrl = `${getBaseUrl(request)}/${locale}/thank-you?order=${orderId}&program=${encodeURIComponent(programName)}&amount=${amount}`;

      return NextResponse.json({
        success: true,
        paymentUrl: thankYouUrl, // In mock mode, go straight to thank-you
        processId: `MOCK-${orderId}`,
        orderId,
        mock: true,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "server_error" },
      { status: 500 }
    );
  }
}

function getBaseUrl(request: NextRequest): string {
  const host = request.headers.get("host") || "localhost:3003";
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}
