// src/components/AnimationMessage.tsx
import { Button, Text } from "@mantine/core";
import { useState } from "react";

const AnimationMessage = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <>
      <Text size="xl" weight={600} color="gray.7">
        🚀 No favorites added yet!
      </Text>
      <Text color="dimmed" size="md">
        Start exploring and add your favorite movies or TV shows!
      </Text>
      <Button
        variant="light"
        size="md"
        radius="md"
        onClick={() => setShowAnimation(true)}
      >
        Discover Movies 🎬
      </Button>
      {showAnimation && (
        <Text size="lg" color="blue.6" weight={500}>
          🎉 Woohoo! Go to Movies, click on any movie, and add it to your
          favorites! 🍿✨
        </Text>
      )}
    </>
  );
};

export default AnimationMessage;
