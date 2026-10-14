export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    website?: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Dead of Darkness 2 Wiki",
  shortName: "Dead of Darkness 2",
  logoText: "D",
  tagline: "Horror Survival Guides, Walkthroughs & Secrets",
  description: "Your ultimate Dead of Darkness 2 wiki: story walkthroughs, characters, weapons, enemies, puzzle solutions, and survival horror tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://deadofdarkness2.top",
  supportEmail: "support@deadofdarkness2.top",
  gameUrl: "https://store.steampowered.com/app/3947120/Dead_of_Darkness_2/",
  heroVideoId: "SAOW5DFqD5o", // Dead of Darkness 2 - Announcement Trailer (official Retrofiction Games channel)
  social: {
    website: "https://www.deadofdarkness.com/",
    discord: "https://discord.gg/BEagkW6D38",
    youtube: "https://www.youtube.com/@retrofictiongames",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
