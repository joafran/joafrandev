const email = "joafran0016@gmail.com";
const description = "Software Developer helping startups and businesses build user-friendly web applications. Specialized in React, Next.js, TypeScript.";

export const siteMetadata = {
    url: "https://joafrandev.vercel.app",
    author: {
        name: "Joaquin Franco",
        role: "Software Developer",
        description,
        email,
    },
    social: {
        linkedin: {
            url: "https://linkedin.com/in/joaquin--franco"
        },
        github: {
            handle: "joafran",
            url: "https://github.com/joafran",
        },
        email,
    },
    metadata: {
        title: {
            default: "Joaquin Franco | Software Developer",
            template: "%s | Joaquin Franco",
        },
        description,
        siteName: "Joaquin Franco | Software Developer",
        locale: "en_US",
    },
} as const;

export const baseUrl = siteMetadata.url;
export const author = siteMetadata.author;
export const social = siteMetadata.social;
export const metadata = siteMetadata.metadata;