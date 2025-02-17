import { useEffect, useState } from "react";
import {
  Title,
  Text,
  Container,
  Button,
  Group,
  Card,
  Image,
  Badge,
  SimpleGrid,
  ThemeIcon,
  Grid,
  rem,
  Accordion,
  TextInput,
  Paper,
  Overlay,
  Center,
  Box,
  Transition,
  useMantineTheme,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import {
  IconPlayerPlay,
  IconDeviceTv,
  IconDeviceMobile,
  IconDownload,
  IconMovie,
  IconStar,
  IconCheck,
} from "@tabler/icons-react";

export default function MovieLanding() {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: IconDeviceTv,
      title: "Watch Everywhere",
      description:
        "Stream on your phone, tablet, laptop, and TV without paying more.",
    },
    {
      icon: IconDownload,
      title: "Download & Go",
      description: "Save your data by downloading videos for offline viewing.",
    },
    {
      icon: IconMovie,
      title: "Unlimited Movies",
      description: "Stream unlimited movies and TV shows on your device.",
    },
  ];

  const plans = [
    {
      title: "Basic",
      price: "$9.99",
      features: [
        "HD Available",
        "1 Device",
        "Cancel Anytime",
        "First Month Free",
      ],
    },
    {
      title: "Premium",
      price: "$14.99",
      features: [
        "Ultra HD",
        "4 Devices",
        "Cancel Anytime",
        "First Month Free",
        "Download & Watch Offline",
      ],
    },
    {
      title: "Family",
      price: "$19.99",
      features: [
        "Ultra HD",
        "6 Devices",
        "Cancel Anytime",
        "First Month Free",
        "Download & Watch Offline",
        "Family Controls",
      ],
    },
  ];

  const trendingMovies = [
    {
      title: "Inception",
      rating: "9.2",
      image: "/placeholder.svg?height=400&width=300",
      genre: "Sci-Fi",
    },
    {
      title: "The Dark Knight",
      rating: "9.0",
      image: "/placeholder.svg?height=400&width=300",
      genre: "Action",
    },
    {
      title: "Interstellar",
      rating: "8.9",
      image: "/placeholder.svg?height=400&width=300",
      genre: "Adventure",
    },
    {
      title: "Pulp Fiction",
      rating: "8.8",
      image: "/placeholder.svg?height=400&width=300",
      genre: "Crime",
    },
  ];

  return (
    <Box bg="dark.9">
      {/* Header */}
      <Box
        py="md"
        sx={(theme) => ({
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          backdropFilter: scrolled ? "blur(10px)" : "none",
          backgroundColor: scrolled
            ? theme.fn.rgba(theme.colors.dark[9], 0.9)
            : "transparent",
          transition: "all 0.3s",
        })}
      >
        <Container size="lg">
          <Group position="apart">
            <Title order={2} color="white">
              MovieFlix
            </Title>
            <Group>
              <Button variant="subtle" color="gray">
                Login
              </Button>
              <Button
                variant="gradient"
                gradient={{ from: "pink", to: "violet" }}
              >
                Start Watching
              </Button>
            </Group>
          </Group>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, .9) 70%)"
          opacity={1}
          zIndex={0}
        />
        <Container
          size="lg"
          sx={{ height: "100%", position: "relative", zIndex: 1 }}
        >
          <Center sx={{ height: "100%" }}>
            <Box ta="center" mt={-120}>
              <Title
                sx={(theme) => ({
                  fontSize: rem(60),
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: theme.white,
                  [theme.fn.smallerThan("sm")]: {
                    fontSize: rem(40),
                  },
                })}
              >
                Unlimited Movies, TV Shows, & More
              </Title>
              <Text
                size="xl"
                color="gray.4"
                mt="xl"
                mb={30}
                sx={{ maxWidth: 600 }}
                mx="auto"
              >
                Watch anywhere. Cancel anytime. Ready to watch? Enter your email
                to create or restart your membership.
              </Text>
              <Group position="center">
                <TextInput
                  size="lg"
                  placeholder="Email address"
                  sx={{ minWidth: 300 }}
                />
                <Button
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "pink", to: "violet" }}
                >
                  Get Started
                </Button>
              </Group>
            </Box>
          </Center>
        </Container>
      </Box>

      {/* Trending Movies */}
      <Container size="lg" py={100}>
        <Title order={2} color="white" mb={50}>
          Trending Now
        </Title>
        <SimpleGrid
          cols={4}
          spacing={30}
          breakpoints={[
            { maxWidth: "md", cols: 3 },
            { maxWidth: "sm", cols: 2 },
            { maxWidth: "xs", cols: 1 },
          ]}
        >
          {trendingMovies.map((movie) => (
            <Card
              key={movie.title}
              p="lg"
              radius="md"
              ref={ref}
              sx={(theme) => ({
                backgroundColor: theme.colors.dark[8],
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              })}
            >
              <Card.Section>
                <Image
                  src={movie.image || "/placeholder.svg"}
                  height={400}
                  alt={movie.title}
                />
              </Card.Section>

              <Group position="apart" mt="md">
                <Text weight={500} color="white">
                  {movie.title}
                </Text>
                <Badge
                  variant="gradient"
                  gradient={{ from: "pink", to: "violet" }}
                >
                  {movie.genre}
                </Badge>
              </Group>

              <Group spacing={5} mt={5}>
                <IconStar size={16} color={theme.colors.yellow[5]} />
                <Text size="sm" color="gray.5">
                  {movie.rating}
                </Text>
              </Group>

              <Button
                fullWidth
                mt="md"
                variant="gradient"
                gradient={{ from: "pink", to: "violet" }}
                leftIcon={<IconPlayerPlay size={16} />}
              >
                Watch Now
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* Features */}
      <Container size="lg" py={100}>
        <SimpleGrid
          cols={3}
          spacing={50}
          breakpoints={[
            { maxWidth: "md", cols: 2 },
            { maxWidth: "sm", cols: 1 },
          ]}
        >
          {features.map((feature) => (
            <Box key={feature.title} ta="center">
              <ThemeIcon
                size={90}
                radius="md"
                variant="gradient"
                gradient={{ from: "pink", to: "violet" }}
              >
                <feature.icon size={50} />
              </ThemeIcon>
              <Text size="lg" mt="sm" mb={7} weight={500} color="white">
                {feature.title}
              </Text>
              <Text size="sm" color="gray.5">
                {feature.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Pricing */}
      <Container size="lg" py={100}>
        <Title order={2} color="white" ta="center" mb={50}>
          Choose Your Plan
        </Title>
        <SimpleGrid
          cols={3}
          spacing={30}
          breakpoints={[
            { maxWidth: "md", cols: 2 },
            { maxWidth: "sm", cols: 1 },
          ]}
        >
          {plans.map((plan) => (
            <Card
              key={plan.title}
              p="xl"
              radius="md"
              sx={(theme) => ({
                backgroundColor: theme.colors.dark[8],
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              })}
            >
              <Title order={3} color="white">
                {plan.title}
              </Title>
              <Text size="xl" weight={700} color="white" my="lg">
                {plan.price}
                <Text span size="sm" color="gray.5">
                  {" "}
                  /month
                </Text>
              </Text>
              {plan.features.map((feature) => (
                <Group key={feature} mt="sm">
                  <ThemeIcon
                    size={20}
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: "pink", to: "violet" }}
                  >
                    <IconCheck size={12} />
                  </ThemeIcon>
                  <Text size="sm" color="gray.5">
                    {feature}
                  </Text>
                </Group>
              ))}
              <Button
                fullWidth
                mt={30}
                variant={plan.title === "Premium" ? "gradient" : "outline"}
                gradient={{ from: "pink", to: "violet" }}
              >
                Choose Plan
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* FAQ */}
      <Container size="sm" py={100}>
        <Title order={2} color="white" ta="center" mb={50}>
          Frequently Asked Questions
        </Title>
        <Accordion
          variant="separated"
          chevronPosition="right"
          defaultValue="customization"
          styles={(theme) => ({
            item: {
              backgroundColor: theme.colors.dark[8],
              border: 0,
            },
            control: {
              color: theme.white,
            },
            content: {
              color: theme.colors.gray[5],
            },
          })}
        >
          <Accordion.Item value="customization">
            <Accordion.Control>What is MovieFlix?</Accordion.Control>
            <Accordion.Panel>
              MovieFlix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="flexibility">
            <Accordion.Control>How much does MovieFlix cost?</Accordion.Control>
            <Accordion.Panel>
              Watch MovieFlix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              $9.99 to $19.99 a month.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="focus-ring">
            <Accordion.Control>Where can I watch?</Accordion.Control>
            <Accordion.Panel>
              Watch anywhere, anytime. Sign in with your MovieFlix account to
              watch instantly on the web at MovieFlix.com from your personal
              computer or on any internet-connected device.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* Newsletter */}
      <Container size="sm" py={100}>
        <Paper
          p={40}
          radius="md"
          sx={(theme) => ({
            backgroundColor: theme.colors.dark[8],
          })}
        >
          <Title order={3} ta="center" color="white">
            Stay Updated
          </Title>
          <Text color="gray.5" size="sm" ta="center" mt="sm">
            Subscribe to our newsletter to get updates about new movies and
            special offers
          </Text>
          <Group position="center" mt={30}>
            <TextInput placeholder="Enter your email" sx={{ minWidth: 300 }} />
            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "violet" }}
            >
              Subscribe
            </Button>
          </Group>
        </Paper>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        py={40}
        sx={(theme) => ({
          borderTop: `1px solid ${theme.colors.dark[7]}`,
        })}
      >
        <Container size="lg">
          <Group position="apart">
            <Text color="gray.5" size="sm">
              © 2025 MovieFlix. All rights reserved.
            </Text>
            <Group spacing={20}>
              <Text component="a" href="#" color="gray.5" size="sm">
                Terms of Service
              </Text>
              <Text component="a" href="#" color="gray.5" size="sm">
                Privacy Policy
              </Text>
              <Text component="a" href="#" color="gray.5" size="sm">
                Contact
              </Text>
            </Group>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
