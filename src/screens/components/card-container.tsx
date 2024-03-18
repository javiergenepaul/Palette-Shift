import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components";

interface CardContainerInterface {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const CardContainer = (props: CardContainerInterface) => {
  const { title, description, children } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
