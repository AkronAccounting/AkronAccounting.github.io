import { Container, Flex, Text, Link } from "@radix-ui/themes";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--accent-3)] py-12 text-[var(--accent-9-contrast)]">
      <Container size="3">
        <Flex direction="column" align="center" gap="4">
          <Flex wrap="wrap" gap="4" justify="center">
            <Link asChild className="text-[var(--accent-9-contrast)] hover:underline">
              <RouterLink to="/">Home</RouterLink>
            </Link>
            <Link asChild className="text-[var(--accent-9-contrast)] hover:underline">
              <RouterLink to="/#about">About</RouterLink>
            </Link>
            <Link asChild className="text-[var(--accent-9-contrast)] hover:underline">
              <RouterLink to="/#services">Services</RouterLink>
            </Link>
            <Link asChild className="text-[var(--accent-9-contrast)] hover:underline">
              <RouterLink to="/#contact">Contact</RouterLink>
            </Link>
          </Flex>
          <Text size="2" className="text-center">
            © {currentYear} Akron Accounting Services. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </footer>
  );
}
