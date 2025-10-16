import Image from "next/image";
import Link from "next/link";

import { Button, Heading, Section, VideoEmbed, TypeformEmbed } from "@/components";

export default function HomePage() {
  return (
    <>
      <Section className="bg-white/80 pb-24 pt-32">
        <div className="grid gap-16 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div className="space-y-10">
            <Heading level={1} eyebrow="Artisan Lab">
              Coaching designed for ambitious creative founders.
            </Heading>
            <p className="max-w-prose text-lg text-ink-500 sm:text-xl">
              Build a resilient business without burning out. Artisan Lab pairs you with industry
              mentors, curriculum, and a community who are committed to mastering their craft.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#apply">Apply to the Lab</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#learn">Explore the curriculum</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-forest-100 via-white to-sand-100 blur-2xl" />
            <Image
              src="/images/placeholders/hero-illustration.svg"
              alt="Abstract workspace collage representing creative coaching"
              width={560}
              height={560}
              className="w-full max-w-xl rounded-3xl border border-forest-100 bg-white p-6 shadow-lift"
              priority
            />
          </div>
        </div>
      </Section>

      <Section id="learn" className="bg-forest-50">
        <div className="mx-auto max-w-prose space-y-6 text-center">
          <Heading eyebrow="See inside" align="center">
            A guided pathway for creative mastery
          </Heading>
          <p className="text-base text-ink-500">
            Each cohort mixes live workshops, studio critiques, and on-demand playbooks inside a
            flexible format that adapts to your season. Preview a recent session below.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <VideoEmbed
            src="https://player.vimeo.com/video/76979871?title=0&byline=0&portrait=0"
            title="Inside the Artisan Lab experience"
            wrapperClassName="w-full max-w-4xl"
          />
        </div>
      </Section>

      <Section id="apply" className="bg-white pb-32">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <Heading eyebrow="Join the collective" align="center">
            Apply for the next Artisan Lab cohort
          </Heading>
          <p className="text-base text-ink-500">
            Tell us about your practice, ambitions, and what you hope to build. We review
            applications weekly and respond with a tailored invitation or next steps.
          </p>
        </div>
        <div className="mt-12">
          <TypeformEmbed formId="demo1234" title="Artisan Lab Application" />
        </div>
      </Section>
    </>
  );
}
