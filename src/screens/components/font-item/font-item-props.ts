export type FontFamiltyType =
  | "inter"
  | "work-sans"
  | "poppins"
  | "lato"
  | "nunito-sans"
  | "nunito"
  | "open-sans";

export interface FontItemInterface {
  fontName: string;
  fontClassName: string;
  value: FontFamiltyType;
}
