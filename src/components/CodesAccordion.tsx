"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Locale } from "@/i18n/config";

type Code = {
  id: string;
  name: { he: string; en: string };
  description: { he: string; en: string };
  energy: { he: string; en: string };
};

type CodeGroup = {
  letter: string;
  name: { he: string; en: string };
  english: string;
  meaning: { he: string; en: string };
  color: string;
  bgGradient: string;
  fear: { he: string; en: string };
  codes: Code[];
};

type Props = {
  codeGroups: CodeGroup[];
  locale: Locale;
};

export function CodesAccordion({ codeGroups, locale }: Props) {
  const [openGroup, setOpenGroup] = useState<string | null>("E");

  return (
    <div className="space-y-4">
      {codeGroups.map((group) => {
        const isOpen = openGroup === group.letter;

        return (
          <div key={group.letter} className={`rounded-2xl border-2 ${group.color} bg-gradient-to-br ${group.bgGradient} overflow-hidden transition-all duration-300`}>
            {/* Clickable header */}
            <button
              onClick={() => setOpenGroup(isOpen ? null : group.letter)}
              className="w-full flex items-center gap-4 p-5 sm:p-6 text-start hover:bg-white/30 transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-display font-bold text-navy">{group.letter}</span>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-display font-bold">{group.name[locale]}</h3>
                <p className="text-xs text-text-secondary uppercase tracking-wide">{group.english}</p>
                <p className="text-sm text-text-secondary mt-1">{group.meaning[locale]}</p>
              </div>
              <div className="text-2xl text-gold shrink-0">
                {isOpen ? "−" : "+"}
              </div>
            </button>

            {/* Expandable content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-6">
                    <p className="text-sm text-error/80 italic mb-4">{group.fear[locale]}</p>

                    <div className="space-y-3">
                      {group.codes.map((code) => (
                        <div key={code.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white shadow-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-bold text-white bg-navy rounded-lg px-2.5 py-0.5 shadow">
                              {code.id}
                            </span>
                            <h4 className="font-bold">{code.name[locale]}</h4>
                            <span className="text-xs text-text-secondary ms-auto hidden sm:block">
                              {code.energy[locale]}
                            </span>
                          </div>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {code.description[locale]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
