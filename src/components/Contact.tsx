import { Container, Heading, Flex, Button, Text } from '@radix-ui/themes';
import { EnvelopeClosedIcon, MobileIcon, ChatBubbleIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export default function Contact() {
  return (
    <Container size="3" className="py-16">
      <Heading size="9" align="center" className="mb-12">
        Let's Make Contact
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
          link="#" // Replace with actual chat link
        />
        <ContactButton
          icon={<LinkedInLogoIcon width="24" height="24" />}
          text="Connect on LinkedIn"
          subtext="Follow our company page"
          link="https://www.linkedin.com/company/yourcompany" // Replace with your LinkedIn page
        />
      </Flex>
    </Container>
  );
}

function ContactButton({ icon, text, subtext, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
      <Button size="4" className="w-full">
        <Flex align="center" justify="start" gap="4" style={{ width: '100%' }}>
          <Flex
            align="center"
            justify="center"
            className="bg-[var(--accent-a3)] rounded-full p-4"
            style={{ minWidth: '64px', height: '64px' }}
          >
            {icon}
          </Flex>
          <Flex direction="column" align="start" gap="1">
            <Text size="5" weight="bold">
              {text}
            </Text>
            <Text size="3" color="gray">
              {subtext}
            </Text>
          </Flex>
        </Flex>
      </Button>
    </a>
  );
}