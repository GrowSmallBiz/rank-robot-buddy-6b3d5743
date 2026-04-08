import type { NicheConfig } from "../NicheConfig";

interface OnThisPageNavProps {
  config: NicheConfig;
}

export const OnThisPageNav = ({ config }: OnThisPageNavProps) => {
  return (
    <section id="page-index" className="py-16 bg-gradient-to-b from-stone-50 to-stone-100/80 border-y border-stone-200/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Quick Navigation</p>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800">
            On This <span className="text-gradient">Page</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {config.onThisPageItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-stone-200/70 shadow-sm hover:border-primary/50 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
