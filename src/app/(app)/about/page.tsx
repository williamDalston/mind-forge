import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Will Alston — Analyst, Builder, Strategist",
  description:
    "Will Alston (William Alston) is an analyst, builder, strategist, and creative thinker working at the intersection of data, technology, systems thinking, and ambitious digital products. Based at willalston.space.",
  keywords: [
    "Will Alston",
    "William Alston",
    "Will Alston about",
    "William Alston analyst",
    "Will Alston strategist",
    "Will Alston builder",
    "Alston Analytics",
    "willalston.space",
  ],
  openGraph: {
    title: "About Will Alston — Analyst, Builder, Strategist",
    description:
      "Will Alston (William Alston) is an analyst, builder, strategist, and creative thinker working at the intersection of data, technology, and ambitious digital products.",
    type: "profile",
    url: "https://willalston.space/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Will Alston — Analyst, Builder, Strategist",
    description:
      "Will Alston is an analyst, builder, strategist, and creative thinker. Learn about his work, thinking, and ongoing journey.",
  },
  alternates: {
    canonical: "https://willalston.space/about",
  },
};

const skills = [
  {
    title: "Data & Insight",
    description:
      "Deep work with analytics, reporting, structured data, decision support, and translating raw information into something leaders and teams can actually use.",
    tags: ["Analytics", "Dashboards", "Reporting", "Decision Support"],
  },
  {
    title: "Product & Systems Thinking",
    description:
      "Seeing how moving parts connect, where leverage hides, and how to shape tools and products so they become coherent, scalable, and valuable.",
    tags: ["Product Thinking", "Workflows", "Architecture", "Strategy"],
  },
  {
    title: "Communication & Vision",
    description:
      "A good idea matters more when it can be expressed clearly, persuasively, and with enough force to move people.",
    tags: ["Storytelling", "Synthesis", "Clarity", "Leadership Presence"],
  },
];

const workAreas = [
  {
    title: "Operational clarity",
    description:
      "Improving processes, organizing information, building reporting logic, and helping teams move from scattered inputs to clearer decisions.",
  },
  {
    title: "Analytical problem-solving",
    description:
      "Digging into data, evaluating patterns, asking sharper questions, and finding the story hidden underneath the numbers.",
  },
  {
    title: "Digital product building",
    description:
      "Exploring and developing thoughtful apps, tools, websites, and systems that combine utility with strong conceptual design.",
  },
  {
    title: "Strategic synthesis",
    description:
      "Connecting insights across business, technology, human behavior, and long-term opportunity instead of treating them as separate worlds.",
  },
];

