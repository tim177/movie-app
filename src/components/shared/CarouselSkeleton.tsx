import { Carousel } from "@mantine/carousel";
import { Skeleton, Title } from "@mantine/core";
import { useStyle } from "../../styles/useStyle";

interface Props {
  title?: string;
}

const CarouselSkeleton: React.FC<Props> = ({ title }) => {
  const { classes } = useStyle();

  return (
    <>
      {title && (
        <Title fw={500} size={18}>
          {title}
        </Title>
      )}
      <Carousel my={20} slideSize="20%" slideGap="lg" loop align="start">
        {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Slide key={index}>
            <Skeleton height={300} width="100%" className={classes.skeleton} />
            <Skeleton
              mt={20}
              height={20}
              width="90%"
              className={classes.skeleton}
            />
            <Skeleton
              mt={20}
              height={20}
              width="50%"
              className={classes.skeleton}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselSkeleton;
