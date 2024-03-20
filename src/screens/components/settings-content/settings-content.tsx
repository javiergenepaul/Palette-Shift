import { RadioGroup } from "@/components";
import {
  AZURE_COLOR,
  EMERALD_COLOR,
  GOLDEN_COLOR,
  LAVENDER_COLOR,
  SCARLET_COLOR,
  SILVER_COLOR,
  SUNSET_COLOR,
} from "@/config";
import { translate } from "@/i18n";
import { generateColorQoutes } from "@/lib";
import {
  SettingsOptionColorRadio,
  SettingsOptionRadioInterface,
} from "../color-radio";

export const SettingsContent = () => {
  const COLOR_PALETTE_AVAILABLE: SettingsOptionRadioInterface[] = [
    {
      name: translate("color.options.emerald.title"),
      value: "emerald",
      color: EMERALD_COLOR,
      qoutes: [...generateColorQoutes("emerald")],
    },
    {
      name: translate("color.options.azure.title"),
      value: "azure",
      color: AZURE_COLOR,
      qoutes: [...generateColorQoutes("azure")],
    },
    {
      name: translate("color.options.golden.title"),
      value: "golden",
      color: GOLDEN_COLOR,
      qoutes: [...generateColorQoutes("golden")],
    },
    {
      name: translate("color.options.sunset.title"),
      value: "sunset",
      color: SUNSET_COLOR,
      qoutes: [...generateColorQoutes("sunset")],
    },
    {
      name: translate("color.options.lavender.title"),
      value: "lavender",
      color: LAVENDER_COLOR,
      qoutes: [...generateColorQoutes("lavender")],
    },
    {
      name: translate("color.options.scarlet.title"),
      value: "scarlet",
      color: SCARLET_COLOR,
      qoutes: [...generateColorQoutes("scarlet")],
    },
    {
      name: translate("color.options.silver.title"),
      value: "silver",
      color: SILVER_COLOR,
      qoutes: [...generateColorQoutes("silver")],
    },
  ];

  return (
    <RadioGroup
      // onValueChange={onChangeColor}
      // value={color}
      // defaultValue={color}
      className="max-w-[800px] grid-cols-3 gap-4 pt-2"
    >
      {COLOR_PALETTE_AVAILABLE.map(
        (themeProps: SettingsOptionRadioInterface, index: React.Key) => {
          return <SettingsOptionColorRadio key={index} {...themeProps} />;
        }
      )}
    </RadioGroup>
  );
};
