import { useState } from "react";
import { Card, Heading, Text, Flex } from "@radix-ui/themes";
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
function ServiceBox({ service }: { service: Service }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Card className="w-64 overflow-hidden transition-all duration-300 ease-in-out">
        <img src={service.image} alt={service.name} className="h-40 w-full object-cover" />
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
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading size="8" className="mb-6">
        Our Services
      </Heading>
      <Flex wrap="wrap" gap="4" justify="center">
        {services.map((service, idx) => (
          <ServiceBox key={idx} service={service} />
        ))}
      </Flex>
    </div>
  );
}
