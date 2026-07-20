import {Card, Cards} from "@fumadocs/base-ui/components/card";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex flex-col w-full mx-auto max-w-2/3 p-4 text-center">
            <h1 className="text-4xl my-8 leading-tighter font-medium xl:text-5xl xl:mb-12 text-fd-primary">
                Clear Byte
            </h1>
            <p className="text-lg tracking-tight leading-snug font-light col-span-full md:text-xl xl:text-2xl">
                Delivering academic clarity in byte-sized, actionable insights for tech-curious minds.
            </p>
            <p className="text-base tracking-tight leading-snug font-light text-fd-muted-foreground mt-4 col-span-full md:text-lg">
                Long-form essays on the blog, and hands-on CTF write-ups, bug bounty reports,
                and a growing cybersecurity reference in the docs.
            </p>

            <Cards className="mt-4">
                <Card title="Read the Blog" description="Essays and analysis" href="https://blog.clear-byte.com/" />
                <Card title="Read the Docs" description="Write-ups, tools, and reference" href="https://www.clear-byte.com/docs" />
            </Cards>

            <h2 className="text-2xl mt-16 mb-6 font-medium">
                <span className="text-fd-primary">/</span> Explore the docs
            </h2>
            <Cards>
                <Card title="CTF write-ups" href="https://www.clear-byte.com/docs/Write-Ups/CTF" />
                <Card title="Bug bounty reports" href="https://www.clear-byte.com/docs/Write-Ups/Bug-Bounty" />
                <Card title="Reference guide" href="https://www.clear-byte.com/docs/Reference-Guide" />
                <Card title="Tools & resources" href="https://www.clear-byte.com/docs/Tools" />
            </Cards>

            <h2 className="text-2xl mt-16 mb-4 font-medium">
                <span className="text-fd-primary">/</span> Get in touch
            </h2>
            <p className="text-base tracking-tight leading-snug font-light text-fd-muted-foreground mb-6 col-span-full md:text-lg">
                Found a bug in the write-ups, have a research question, or just want to talk security?
            </p>
            <Link
                href="mailto:info@clear-byte.com"
                className="mx-auto inline-flex items-center gap-2 rounded-full border border-fd-primary px-6 py-2 text-fd-primary hover:bg-fd-primary hover:text-fd-primary-foreground transition-colors"
            >
                info@clear-byte.com
            </Link>

            <p className="text-sm text-fd-muted-foreground mt-16">
                Written by Kenny Wolf - aka Hephaest0s - see more at{' '}
                <Link href="https://kennywolf.info" className="text-fd-primary underline underline-offset-4 hover:opacity-80">
                    kennywolf.info
                </Link>
            </p>
        </div>
    );
}
