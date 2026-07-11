import { cfg } from "../../../venture.config";
import { SeoBody, Footer, Cta } from "@millions/core/blocks";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return cfg.seoPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = cfg.seoPages.find((p) => p.slug === slug);
  return page ? { title: page.title, description: page.description } : {};
}

export default async function Guide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = cfg.seoPages.find((p) => p.slug === slug);
  if (!page) notFound();
  return (
    <main>
      <article style={{ maxWidth: 720, margin: "0 auto", padding: "56px 20px 0" }}>
        <h1 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.15 }}>{page.title}</h1>
      </article>
      <SeoBody body={page.body} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px 56px" }}>
        <Cta cfg={cfg} id={`guide_${page.slug}`} />
      </div>
      <Footer cfg={cfg} />
    </main>
  );
}
