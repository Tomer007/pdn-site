"use client";

import { useState } from "react";
import { type Locale } from "@/i18n/config";

type Props = {
  dict: Record<string, any>;
  locale: Locale;
};

type FAQItem = {
  question: { he: string; en: string };
  answer: { he: string; en: string };
};

const faqItems: FAQItem[] = [
  {
    question: {
      he: "מה זה \"קוד המקור\"?",
      en: "What is the \"Source Code\"?",
    },
    answer: {
      he: "\"קוד המקור\" הוא צופן אישי וייחודי, המשמש כמצפן פנימי לניווט חייך להצלחה. הוא מבוסס על שיטת PDN - Personal Development Navigator, שנרשמה כפטנט בינלאומי ומבוססת על 30 שנות מחקר בחקר התודעה.",
      en: "The \"Source Code\" is a unique personal cipher that serves as an inner compass for navigating your life to success. It's based on the PDN method - Personal Development Navigator, registered as an international patent and based on 30 years of consciousness research.",
    },
  },
  {
    question: {
      he: "איך עובד האבחון?",
      en: "How does the assessment work?",
    },
    answer: {
      he: "לאחר ההרשמה תקבל קישור למייל. תמלא שאלון מובנה ותקליט את קולך. האבחון מועבר למרכז PDN ותוך שבוע תקבל את מפת \"קוד המקור\" האישית שלך.",
      en: "After registration, you'll receive a link by email. You'll fill out a structured questionnaire and record your voice. The assessment is processed at the PDN center and within a week you'll receive your personal \"Source Code\" map.",
    },
  },
  {
    question: {
      he: "מה ההבדל בין המסלולים?",
      en: "What's the difference between the programs?",
    },
    answer: {
      he: "מסלול \"לגלות\" כולל אבחון ומפה אישית - טעימה ראשונה. מסלול \"התמרה\" מוסיף שני קורסים דיגיטליים (59 שיעורים) להעמקה. \"אתגר 21 יום\" הוא הליווי האינטנסיבי ביותר - כולל מאמן AI יומי, מפגשי זום וקהילה.",
      en: "\"Discover\" includes assessment and personal map - a first taste. \"Transformation\" adds two digital courses (59 lessons) for deeper learning. \"21-Day Challenge\" is the most intensive - includes daily AI coach, Zoom sessions, and community.",
    },
  },
  {
    question: {
      he: "כמה זמן יש לי גישה לקורסים?",
      en: "How long do I have access to the courses?",
    },
    answer: {
      he: "הגישה לקורסים הדיגיטליים היא ל-180 יום (6 חודשים) מרגע קבלת האבחון. בסיום ניתן לרכוש מנוי חודשי להמשך.",
      en: "Access to digital courses is for 180 days (6 months) from receiving your assessment. After that, you can purchase a monthly subscription to continue.",
    },
  },
  {
    question: {
      he: "האם יש אפשרות לתשלומים?",
      en: "Are installment payments available?",
    },
    answer: {
      he: "כן! התשלום מתבצע דרך Meshulam ותומך בתשלומים. תוכל לבחור את מספר התשלומים בעמוד התשלום.",
      en: "Yes! Payment is processed through Meshulam and supports installments. You can choose the number of payments on the checkout page.",
    },
  },
  {
    question: {
      he: "יש לי קוד קופון, איפה מזינים אותו?",
      en: "I have a coupon code, where do I enter it?",
    },
    answer: {
      he: "בעמוד הצ'קאאוט (לאחר בחירת מסלול) יש שדה קופון ברור. הזן את הקוד ולחץ \"החל\" - ההנחה תופיע מיד.",
      en: "On the checkout page (after choosing a program) there's a clear coupon field. Enter the code and click \"Apply\" - the discount will appear immediately.",
    },
  },
];

export function FAQ({ dict, locale }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-paper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-display font-bold text-center mb-8">
          {locale === "he" ? "שאלות נפוצות" : "Frequently Asked Questions"}
        </h2>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="border border-border rounded-lg bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-start hover:bg-paper/50 transition-colors"
              >
                <span className="font-bold text-sm sm:text-base pe-4">
                  {item.question[locale]}
                </span>
                <span className="text-gold text-xl shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-text-secondary leading-relaxed border-t border-border/50 pt-3">
                  {item.answer[locale]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
