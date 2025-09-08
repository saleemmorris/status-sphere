import en from "../../data/translations/en/worldStatusQuestions";
import de from "../../data/translations/de/worldStatusQuestions";
import type { WorldWealthStatus } from "../../data/worldStatus";

type SupportedLang = "en" | "de";

const translations: Record<SupportedLang, WorldWealthStatus> = {
  en,
  de,
};

export function getTranslation(lang: string): WorldWealthStatus {
  if (lang.startsWith("de")) return translations.de;
  return translations.en; // default fallback
}
