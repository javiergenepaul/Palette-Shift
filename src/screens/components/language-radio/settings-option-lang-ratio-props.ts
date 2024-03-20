export type LanguageType = "en" | "ja" | "fil" | "ar" | "es";

export interface SettingOptionLangRadioInterface {
  value: LanguageType;
  name: string;
  icon: React.ReactNode;
}
