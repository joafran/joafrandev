import { Heading, Text } from "@radix-ui/themes";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard = ({ title, description, icon }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {icon}
        <Heading size="3" weight="medium">
          {title}
        </Heading>
      </div>
      <Text size="2" className="text-stone-600">
        {description}
      </Text>
    </div>
  );
};

export default ServiceCard;
