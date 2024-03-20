export type Color =
  | "azure"
  | "emerald"
  | "golden"
  | "sunset"
  | "purple"
  | "scarlet"
  | "silver";
export interface SettingsOptionRadioInterface {
  value: Color;
  name: string;
  color: string;
  qoutes: string[];
}
