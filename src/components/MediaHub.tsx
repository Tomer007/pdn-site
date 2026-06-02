"use client";

import { type Locale } from "@/i18n/config";
import { FadeInView } from "@/components/animations/FadeInView";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

type Props = { locale: Locale };

const latestVideos = [
  { id: "2G9wOQLf6dc", title: { he: "קוד המקור - מבוא לשיטה", en: "Source Code - Method Introduction" } },
  { id: "uDHsOFU2pWY", title: { he: "בוגרי השיטה מספרים", en: "Graduates Share" } },
  { id: "ZPmjocGI9Pw", title: { he: "הצופן שלך להצלחה", en: "Your Cipher to Success" } },
];

export function MediaHub({ locale }: Props) {
  return (
    <section className="py-16 sm:py-20 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2 text-gradient-gold">
              {locale === "he" ? "תוכן והשראה" : "Content & Inspiration"}
            </h2>
            <p className="text-white/50 text-sm">
              {locale === "he" ? "סרטונים, פודקאסטים ותובנות מעולם שיטת PDN" : "Videos, podcasts and insights from the PDN method"}
            </p>
          </div>
        </FadeInView>

        {/* Latest videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {latestVideos.map((video, i) => (
            <FadeInView key={i} delay={i * 0.1}>
              <div className="rounded-xl overflow-hidden border border-white/10 hover:border-gold/30 transition-colors">
                <YouTubeEmbed videoId={video.id} title={video.title[locale]} />
                <div className="p-3 bg-white/5">
                  <p className="text-sm font-bold text-white/80 truncate">{video.title[locale]}</p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Social channels */}
        <FadeInView delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@p.d.ncenter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-red-400/50 hover:bg-red-500/10 transition-all group"
            >
              <div className="w-11 h-11 bg-red-500 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
              <div>
                <p className="font-bold text-sm text-white group-hover:text-red-300 transition-colors">YouTube</p>
                <p className="text-xs text-white/50">{locale === "he" ? "סרטונים ושיעורים" : "Videos & Lessons"}</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/PDNCODE/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all group"
            >
              <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <div>
                <p className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors">Facebook</p>
                <p className="text-xs text-white/50">{locale === "he" ? "פוסטים, רילס ותמונות" : "Posts, Reels & Photos"}</p>
              </div>
            </a>

            {/* Podcast */}
            <a
              href="https://www.facebook.com/share/v/14eR9ktG9h7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all group"
            >
              <div className="w-11 h-11 bg-purple-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.374 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.626-5.373-12-12-12z"/></svg>
              </div>
              <div>
                <p className="font-bold text-sm text-white group-hover:text-purple-300 transition-colors">{locale === "he" ? "פודקאסט" : "Podcast"}</p>
                <p className="text-xs text-white/50">{locale === "he" ? "שיחות על תודעה והצלחה" : "Conversations on consciousness"}</p>
              </div>
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
