import adapter from '@sveltejs/adapter-vercel';
import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";
import {mdsvex} from "mdsvex";
import {createHighlighter} from "shiki";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".svx"],

    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: [".svx"],
            highlight: {
                highlighter: async (code, lang = "bash") => {
                    const highlighter = await createHighlighter({
                        themes: ["monokai"],
                        langs: [
                            "javascript",
                            "typescript",
                            "css",
                            "html",
                            "svelte",
                            "rust",
                            "markdown",
                            "json",
                            "toml",
                        ],
                    });

                    const html = highlighter.codeToHtml(code, {
                        lang,
                        theme: "monokai",
                    });
                    return `{@html \`${html}\` }`;
                },
            },
        }),
    ],

    kit: {
        adapter: adapter(),
    },
};

export default config;
