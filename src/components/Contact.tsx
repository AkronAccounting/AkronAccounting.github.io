import { Container, Heading, Flex, Button, Text, Link } from "@radix-ui/themes";
import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons";

function ContactButton({
  icon,
  text,
  subtext,
  link,
  iconClasses,
}: {
  icon: React.ReactNode;
  text: string;
  subtext: string;
  link: string;
  iconClasses?: string;
}) {
  return (
    <Link href={link} rel="noopener noreferrer" role="button" className="no-underline">
      <Button
        size="4"
        className="!w-[264px] !cursor-pointer !justify-start !py-10 shadow-[0_0_0_0_var(--accent-a8)] transition-shadow !duration-300 ease-in-out hover:shadow-[0_0px_8px_8px_var(--accent-a6)]"
      >
        <Flex align="center" justify="start" gap="5">
          <div className={iconClasses}>{icon}</div>
          <Flex direction="column">
            <Text size="5" weight="bold" className="text-left !leading-5">
              {text}
            </Text>
            <Text size="3" className="text-left !leading-5 opacity-75">
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
    <Container className="mx-auto px-4 py-8 pb-20" id="contact">
      <Heading as="h2" size="8" className="mb-8 text-center uppercase tracking-wide">
        Need more info?
      </Heading>
      <Flex align="center" justify="center" gap="6" className="flex flex-col md:flex-row">
        <ContactButton
          icon={<EnvelopeClosedIcon width="40" height="40" />}
          text="Email Us"
          subtext="hello@example.com"
          link="mailto:hello@example.com"
        />
        <ContactButton
          icon={<MobileIcon width="40" height="40" />}
          text="Call Us"
          subtext="+61 123 456 789"
          link="tel:+61123456789"
          iconClasses="mr-[-10px]"
        />
      </Flex>
    </Container>
  );
}
