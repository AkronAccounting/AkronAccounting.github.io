import { useState, useEffect } from "react";
import { Container, Heading, Flex, Button, Text } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  MobileIcon,
  ChatBubbleIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

interface ContactButtonProps {
  icon: React.ReactNode;
  text: string;
  subtext: string;
  link: string;
}

function ContactButton({ icon, text, subtext, link }: ContactButtonProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full no-underline">
      <Button size="4" className="h-auto w-full py-4">
        <Flex align="center" justify="start" gap="4" style={{ width: "100%" }}>
          <Flex
            align="center"
            justify="center"
            className="shrink-0 rounded-full bg-[var(--accent-a3)] p-4"
            style={{ width: "64px", height: "64px" }}
          >
            {icon}
          </Flex>
          <Flex direction="column" align="start" gap="1" style={{ minWidth: 0 }}>
            <Text size="5" weight="bold" className="w-full truncate">
              {text}
            </Text>
            <Text size="3" color="gray" className="w-full truncate">
              {subtext}
            </Text>
          </Flex>
        </Flex>
      </Button>
    </a>
  );
}

function TypingEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(timer);
    }, 100);

    return () => clearInterval(timer);
  }, [text]);

  return <>{displayText}</>;
}

export default function Contact() {
  return (
    <Container size="3" className="py-16">
      <Heading size="9" align="center" className="mb-12">
        <TypingEffect text="Let's Make Contact" />
      </Heading>
      <Flex direction="column" gap="6">
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
        <ContactButton
          icon={<ChatBubbleIcon width="24" height="24" />}
          text="Live Chat"
          subtext="Available 9 AM - 5 PM EST"
          link="#"
        />
        <ContactButton
          icon={<LinkedInLogoIcon width="24" height="24" />}
          text="Connect on LinkedIn"
          subtext="Follow our company page"
          link="https://www.linkedin.com/company/yourcompany"
        />
      </Flex>
    </Container>
  );
}
