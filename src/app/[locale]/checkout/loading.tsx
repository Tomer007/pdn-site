export default function CheckoutLoading() {
  return (
    <section className="py-12 sm:py-16 bg-paper min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-48 bg-border/50 rounded mx-auto mb-10 animate-pulse" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white border border-border rounded-xl p-8 space-y-4">
            <div className="h-5 w-32 bg-border/50 rounded animate-pulse" />
            <div className="h-12 bg-border/30 rounded animate-pulse" />
            <div className="h-12 bg-border/30 rounded animate-pulse" />
            <div className="h-10 bg-border/30 rounded animate-pulse" />
          </div>
          <div className="bg-white border border-border rounded-xl p-8 space-y-4">
            <div className="h-5 w-32 bg-border/50 rounded animate-pulse" />
            <div className="h-12 bg-border/30 rounded animate-pulse" />
            <div className="h-12 bg-border/30 rounded animate-pulse" />
            <div className="h-12 bg-border/30 rounded animate-pulse" />
            <div className="h-14 bg-gold/30 rounded animate-pulse mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
