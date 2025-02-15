import { Box, Flex, Skeleton } from "@mantine/core";
import { FC } from "react";
import { useStyle } from "../../styles/useStyle";
import { useMediaQuery } from "@mantine/hooks";

interface sekeletonProps {
  style: boolean;
}

const SkeletonComponent: FC<sekeletonProps> = ({ style }) => {
  const { classes } = useStyle();
  const isSmallestTable = useMediaQuery("(max-width:420px)");

  return (
    <Flex
      w={"100%"}
      gap={20}
      justify={"start"}
      pos={"relative"}
      style={{
        flexFlow: isSmallestTable ? "row wrap" : " wrap",
        flexWrap: "wrap",
        zIndex: 30,
      }}
    >
      <Box w={isSmallestTable ? "100%" : "30%"}>
        <Skeleton className={classes.skeleton} h={style ? 500 : 400} />
      </Box>
      <Box w={isSmallestTable ? "100%" : "65%"}>
        <Skeleton h={30} className={classes.skeleton} w="70%" radius="xl" />
        <Skeleton h={30} mt={6} className={classes.skeleton} radius="xl" />
        {style && (
          <Flex gap={20} mt={20}>
            <Skeleton
              h={20}
              w={"10%"}
              mt={6}
              className={classes.skeleton}
              radius="xl"
            />
            <Skeleton
              h={20}
              w={"10%"}
              mt={6}
              className={classes.skeleton}
              radius="xl"
            />
          </Flex>
        )}
        <Box mt={30}>
          <Skeleton
            h={30}
            w={"30%"}
            mb={10}
            className={classes.skeleton}
            radius="xl"
          />
          <Skeleton h={100} className={classes.skeleton} radius="lg" />
        </Box>
        <Box>
          <Skeleton
            h={30}
            w={"50%"}
            mb={10}
            className={classes.skeleton}
            radius="xl"
          />
          <Skeleton h={100} className={classes.skeleton} radius="lg" />
        </Box>
      </Box>
    </Flex>
  );
};

export default SkeletonComponent;
