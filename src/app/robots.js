import { userAgent } from "next/server";
import sitemap from "./sitemap";

export default async function robots() {
    return {
        rules: [{
            userAgent: "*",
            allow: "/",
            disallow: [""],
        }],
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,

    }
}