import { NextRequest, NextResponse } from "next/server";

// Coupon data — in production this would come from a database/CMS
const COUPONS = [
  {
    code: "PNINA20",
    discountPercent: 20,
    isActive: true,
    validUntil: null, // no expiry
    maxUses: null, // unlimited
    currentUses: 0,
    applicablePrograms: null, // all programs
    minPurchaseAmount: 0,
    type: "campaign" as const,
  },
  {
    code: "WELCOME10",
    discountPercent: 10,
    isActive: true,
    validUntil: "2027-12-31",
    maxUses: 1000,
    currentUses: 42,
    applicablePrograms: null,
    minPurchaseAmount: 0,
    type: "welcome" as const,
  },
  {
    code: "CHALLENGE15",
    discountPercent: 15,
    isActive: true,
    validUntil: "2026-12-31",
    maxUses: 100,
    currentUses: 12,
    applicablePrograms: ["challenge"],
    minPurchaseAmount: 0,
    type: "campaign" as const,
  },
  {
    code: "DEEP25",
    discountPercent: 25,
    isActive: false, // disabled
    validUntil: "2025-01-01", // expired
    maxUses: 50,
    currentUses: 50, // maxed out
    applicablePrograms: ["transformation"],
    minPurchaseAmount: 1000,
    type: "campaign" as const,
  },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, programSlug, purchaseAmount } = body;

    if (!code || !programSlug) {
      return NextResponse.json(
        { valid: false, error: "missing_params" },
        { status: 400 }
      );
    }

    const coupon = COUPONS.find(
      (c) => c.code === code.toUpperCase().trim()
    );

    // 1. Code doesn't exist
    if (!coupon) {
      return NextResponse.json({ valid: false, error: "invalid" });
    }

    // 2. Not active
    if (!coupon.isActive) {
      return NextResponse.json({ valid: false, error: "invalid" });
    }

    // 3. Expired
    if (coupon.validUntil && new Date() > new Date(coupon.validUntil)) {
      return NextResponse.json({ valid: false, error: "expired" });
    }

    // 4. Max uses reached
    if (coupon.maxUses && coupon.currentUses >= coupon.maxUses) {
      return NextResponse.json({ valid: false, error: "used" });
    }

    // 5. Wrong program
    if (
      coupon.applicablePrograms &&
      !coupon.applicablePrograms.includes(programSlug)
    ) {
      return NextResponse.json({ valid: false, error: "wrong_program" });
    }

    // 6. Min purchase not met
    if (coupon.minPurchaseAmount && purchaseAmount < coupon.minPurchaseAmount) {
      return NextResponse.json({
        valid: false,
        error: "min_amount",
        minAmount: coupon.minPurchaseAmount,
      });
    }

    // Valid!
    const discountAmount = Math.round(
      (purchaseAmount || 0) * (coupon.discountPercent / 100)
    );

    return NextResponse.json({
      valid: true,
      discountPercent: coupon.discountPercent,
      discountAmount,
      finalPrice: (purchaseAmount || 0) - discountAmount,
    });
  } catch {
    return NextResponse.json(
      { valid: false, error: "server_error" },
      { status: 500 }
    );
  }
}
