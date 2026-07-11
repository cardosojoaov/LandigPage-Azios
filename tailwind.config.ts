import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "on-surface-variant": "#94a3b8",
        "tertiary-fixed": "#ffdad4",
        "outline-variant": "#c7c4d8",
        "background": "#faf8ff",
        "surface-container": "rgba(255, 255, 255, 0.05)",
        "outline": "#777587",
        "on-error": "#ffffff",
        "on-primary-container": "#dad7ff",
        "tertiary-container": "#a73d2b",
        "on-tertiary-fixed": "#3f0300",
        "on-secondary-container": "#00714d",
        "on-secondary-fixed": "#002113",
        "on-tertiary": "#ffffff",
        "surface-container-highest": "rgba(255, 255, 255, 0.15)",
        "secondary-fixed": "#6ffbbe",
        "on-secondary": "#ffffff",
        "surface-variant": "rgba(255, 255, 255, 0.1)",
        "on-primary-fixed": "#0f0069",
        "surface-tint": "#4d44e3",
        "error": "#ba1a1a",
        "inverse-surface": "#f1f5f9",
        "secondary": "#006c49",
        "surface-container-lowest": "rgba(255, 255, 255, 0.02)",
        "on-secondary-fixed-variant": "#005236",
        "secondary-fixed-dim": "#4edea3",
        "inverse-on-surface": "#eef0ff",
        "primary": "#009ebf",
        "on-primary": "#ffffff",
        "surface-container-high": "rgba(255, 255, 255, 0.1)",
        "secondary-container": "#6cf8bb",
        "surface-bright": "rgba(255, 255, 255, 0.05)",
        "on-tertiary-container": "#ffd1c9",
        "on-tertiary-fixed-variant": "#842415",
        "primary-fixed": "#e2dfff",
        "inverse-primary": "#c3c0ff",
        "on-surface": "#f8fafc",
        "surface-dim": "#d2d9f4",
        "primary-fixed-dim": "#c3c0ff",
        "on-primary-fixed-variant": "#3323cc",
        "tertiary-fixed-dim": "#ffb4a6",
        "primary-container": "#009ebf",
        "surface": "transparent",
        "error-container": "#ffdad6",
        "surface-container-low": "transparent",
        "on-error-container": "#93000a",
        "on-background": "#131b2e",
        "tertiary": "#872616",
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px",
        "bento": "12px",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "margin-desktop": "32px",
        "unit": "4px",
        "bento-gap": "16px",
        "margin-mobile": "16px",
        "container-max-width": "1280px",
        "gutter": "24px",
        "container-width": "1280px"
      },
      fontFamily: {
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "sans": ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
        "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }]
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "slideUp": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slideUp": "slideUp 1s ease-out"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
