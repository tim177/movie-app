import { Navbar, NavLink, Box } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navLinks";

interface SidebarProps {
  opened: boolean;
}

export default function Sidebar({ opened }: SidebarProps) {
  const location = useLocation();

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 150, lg: 250 }}
    >
      <Box>
        {NAV_LINKS.map((item) => (
          <NavLink
            key={item.label}
            label={item.label}
            icon={<item.icon size="1rem" stroke={1.5} />}
            component={Link}
            to={item.href}
            active={location.pathname === item.href}
          />
        ))}
      </Box>
    </Navbar>
  );
}
