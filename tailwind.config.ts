import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    // geralmente o que eu uso mudar c precisar
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["PT Sans Caption", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Headings
        "heading-hg": ["40px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-xl": ["32px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-lg": ["28px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-md": ["24px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-sm": ["20px", { lineHeight: "120%", fontWeight: "700" }],
        "heading-xs": ["16px", { lineHeight: "120%", fontWeight: "700" }],
        // Body
        "body-md": ["16px", { lineHeight: "150%", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "150%", fontWeight: "400" }],
        "body-xs": ["12px", { lineHeight: "150%", fontWeight: "400" }],
        // Body tag
        "body-tag": ["12px", { lineHeight: "100%", fontWeight: "400" }],
        // Action
        "action-md": ["16px", { lineHeight: "normal", fontWeight: "500" }],
        "action-sm": ["14px", { lineHeight: "normal", fontWeight: "500" }],
      },
    },
  },
};

export default config;
