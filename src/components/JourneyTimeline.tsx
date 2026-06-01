"use client";

import { motion } from "framer-motion";
import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";

type Props = { locale: Locale };

export function JourneyTimeline({ locale }: Props) {
  const steps = locale === "he"
    ? [
        { num: "1", title: "הרשמה", desc: "בחר מסלול ונרשם בקלות" },
        { num: "2", title: "אבחון", desc: "ענה על שאלון + הקלטת קול" },
        { num: "3", title: "מפה אישית", desc: "קבל את מפת קוד המקור שלך" },
        { num: "4", title: "קורסים", desc: "למד כלים לניווט להצלחה" },
        { num: "5", title: "הצלחה", desc: "נווט את חייך מתוך עוצמה" },
      ]
    : [
        { num: "1", title: "Register", desc: "Choose a program and sign up" },
        { num: "2", title: "Assessment", desc: "Answer questionnaire + voice" },
        { num: "3", title: "Personal Map", desc: "Receive your Source Code map" },
        { num: "4", title: "Courses", desc: "Learn tools for navigating to success" },
        { num: "5", title: "Success", desc: "Navigate your life from power" },
      ];

  return (
    <section className="py-16 sm:py-20 bg-paper overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-12">
            {locale === "he" ? "המסע שלך להצלחה" : "Your Journey to Success"}
          </h2>
        </FadeInView>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-6 start-0 end-0 h-0.5 bg-border hidden sm:block" aria-hidden="true" />
          <motion.div
            className="absolute top-6 start-0 h-0.5 bg-gold hidden sm:block"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-4">
            {steps.map((step, i) => (
              <FadeInView key={i} delay={i * 0.15}>
                <div className="text-center relative">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gold text-navy font-bold flex items-center justify-center mx-auto mb-3 text-lg shadow-lg relative z-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.num}
                  </motion.div>
                  <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-text-secondary">{step.desc}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
