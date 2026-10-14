import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

/**
 * 最终语言集合（唯一真相源）。
 * request.ts 的 messagesMap、language-switcher.tsx 的 localeLabels
 * 以及 src/locales/*.json 的文件名都必须与此保持一致。
 */
export const locales = ["en", "ja", "es", "de"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: siteConfig.defaultLocale as Locale,
  localePrefix: "always",
  localeDetection: false,
});
