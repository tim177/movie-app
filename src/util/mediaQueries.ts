import { useMediaQuery } from "@mantine/hooks";

export const useBreakpoints = () => {
  const isSmallerThanTable = useMediaQuery("(max-width:768px)");
  const isSmallestTable = useMediaQuery("(max-width:420px)");

  return { isSmallerThanTable, isSmallestTable };
};
