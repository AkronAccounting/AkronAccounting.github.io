import { useCallback, useState } from "react";
import { Card, Heading, Text, Flex, Container } from "@radix-ui/themes";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type Service = {
  name: string;
  image: string;
  description: string;
};

const services: Service[] = [
  {
    name: "Service 1",
    image: "https://dummyimage.com/600x400/000/fff",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolores.",
  },
  {
    name: "Service 2",
    image: "https://dummyimage.com/600x400/000/fff",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolores.",
  },
  {
    name: "Service 3",
    image: "https://dummyimage.com/600x400/000/fff",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolores.",
  },
];

function ServiceBox({
  service,
  isAnyHovered,
  onHover,
}: {
  service: Service;
  isAnyHovered: boolean;
  onHover: (isHovered: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = useCallback(() => onHover(true), [onHover]);
  const handleMouseLeave = useCallback(() => onHover(false), [onHover]);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Card
        className="group w-[300px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg xs:w-[350px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="object-cover transition-all duration-300 group-hover:scale-110"
            style={{
              opacity: isAnyHovered ? "var(--image-opacity, 0.7)" : "1",
              transform: `scale(var(--image-scale, 1))`,
            }}
          />
        </div>
        <Flex direction="column" className="p-4">
          <Collapsible.Trigger asChild>
            <Flex align="center" justify="between" className="cursor-pointer">
              <Heading className="text-[var(--accent-11)]" size="3">
                {service.name}
              </Heading>
              <ChevronDownIcon
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </Flex>
          </Collapsible.Trigger>
          <Collapsible.Content className="collapsible-content">
            <Text className="mt-2">{service.description}</Text>
          </Collapsible.Content>
        </Flex>
      </Card>
    </Collapsible.Root>
  );
}

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleHover = (index: number, isHovered: boolean) => {
    setHoveredIndex(isHovered ? index : null);
  };

  return (
    <Container className="mx-auto px-4 py-8" id="services">
      <Heading as="h2" size="8" className="mb-8 text-center uppercase tracking-wide">
        Our services
      </Heading>
      <Flex wrap="wrap" gap="4" justify="center" className="services-container">
        {services.map((service, idx) => (
          <div key={idx} className="service-box">
            <ServiceBox
              service={service}
              isAnyHovered={hoveredIndex !== null}
              onHover={(isHovered) => handleHover(idx, isHovered)}
            />
          </div>
        ))}
      </Flex>
    </Container>
  );
}
