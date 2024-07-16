import { Container, Flex, Text, Link } from "@radix-ui/themes";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--accent-3)] py-12 text-[var(--accent-9-contrast)]">
      <Container size="3">
        <Flex direction="column" align="center" gap="4">
          <Flex wrap="wrap" gap="4" justify="center">
            <Link href="/" className="text-[var(--accent-9-contrast)] hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-[var(--accent-9-contrast)] hover:underline">
              About
            </Link>
            <Link href="/services" className="text-[var(--accent-9-contrast)] hover:underline">
              Services
            </Link>
            <Link href="/contact" className="text-[var(--accent-9-contrast)] hover:underline">
              Contact
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
