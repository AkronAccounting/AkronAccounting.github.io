import { Flex, Text, Heading, Separator } from "@radix-ui/themes";

export default function About() {
  return (
    <div className="text-left">
      <Flex direction="column" gap="6" className="p-8">
        <Heading as="h2" size="8" className="text-center uppercase tracking-wide">
          What Are We?
        </Heading>

        <Separator size="4" />

        <Flex direction="column" gap="4">
          <Text as="p" size="5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum provident laboriosam
            officiis quod dolorum laborum sapiente, dolor quas perspiciatis recusandae libero soluta
            laudantium corrupti facilis consectetur fugit a quos iure
          </Text>
          <Text as="p" size="5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestias, dolores
            vitae distinctio aut neque doloremque eligendi, eius ea tempore commodi delectus a.
          </Text>
        </Flex>

        <Separator size="4" />

        <Flex direction="column" gap="4">
          <Heading as="h3" size="6">
            Our Core Values
          </Heading>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Text size="4" className="text-[var(--accent-11)]" weight="bold">
                Innovation:
              </Text>
              <Text size="4"> We constantly push the boundaries of what's possible.</Text>
            </li>
            <li>
              <Text size="4" className="text-[var(--accent-11)]" weight="bold">
                Quality:
              </Text>
              <Text size="4"> We deliver excellence in every line of code.</Text>
            </li>
            <li>
              <Text size="4" className="text-[var(--accent-11)]" weight="bold">
                Collaboration:
              </Text>
              <Text size="4"> We believe in the power of teamwork and open communication.</Text>
            </li>
            <li>
              <Text size="4" className="text-[var(--accent-11)]" weight="bold">
                Integrity:
              </Text>
              <Text size="4"> We operate with transparency and honesty in all our dealings.</Text>
            </li>
          </ul>
        </Flex>
      </Flex>
    </div>
  );
}
