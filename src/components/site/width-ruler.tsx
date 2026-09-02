const MAX_CM = 330;
const TICKS = [80, 150, 220, 280, 325];

/**
 * Линейка ширины ткани — фирменный приём, повторяется по всей странице.
 * Шкала 0…330 см с рисками 80 / 150 / 220 / 280 / 325.
 */
export function WidthRuler({ className = "" }: { className?: string }) {
  return (
    <div className={`relative select-none ${className}`} aria-hidden="true">
      <div className="h-px w-full bg-accent" />
      <div className="relative h-8">
        {TICKS.map((cm) => (
          <div
            key={cm}
            className="absolute top-0 flex flex-col items-start"
            style={{ left: `${(cm / MAX_CM) * 100}%` }}
          >
            <div className="h-3 w-px bg-accent" />
            <span className="tech-line mt-1 -translate-x-1/2 whitespace-nowrap text-accent">
              {cm}
            </span>
          </div>
        ))}
        <span className="tech-line absolute right-0 top-4 text-accent">см</span>
      </div>
    </div>
  );
}

/** Полоса длиной, пропорциональной ширине рулона. */
export function WidthBar({ cm, label }: { cm: number; label?: string }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="h-px min-w-0 flex-1 bg-foreground/15">
        <div className="h-px bg-accent" style={{ width: `${(cm / MAX_CM) * 100}%` }} />
      </div>
      <span className="tech-line shrink-0 text-accent">{label ?? `Ш-${cm}`}</span>
    </div>
  );
}

export { MAX_CM };
