import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";

const posts = [
  {
    title: "Building Better Forms with React Hook Form and Zod",
    href: "#",
  },
  {
    title: "A Practical Guide to Data Fetching in Next.js",
    href: "#",
  },
  {
    title: "How I Structure Frontend Projects with TypeScript",
    href: "#",
  },
];

export default function Home() {
  return (
    <section className="max-w-2xl mx-auto px-8 py-16">
      <Flex direction="column" gap="6">
        <Flex align="center" gap="4">
          <Avatar size="8" src="/avatar.png" fallback="JF" />

          <Box>
            <Heading size="6" weight="medium">
              Joaquin Franco
            </Heading>

            <Text color="gray">Software Developer</Text>
            <div className="w-fit px-4 py-2 rounded-xl border border-neutral-200 text-sm text-neutral-500 leading-1.5 tracking-tight flex items-center gap-2 mt-2">
              <span className="size-2 rounded-full bg-emerald-400 " />
              Available
            </div>
          </Box>
        </Flex>

        <Box>
          <Text size="3" color="gray" className="mt-6 leading-7">
            I work with startups, agencies and small businesses to build
            customer-facing web applications.
          </Text>
          <br />

          <Text size="3" color="gray" className="mt-4 leading-7">
            Available for freelance projects and long-term product
            collaborations.
          </Text>
        </Box>

        <Flex gap="4">
          <Button color="ruby" variant="soft" asChild>
            <Link
              className="flex items-center gap-2"
              href="mailto:joafran0016@gmail.com"
            >
              <EnvelopeClosedIcon />
              Email
            </Link>
          </Button>

          <Button color="gray" variant="soft" asChild>
            <Link href="https://github.com/joafran" target="_blank">
              <GitHubLogoIcon className="size-4" />
              GitHub
            </Link>
          </Button>

          <Button variant="soft" asChild>
            <Link
              href="https://linkedin.com/in/joaquin--franco"
              target="_blank"
            >
              <LinkedInLogoIcon className="size-4" />
              LinkedIn
            </Link>
          </Button>
        </Flex>

        <Separator size="4" />

        <Box>
          <Flex justify="between" align="center" mb="5">
            <Heading size="4" weight="medium">
              Latest Articles
            </Heading>

            <Link href="https://medium.com/@yourusername">View all</Link>
          </Flex>

          <Flex direction="column" gap="4">
            {posts.map((post) => (
              <Link key={post.title} href={post.href} className="block">
                {post.title}
              </Link>
            ))}
          </Flex>
        </Box>
      </Flex>
    </section>
  );
}
