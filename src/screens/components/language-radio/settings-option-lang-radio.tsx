import { Label, RadioGroupItem } from "@/components";
import { SettingOptionLangRadioInterface } from "./settings-option-lang-ratio-props";

export const SettingOptionLangRadio = (
  props: SettingOptionLangRadioInterface
) => {
  const { value, icon, name } = props;
  return (
    <div>
      <RadioGroupItem value={value} id={value} className="sr-only peer" />
      <Label
        htmlFor={value}
        className="flex gap-4 flex-col items-center h-full text-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
      >
        {icon}
        {name}
      </Label>
    </div>
  );
};
