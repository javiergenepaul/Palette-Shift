import {
  RadioGroup,
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  useToast,
} from "@/components";
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
import { generateColorQoutes, getRandomGeneratedColorQoutes } from "@/lib";
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
import { FontFamiltyType, FontItem, FontItemInterface } from "../font-item";

export const SettingsContent = () => {
  const { color, language, font, setColor, setLanguage, setFont } =
    useSettingsStore();
  const { toast } = useToast();

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
      name: translate("color.options.purple.title"),
      value: "purple",
      color: LAVENDER_COLOR,
      qoutes: [...generateColorQoutes("purple")],
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

  const FONT_AVAILABLE: FontItemInterface[] = [
    {
      fontName: "Inter",
      fontClassName: "font-inter",
      value: "inter",
    },
    {
      fontName: "Work Sans",
      fontClassName: "font-work-sans",
      value: "work-sans",
    },
    {
      fontName: "Poppins",
      fontClassName: "font-poppins",
      value: "poppins",
    },
    {
      fontName: "Lato",
      fontClassName: "font-lato",
      value: "lato",
    },
    {
      fontName: "Nunito Sans",
      fontClassName: "font-nunito-sans",
      value: "nunito-sans",
    },
    {
      fontName: "Open Sans",
      fontClassName: "font-open-sans",
      value: "open-sans",
    },
  ];

  const onChangeColor = (value: Color) => {
    setColor(value);
    const colorSelected: SettingsOptionRadioInterface | undefined =
      COLOR_PALETTE_AVAILABLE.find((data) => data.value === color);

    if (colorSelected) {
      toast({
        variant: "success",
        duration: 3000,
        title: translate("settingsUpdated"),
        description: getRandomGeneratedColorQoutes(colorSelected.qoutes),
      });
    }
  };

  const onChangeLanguage = (value: LanguageType) => {
    setLanguage(value);
    toast({
      variant: "success",
      duration: 3000,
      title: translate("settingsUpdated"),
      description: translate("languageOption.toast.success", {
        language: LANGUAGE_OPTIONS.find(
          (item: SettingOptionLangRadioInterface) => item.value === value
        )?.name,
      }),
    });
  };

  const onChangeFontFamily = (font: FontFamiltyType) => {
    setFont(font);
  };

  return (
    <div className="flex flex-col gap-8">
      <InputFieldGroup
        isHidden={language === "ja" || language === "ar"}
        label={translate("font.formLabel")}
        description={translate("font.formDescription")}
      >
        <Select
          onValueChange={onChangeFontFamily}
          defaultValue={font ? font : "inter"}
          value={font ? font : "inter"}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {FONT_AVAILABLE.map(
                (fontProps: FontItemInterface, index: React.Key) => {
                  return <FontItem key={index} {...fontProps} />;
                }
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </InputFieldGroup>
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
