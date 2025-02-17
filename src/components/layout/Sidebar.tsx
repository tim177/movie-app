import { Navbar, NavLink, Box, Divider, Title } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { NAV_LINKS } from "../../constants/navLinks";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

interface SidebarProps {
  opened: boolean;
}

export default function Sidebar({ opened }: SidebarProps) {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={isMobile ? !opened : false} // Auto-hide on mobile
      width={{ sm: 180, lg: 250 }}
    >
      {/* Main Navigation */}
      <Box>
        <Title order={5} mb="md">
          Navigation
        </Title>
        {NAV_LINKS.map((item) => (
          <NavLink
            key={item.label}
            label={item.label}
            icon={<item.icon size="1.2rem" stroke={2} />}
            component={Link}
            color="red"
            to={item.href}
            active={location.pathname.startsWith(item.href)}
            sx={{ fontSize: "1.2rem" }}
          />
        ))}
      </Box>

      <Divider my="xl" />

      {/* External Links */}
      <Box>
        <Title order={5} mb="md">
          Connect With Me
        </Title>
        <NavLink
          label="GitHub"
          icon={<IconBrandGithub size="1.2rem" stroke={2} />}
          component="a"
          href="https://github.com/tim177"
          target="_blank"
          sx={{ fontSize: "1.2rem" }}
        />
        <NavLink
          label="LinkedIn"
          icon={<IconBrandLinkedin size="1.2rem" stroke={2} />}
          component="a"
          href="https://www.linkedin.com/in/amit-singh-b19022217/"
          target="_blank"
          sx={{ fontSize: "1.2rem" }}
        />
        <NavLink
          label="Contact"
          icon={<IconMail size="1.2rem" stroke={2} />}
          component="a"
          href="mailto:timaraw18@gmail.com"
          sx={{ fontSize: "1.2rem" }}
        />
      </Box>
    </Navbar>
  );
}
