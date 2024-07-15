import { Parallax } from "react-parallax";
import { Flex, Heading, Text } from "@radix-ui/themes";

export default function Welcome() {
  return (
    <Parallax
      bgImage="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
      bgImageAlt="Welcome background"
      strength={300}
      bgImageStyle={{
        objectFit: "cover",
        // objectPosition: "50% 50%",
      }}
    >
      <div style={{ height: "100vh" }}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          style={{
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          }}
        >
          <Heading
            as="h1"
            size="9"
            className="text-center"
            style={{ color: "white", marginBottom: "1rem" }}
          >
            Welcome to Our Company
          </Heading>
          <Text size="6" className="text-center" style={{ color: "white", maxWidth: "800px" }}>
            "Innovating for a better tomorrow"
          </Text>
        </Flex>
      </div>
    </Parallax>
  );
}
