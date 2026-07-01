import { CodeIcon, CubeIcon, FileIcon, GlobeIcon } from "@radix-ui/react-icons";
import ServiceCard from "./service-card";
import { Flex } from "@radix-ui/themes";

const services = [
  {
    title: "Web Development",
    description:
      "I build modern websites and web applications using React, Next.js, and TypeScript.",
    icon: <GlobeIcon color="gray" />,
  },
  {
    title: "Codebase Refactoring",
    description:
      "I help businesses refactor their codebases to improve performance, maintainability, and scalability.",
    icon: <CodeIcon />,
  },
  {
    title: "SaaS Development",
    description:
      "I build custom SaaS products for businesses to streamline their operations and improve efficiency.",
    icon: <CubeIcon className="text-amber-400" />,
  },
];

const Services = () => {
  return (
    <Flex direction="column" gap="4">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </Flex>
  );
};

export default Services;
