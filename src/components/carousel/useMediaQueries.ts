import { useMediaQuery } from "@mantine/hooks";

export const useMediaQueries = () => ({
  isTabletOrSmaller: useMediaQuery("(max-width: 768px)"),
  isMobile: useMediaQuery("(max-width: 420px)"),
});