const journey = [
  {
    phase: "Foundation",
    title: "Analytical and operational grounding",
    description:
      "Developing skill in structured work, data, systems, and the kinds of details that make execution strong instead of merely aspirational.",
  },
  {
    phase: "Expansion",
    title: "Strategic and entrepreneurial experimentation",
    description:
      "Exploring projects, platforms, and product ideas that stretch beyond traditional roles and point toward larger independent creation.",
  },
  {
    phase: "Current arc",
    title: "Building with more precision and intention",
    description:
      "Sharpening the ability to merge deep thought, technical execution, clear communication, and long-range ambition into work that carries weight.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              "@id": "https://willalston.space/#person",
              name: "Will Alston",
              alternateName: "William Alston",
              givenName: "William",
              familyName: "Alston",
              url: "https://willalston.space/about",
              image: "https://willalston.space/og-image.png",
              email: "info@alstonanalytics.com",
              jobTitle: "Analyst, Builder & Strategist",
              description:
                "Will Alston works at the intersection of data, technology, systems thinking, and creative ambition. He is drawn to problems that require both precision and imagination.",
              knowsAbout: [
                "Data Analytics",
                "Product Development",
                "Strategic Thinking",
                "Digital Products",
                "Systems Design",
                "Critical Thinking",
              ],
              sameAs: [
                "https://www.linkedin.com/in/william-alston/",
                "https://x.com/agape_will",
                "https://github.com/williamdalston",
                "https://www.facebook.com/TheBloomWithin",
                "https://www.instagram.com/faradaybach/",
                "https://willalston.space",
              ],
            },
          }),
        }}
      />
      {/* Hero */}
      <section className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-display font-bold text-2xl shadow-rest">
            WA
          </div>
          <div>
            <h1 className="display-heading text-2xl sm:text-3xl font-semibold">
              Will Alston
            </h1>
            <p className="text-sm text-muted-foreground/75 mt-0.5">
              Analyst &middot; Builder &middot; Strategist &middot; Creative Thinker
            </p>
          </div>
        </div>
        <p className="text-foreground/80 leading-relaxed max-w-2xl">
          Will Alston works at the intersection of data, technology, systems thinking, and creative ambition.
          He is drawn to problems that require both precision and imagination — whether that means shaping analytics,
          building digital products, clarifying strategy, or translating complexity into something sharp and useful.
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          His work blends analytical rigor with a strong instinct for communication, product thinking, and long-range vision.
          He is especially interested in using technology to create tools, platforms, and experiences that are not only functional,
          but meaningful.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="mailto:info@alstonanalytics.com"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gold/90 hover:bg-gold text-primary-foreground text-sm font-medium transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/william-alston/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/40 text-sm font-medium text-foreground/80 hover:bg-sidebar-accent/40 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/agape_will"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/40 text-sm font-medium text-foreground/80 hover:bg-sidebar-accent/40 transition-colors"
          >
            X / Twitter
          </a>
          <a
            href="https://github.com/williamdalston"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/40 text-sm font-medium text-foreground/80 hover:bg-sidebar-accent/40 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.facebook.com/TheBloomWithin"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/40 text-sm font-medium text-foreground/80 hover:bg-sidebar-accent/40 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/faradaybach/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/40 text-sm font-medium text-foreground/80 hover:bg-sidebar-accent/40 transition-colors"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* Core strengths */}
      <section className="space-y-4">
        <h2 className="section-heading text-xl font-semibold">Core strengths</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="card-hover rounded-xl border border-border/50 bg-card p-5 space-y-3"
            >
              <h3 className="font-medium text-sm">{skill.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-gold/5 border border-gold/10 text-[10px] text-gold/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work areas */}
      <section className="space-y-4">
        <h2 className="section-heading text-xl font-semibold">What his work centers on</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {workAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-xl border border-border/50 bg-card p-5 space-y-2"
            >
              <h3 className="font-medium text-sm">{area.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Thinking */}
      <section className="space-y-4">
        <h2 className="section-heading text-xl font-semibold">How he thinks</h2>
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Will is especially interested in ideas that travel. He values concepts that illuminate more than one domain:
          psychology that helps in business, philosophy that sharpens judgment, strategy that clarifies relationships,
          and technology that extends human capability without flattening human depth.
        </p>
        <div className="rounded-xl border border-gold/15 bg-card p-6 quote-ornament">
          <p className="text-sm text-foreground/80 italic leading-relaxed">
            The best work is not just technically competent. It clarifies, elevates, and leaves something better
            arranged than it was before.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="space-y-4">
        <h2 className="section-heading text-xl font-semibold">Ongoing journey</h2>
        <div className="space-y-0 relative before:absolute before:left-[1px] before:top-6 before:bottom-6 before:w-[2px] before:bg-gold/15">
          {journey.map((item) => (
            <div
              key={item.phase}
              className="rounded-xl border border-border/50 bg-card p-5 pl-6 border-l-2 border-l-gold/40 space-y-1 mb-3 last:mb-0"
            >
              <span className="text-[10px] text-gold/70 uppercase tracking-wider font-medium">
                {item.phase}
              </span>
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="rounded-xl border border-border/50 bg-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-medium text-sm">Connect with Will</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Whether the conversation is about analytics, digital products, strategy, or thoughtful collaboration.
          </p>
        </div>
        <a
          href="mailto:info@alstonanalytics.com"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gold/90 hover:bg-gold text-primary-foreground text-sm font-medium transition-colors"
        >
          Email Will
        </a>
      </section>

      <p className="text-[11px] text-muted-foreground/30 text-center pb-4">
        &copy; 2026 Will Alston. Built with clarity, ambition, and a little midnight voltage.
      </p>
    </div>
  );
}
