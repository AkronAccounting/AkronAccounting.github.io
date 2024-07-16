import { Container, Flex, Text, Link } from "@radix-ui/themes";
import { Link as RouterLink } from "react-router-dom";
import { usePathScroll } from "@/components";

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link asChild className="text-[var(--accent-9-contrast)] hover:underline">
      <RouterLink to={to} onClick={usePathScroll(to)}>
        {children}
      </RouterLink>
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--accent-3)] py-12 text-[var(--accent-9-contrast)]">
      <Container size="3">
        <Flex direction="column" align="center" gap="4">
          <Flex wrap="wrap" gap="4" justify="center">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/#about">About</FooterLink>
            <FooterLink to="/#services">Services</FooterLink>
            <FooterLink to="/#contact">Contact</FooterLink>
          </Flex>
          <Text size="2" className="text-center">
            © {currentYear} Akron Accounting Services. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </footer>
  );
}
