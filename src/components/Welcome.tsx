import { Parallax } from "react-parallax";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const ArrowButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer focus:outline-none bob-animation
               bg-[var(--accent-3)] hover:bg-[var(--accent-10)] transition-colors duration-300
               w-12 h-12 rounded-full flex items-center justify-center"
    aria-label="Scroll to About section"
  >
    <ChevronDownIcon className="w-8 h-8 text-[var(--accent-12)]" />
  </button>
);

const scrollToAbout = () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Welcome() {
  return (
    <Parallax
      bgImage="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
      bgImageAlt="Welcome background"
      strength={300}
      bgImageStyle={{
        objectFit: "cover",
      }}
    >
      <div className="h-screen relative">
        <Flex
          direction="column"
          align="center"
          justify="center"
          className="h-full bg-black bg-opacity-50"
        >
          <Heading
            as="h1"
            size="9"
            className="text-center text-white mb-4"
          >
            Welcome to Our Company
          </Heading>
          <Text size="6" className="text-center text-white max-w-3xl">
            "Innovating for a better tomorrow"
          </Text>
        </Flex>
        <ArrowButton onClick={scrollToAbout} />
      </div>
    </Parallax>
  );
}