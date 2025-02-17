import {
  IconBrandSafari,
  IconDeviceTvOld,
  IconHeart,
  IconVideoPlus,
} from "@tabler/icons-react";

export type NavLink = {
  id: string;
  icon: React.ElementType;
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  {
    id: "explore",
    icon: IconBrandSafari,
    label: "Explore",
    href: "/app/explore",
  },
  {
    id: "movies",
    icon: IconVideoPlus,
    label: "Movies",
    href: "/app/movie",
  },
  {
    id: "tv-shows",
    icon: IconDeviceTvOld,
    label: "TV Shows",
    href: "/app/tv",
  },
  {
    id: "favorites",
    icon: IconHeart,
    label: "Favorites",
    href: "/app/favourite",
  },
];
