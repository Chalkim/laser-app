import Link from "next/link"

export default async function ProductDetailPage(
  props: PageProps<"/products/[slug]">
) {
  const { slug } = await props.params

  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="container-industrial py-20">
        <p className="eyebrow">Product Detail Placeholder</p>
        <h1 className="mt-4 font-heading text-5xl font-semibold tracking-tight">
          {slug.replaceAll("-", " ")}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
          This detail page is intentionally minimal for now. The homepage
          product cards already have a valid click target, and the full product
          detail experience can be designed later.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-full border border-border/80 px-5 py-3 text-sm transition-colors hover:bg-muted"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
