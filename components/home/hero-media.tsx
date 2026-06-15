import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const overlays = [
  { label: "Laser Source", value: "6 kW Fiber" },
  { label: "Positioning", value: "+/- 0.03 mm" },
  { label: "Automation", value: "Load / Unload Ready" },
]

export function HeroMedia({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "panel-surface machine-placeholder relative min-h-[420px] overflow-hidden p-5 md:min-h-[560px]",
        className
      )}
    >
      <div className="absolute inset-x-5 top-5 flex items-center justify-between">
        <Badge
          variant="outline"
          className="rounded-full bg-background/75 px-3 py-1"
        >
          LX Series Platform
        </Badge>
        <span className="font-mono text-[0.7rem] tracking-[0.24em] text-muted-foreground uppercase">
          Future machine photo area
        </span>
      </div>

      <div className="absolute inset-x-8 top-24 bottom-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,color-mix(in_oklch,var(--foreground)_5%,transparent),transparent_30%),linear-gradient(90deg,color-mix(in_oklch,var(--foreground)_8%,transparent)_1px,transparent_1px),linear-gradient(180deg,color-mix(in_oklch,var(--foreground)_8%,transparent)_1px,transparent_1px)] bg-[size:auto,34px_34px,34px_34px] shadow-[inset_0_1px_0_color-mix(in_oklch,var(--background)_72%,transparent)]">
        <div className="absolute top-[18%] left-[12%] h-[16%] w-[52%] rounded-2xl border border-white/10 bg-foreground/8" />
        <div className="absolute top-[38%] left-[18%] h-[24%] w-[58%] rounded-[2rem] border border-white/10 bg-foreground/6" />
        <div className="absolute bottom-[18%] left-[16%] h-[8%] w-[62%] rounded-full border border-white/10 bg-foreground/10" />
        <div className="absolute top-[24%] right-[12%] h-[26%] w-[10%] rounded-full border border-white/10 bg-accent/25" />
        <div className="absolute right-[14%] bottom-[18%] h-[12%] w-[18%] rounded-2xl border border-white/10 bg-background/30" />
      </div>

      <div className="absolute right-5 bottom-5 left-5 grid gap-3 md:grid-cols-3">
        {overlays.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-border/70 bg-background/75 p-4 backdrop-blur-sm"
          >
            <div className="font-mono text-[0.66rem] tracking-[0.22em] text-muted-foreground uppercase">
              {item.label}
            </div>
            <div className="mt-2 text-sm font-medium text-foreground">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
