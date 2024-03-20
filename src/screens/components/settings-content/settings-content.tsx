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
  Color,
  SettingsOptionColorRadio,
  SettingsOptionRadioInterface,
} from "../color-radio";
import { useSettingsStore } from "@/stores";
import {
  LanguageType,
  SettingOptionLangRadio,
  SettingOptionLangRadioInterface,
} from "../language-radio";
import { ES_FLAG, JP_FLAG, PH_FLAG, SA_FLAG, US_FLAG } from "@/assets";
import { InputFieldGroup } from "../input-field-group";

export const SettingsContent = () => {
  const { color, setColor, language, setLanguage } = useSettingsStore();

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
      value: "purple",
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

  const LANGUAGE_OPTIONS: SettingOptionLangRadioInterface[] = [
    {
      value: "en",
      name: translate("languageOption.english"),
      icon: <img width={"170px"} height={"80px"} src={US_FLAG} />,
    },
    {
      value: "ja",
      name: translate("languageOption.japanese"),
      icon: <img width={"170px"} height={"80px"} src={JP_FLAG} />,
    },
    {
      value: "fil",
      name: translate("languageOption.tagalog"),
      icon: <img width={"170px"} height={"80px"} src={PH_FLAG} />,
    },
    {
      value: "ar",
      name: translate("languageOption.arabic"),
      icon: <img width={"170px"} height={"80px"} src={SA_FLAG} />,
    },
    {
      value: "es",
      name: translate("languageOption.spanish"),
      icon: <img width={"170px"} height={"80px"} src={ES_FLAG} />,
    },
  ];

  const onChangeColor = (value: Color) => {
    setColor(value);
  };

  const onChangeLanguage = (value: LanguageType) => {
    setLanguage(value);
  };

  return (
    <div className="flex flex-col gap-8">
      <InputFieldGroup
        label={translate("color.formLabel")}
        description={translate("color.formDescription")}
      >
        <RadioGroup
          onValueChange={onChangeColor}
          value={color}
          defaultValue={color}
          className="grid-cols-3 gap-4 pt-2 max-w-3xl"
        >
          {COLOR_PALETTE_AVAILABLE.map(
            (themeProps: SettingsOptionRadioInterface, index: React.Key) => {
              return <SettingsOptionColorRadio key={index} {...themeProps} />;
            }
          )}
        </RadioGroup>
      </InputFieldGroup>

      <InputFieldGroup
        label={translate("languageOption.formLabel")}
        description={translate("languageOption.formDescription")}
      >
        <RadioGroup
          value={language}
          onValueChange={onChangeLanguage}
          className="grid-cols-5 gap-4 pt-2 max-w-3xl"
        >
          {LANGUAGE_OPTIONS.map(
            (langProp: SettingOptionLangRadioInterface, index: React.Key) => {
              return <SettingOptionLangRadio key={index} {...langProp} />;
            }
          )}
        </RadioGroup>
      </InputFieldGroup>
    </div>
  );
};
