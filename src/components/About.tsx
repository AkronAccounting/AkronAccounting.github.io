import { Card, Flex, Text, Heading, Separator, Grid } from "@radix-ui/themes";

export default function About() {
  return (
    <Card className="mx-auto max-w-4xl">
      <Flex direction="column" gap="6" className="p-8">
        <Heading as="h2" size="8" className="text-center uppercase tracking-wide">
          What Are We?
        </Heading>

        <Separator size="4" />

        <Grid columns={{ initial: "1", md: "2" }} gap="6">
          <Flex direction="column" gap="4">
            <Text as="p" size="5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum provident laboriosam
              officiis quod dolorum laborum sapiente, dolor quas perspiciatis recusandae libero
              soluta laudantium corrupti facilis consectetur fugit a quos iure
            </Text>
            <Text as="p" size="5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestias, dolores
              vitae distinctio aut neque doloremque eligendi, eius ea tempore commodi delectus a.
            </Text>
          </Flex>
        </Grid>

        <Separator size="4" />

        <Flex direction="column" gap="4">
          <Heading as="h3" size="6">
            Our Core Values
          </Heading>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Text size="4">
                Innovation: We constantly push the boundaries of what's possible.
              </Text>
            </li>
            <li>
              <Text size="4">Quality: We deliver excellence in every line of code.</Text>
            </li>
            <li>
              <Text size="4">
                Collaboration: We believe in the power of teamwork and open communication.
              </Text>
            </li>
            <li>
              <Text size="4">
                Integrity: We operate with transparency and honesty in all our dealings.
              </Text>
            </li>
          </ul>
        </Flex>
      </Flex>
    </Card>
  );
}
