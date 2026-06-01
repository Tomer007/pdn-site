import { NextRequest, NextResponse } from "next/server";

/**
 * Meshulam Payment Webhook
 * 
 * Called by Meshulam after payment is completed (success or failure).
 * In production, this would:
 * 1. Verify the payment signature
 * 2. Update order status in database
 * 3. Increment coupon usage if applicable
 * 4. Trigger confirmation email
 * 5. Grant access to courses
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log the webhook for debugging
    console.log("[Meshulam Webhook]", JSON.stringify(body, null, 2));

    const { processId, transactionId, status, sum, cField1: orderId, cField2: couponCode } = body;

    if (status === "completed" || status === 1) {
      // Payment successful
      console.log(`[Payment Success] Order: ${orderId}, Amount: ${sum}, Transaction: ${transactionId}`);

      // TODO: In production:
      // 1. Mark order as paid in database
      // 2. If couponCode, increment coupon usage
      // 3. Send confirmation email to customer
      // 4. Grant course access
      // 5. Track purchase event for analytics

      return NextResponse.json({ received: true, status: "success" });
    } else {
      // Payment failed or cancelled
      console.log(`[Payment Failed] Order: ${orderId}, Status: ${status}`);

      // TODO: Trigger abandoned cart flow if applicable

      return NextResponse.json({ received: true, status: "failed" });
    }
  } catch (error) {
    console.error("[Webhook Error]", error);
    return NextResponse.json(
      { received: false, error: "processing_error" },
      { status: 500 }
    );
  }
}
