import { FC } from "react";
import { Card, Skeleton, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Avator from "../../../assets/no-poster.png";
import { CastType } from "../../../types/Credit";
import { useStyle } from "../../../styles/useStyle";

interface CastCardProps {
  actor: CastType;
  loading: boolean;
}

const CastCard: FC<CastCardProps> = ({ actor, loading }) => {
  const navigate = useNavigate();
  const { classes } = useStyle();

  const actorUrl = actor.profile_path
    ? `https://image.tmdb.org/t/p/original/${actor?.profile_path}`
    : Avator;

  return (
    <Card
      h={300}
      p={0}
      style={{ cursor: "pointer", position: "relative" }}
      onClick={() => navigate(`/cast/${actor.id}`)}
    >
      {loading ? (
        <Skeleton height={300} className={classes.skeleton} />
      ) : (
        <img width={"100%"} height={"100%"} src={actorUrl} alt="cast-image" />
      )}

      <Text mt={4} size={14} align="center" fw={700} color="dimmed">
        {actor.name}
      </Text>
      <Text align="center" fw={500} opacity={0.7} size={14} color="white">
        {actor.character}
      </Text>
    </Card>
  );
};

export default CastCard;
