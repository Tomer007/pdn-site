"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { type Locale } from "@/i18n/config";
import { getProgramBySlug } from "@/data/programs";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

async function validateCouponAPI(code: string, programSlug: string, amount: number) {
  const res = await fetch("/api/coupons/validate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, programSlug, purchaseAmount: amount }),
  });
  return res.json();
}

async function createPaymentAPI(data: Record<string, unknown>, locale: string) {
  const res = await fetch("/api/payment/create", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-locale": locale },
    body: JSON.stringify(data),
  });
  return res.json();
}

function trackAbandonedCart(data: Record<string, unknown>) {
  fetch("/api/cart/abandon", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch(() => {});
}

export function CheckoutClient({ dict, locale }: Props) {
  const searchParams = useSearchParams();
  const programSlug = searchParams.get("program") || "transformation";
  const program = getProgramBySlug(programSlug);

  const [includeAddon, setIncludeAddon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponState, setCouponState] = useState<{
    applied: boolean;
    percent: number;
    error: string | null;
  }>({ applied: false, percent: 0, error: null });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formError, setFormError] = useState("");

  if (!program || !program.price) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">
          {locale === "he" ? "לא נבחר מסלול. אנא חזרו לעמוד המסלולים." : "No program selected. Please go back to programs."}
        </p>
      </div>
    );
  }

  const basePrice = program.price;
  const addonPrice = program.addonPrice;
  const subtotal = basePrice + (includeAddon ? addonPrice : 0);
  const discountAmount = couponState.applied
    ? Math.round(subtotal * (couponState.percent / 100))
    : 0;
  const total = subtotal - discountAmount;

  function handleApplyCoupon() {
    if (!couponCode.trim()) return;
    setCouponState({ ...couponState, error: null });

    validateCouponAPI(couponCode, programSlug, subtotal).then((result) => {
      if (result.valid) {
        setCouponState({ applied: true, percent: result.discountPercent, error: null });
      } else {
        const errorMap: Record<string, string> = {
          invalid: dict.checkout.coupon_invalid,
          expired: dict.checkout.coupon_expired,
          used: dict.checkout.coupon_used,
          wrong_program: dict.checkout.coupon_wrong_program,
        };
        setCouponState({ applied: false, percent: 0, error: errorMap[result.error] || dict.checkout.coupon_invalid });
      }
    });
  }

  function handleRemoveCoupon() {
    setCouponCode("");
    setCouponState({ applied: false, percent: 0, error: null });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError(dict.checkout.fill_all_fields);
      return;
    }
    setFormError("");

    // Track abandoned cart (in case they don't complete payment)
    trackAbandonedCart({
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      programSlug,
      amount: total,
    });

    // Create payment
    createPaymentAPI(
      {
        programName: program!.name[locale],
        amount: total,
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        couponCode: couponState.applied ? couponCode : undefined,
      },
      locale
    ).then((result) => {
      if (result.success && result.paymentUrl) {
        // Redirect to payment page (Meshulam or mock thank-you)
        window.location.href = result.paymentUrl;
      } else {
        setFormError(locale === "he" ? "שגיאה ביצירת התשלום. אנא נסו שוב." : "Error creating payment. Please try again.");
      }
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Order Summary */}
      <div className="bg-white border border-border rounded-xl p-6 sm:p-8 order-1">
        <h2 className="font-bold text-lg mb-6">{dict.checkout.title}</h2>

        {/* Line items */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <span>{program.name[locale]}</span>
            <span className="font-bold">{dict.common.currency}{basePrice.toLocaleString()}</span>
          </div>

          {/* Addon checkbox */}
          {program.addonPrice > 0 && (
            <label className="flex items-center gap-3 p-3 bg-paper rounded-lg cursor-pointer">
              <input
                type="checkbox"
                checked={includeAddon}
                onChange={(e) => setIncludeAddon(e.target.checked)}
                className="w-4 h-4 accent-gold"
              />
              <span className="flex-1 text-sm">
                {dict.checkout.addon_checkbox}
              </span>
              <span className="text-sm font-bold">
                +{dict.common.currency}{addonPrice}
              </span>
            </label>
          )}
        </div>

        {/* Coupon field */}
        <div className="border-t border-border pt-4 mb-4">
          {!couponState.applied ? (
            <div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder={dict.checkout.coupon_placeholder}
                  className="flex-1 px-3 py-2.5 border border-border rounded text-sm focus:outline-none focus:border-gold"
                  onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-navy hover:bg-indigo text-white font-bold text-sm px-4 py-2.5 rounded transition-colors"
                >
                  {dict.checkout.coupon_apply}
                </button>
              </div>
              {couponState.error && (
                <p className="text-error text-xs mt-2">{couponState.error}</p>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-between bg-success/10 border border-success/30 rounded-lg p-3">
              <div>
                <p className="text-success text-sm font-bold">
                  ✔ {dict.checkout.coupon_success.replace("{percent}", String(couponState.percent))}
                </p>
                <p className="text-xs text-text-secondary mt-0.5">
                  {dict.checkout.saved_message.replace("{amount}", String(discountAmount))}
                </p>
              </div>
              <button
                onClick={handleRemoveCoupon}
                className="text-xs text-error hover:underline"
              >
                {dict.checkout.coupon_remove}
              </button>
            </div>
          )}
        </div>

        {/* Totals */}
        <div className="border-t border-border pt-4 space-y-2">
          {couponState.applied && (
            <div className="flex justify-between text-sm text-success">
              <span>{dict.checkout.discount_label}</span>
              <span>-{dict.common.currency}{discountAmount}</span>
            </div>
          )}
          <div className="flex justify-between items-center text-lg font-bold">
            <span>{dict.checkout.total_label}</span>
            <div className="flex items-center gap-2">
              {couponState.applied && (
                <span className="text-sm text-text-secondary line-through">
                  {dict.common.currency}{subtotal.toLocaleString()}
                </span>
              )}
              <span className="text-gold text-2xl">
                {dict.common.currency}{total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Details + Payment */}
      <form onSubmit={handleSubmit} className="order-2">
        <div className="bg-white border border-border rounded-xl p-6 sm:p-8">
          <h2 className="font-bold text-lg mb-6">{dict.checkout.your_details}</h2>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-bold mb-1">{dict.checkout.name_field}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">{dict.checkout.email_field}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold"
                dir="ltr"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">{dict.checkout.phone_field}</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-gold"
                dir="ltr"
              />
            </div>
          </div>

          {formError && (
            <p className="text-error text-sm mb-4">{formError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-hover text-navy font-bold text-lg py-4 rounded-lg transition-colors"
          >
            {dict.checkout.pay_button} - {dict.common.currency}{total.toLocaleString()}
          </button>

          <p className="text-center text-xs text-text-secondary mt-3">
            🔒 {dict.checkout.secure_note}
          </p>
        </div>
      </form>
    </div>
  );
}
