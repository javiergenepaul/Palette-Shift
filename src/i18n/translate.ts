import { TxKeyPath, i18n } from "./i18n";

/**
 * Translates text.
 *
 * @param key The i18n key.
 * @param options The options object containing dynamic values.
 */
export function translate(key: TxKeyPath, options?: Record<string, unknown>) {
  return key ? i18n.t(key, options) : "";
}
