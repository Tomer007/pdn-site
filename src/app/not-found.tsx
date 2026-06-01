import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen flex items-center justify-center bg-[#F6F3EC] font-sans">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-[#222845] mb-4">404</h1>
          <p className="text-xl text-[#5A5A5A] mb-6">
            העמוד לא נמצא / Page not found
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/he"
              className="bg-[#C8A04E] text-[#222845] font-bold px-6 py-3 rounded hover:opacity-90 transition"
            >
              עמוד הבית
            </Link>
            <Link
              href="/en"
              className="border-2 border-[#222845] text-[#222845] font-bold px-6 py-3 rounded hover:bg-[#222845] hover:text-white transition"
            >
              Homepage
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
