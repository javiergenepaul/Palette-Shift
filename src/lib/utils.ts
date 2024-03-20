import { TxKeyPath, translate } from "@/i18n";
import { Color } from "@/screens";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates an array of quotes for a given color.
 * @param {Color} color - The color for which quotes are generated.
 * @returns {string[]} An array of quotes for the specified color.
 */
export const generateColorQoutes = (color: Color): string[] => {
  const colorQoutes: string[] = [];

  for (let i = 1; i <= 10; i++) {
    const quoteKey = `color.options.${color}.quotes.${String(i).padStart(
      2,
      "0"
    )}`;
    const quoteText: string = translate(quoteKey as TxKeyPath);

    colorQoutes.push(quoteText);
  }

  return colorQoutes;
};
