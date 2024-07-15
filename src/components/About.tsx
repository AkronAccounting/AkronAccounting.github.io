import { Card, Flex, Text, Heading, Separator } from "@radix-ui/themes";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import me from "@/assets/me.webp";

export default function About() {
  return (
    <Card className="mx-auto max-w-[400px]">
      <AspectRatio.Root ratio={1}>
        <img src={me} alt="Profile picture" className="h-full w-full object-cover" />
      </AspectRatio.Root>

      <Flex direction="column" gap="3" className="p-4">
        <Heading as="h1" size="6">
          Name
        </Heading>

        <Separator size="4" />

        <Text className="text-left italic text-[var(--gray-11)]">
          "The only way to do great work
        </Text>
        <Text className="text-right italic text-[var(--gray-11)]">is to love what you do"</Text>

        <Text as="p">
          I'm a passionate developer with a keen interest in creating beautiful and functional web
          applications. With experience in React and a love for clean code, I strive to make the web
          a better place, one component at a time.
        </Text>
      </Flex>
    </Card>
  );
}
