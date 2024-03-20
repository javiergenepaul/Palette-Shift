import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components";
import { CardContainerInterface } from "./card-container-props";
import { DarkModeDropdown } from "./dark-mode-dropdown";

export const CardContainer = (props: CardContainerInterface) => {
  const { title, description, children } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center ">
          {title} <DarkModeDropdown />
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
