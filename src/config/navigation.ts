import type { LucideIcon } from "lucide-react";
import { BookOpen, CalendarClock, Cog, Gamepad2, Map, MessagesSquare, Users } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "maps", path: "/maps", icon: Map, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Gamepad2, isContentType: true },
  { key: "release", path: "/release", icon: CalendarClock, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
