import { Container, Heading, Flex, Button, Text, Link } from "@radix-ui/themes";
import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";

function ContactButton({
  icon,
  text,
  subtext,
  link,
}: {
  icon: React.ReactNode;
  text: string;
  subtext: string;
  link: string;
}) {
  return (
    <Link href={link} rel="noopener noreferrer" className="block no-underline">
      <Button size="4" className="block !cursor-pointer !py-8">
        <Flex align="center" justify={"center"} gap="5">
          <div>{icon}</div>
          <Flex direction="column">
            <Text size="5" weight="bold">
              {text}
            </Text>
            <Text size="3" color="gray">
              {subtext}
            </Text>
          </Flex>
        </Flex>
      </Button>
    </Link>
  );
}

export default function Contact() {
  return (
    <Container size="3" className="py-16">
      <Heading as="h2" size="8" className="mb-6 text-center uppercase tracking-wide">
        Let's connect
      </Heading>
      <Flex direction="column" justify="center" gap="6">
        <ContactButton
          icon={<EnvelopeClosedIcon width="24" height="24" />}
          text="Email Us"
          subtext="hello@example.com"
          link="mailto:hello@example.com"
        />
        <ContactButton
          icon={<MobileIcon width="24" height="24" />}
          text="Call Us"
          subtext="+1 (555) 123-4567"
          link="tel:+15551234567"
        />
      </Flex>
    </Container>
  );
}
