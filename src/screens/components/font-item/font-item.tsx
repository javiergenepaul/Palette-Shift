import { SelectItem } from "@/components";
import { FontItemInterface } from "./font-item-props";

export const FontItem = (props: FontItemInterface) => {
  const { fontName, fontClassName, value } = props;

  return (
    <SelectItem value={value} className={fontClassName}>
      {fontName}
    </SelectItem>
  );
};
