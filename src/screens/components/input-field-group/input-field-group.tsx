import { Label } from "@/components";
import { InputFieldGroupInterface } from "./input-field-group-props";

export const InputFieldGroup = (props: InputFieldGroupInterface) => {
  const { label, description, children, isHidden } = props;
  return (
    <div className={isHidden ? "hidden" : ""}>
      <Label>{label}</Label>
      {children}
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
