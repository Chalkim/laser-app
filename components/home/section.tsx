import { cn } from "@/lib/utils"

type SectionProps = React.ComponentProps<"section"> & {
  innerClassName?: string
}

export function Section({
  className,
  innerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("section-space", className)} {...props}>
      <div className={cn("container-industrial", innerClassName)}>
        {children}
      </div>
    </section>
  )
}
