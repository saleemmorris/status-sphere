import en from "../../data/translations/en/worldStatusQuestionsEn";
import de from "../../data/translations/de/worldStatusQuestionsDe";
import bn from "../../data/translations/bn/worldStatusQuestionsBn";
import type { WorldWealthStatus } from "../../data/translations/worldStatusTypes";

type SupportedLang = "en" | "de" | "bn";

const translations: Record<SupportedLang, WorldWealthStatus> = {
  en,
  de,
  bn,
};

export function getTranslation(lang: string): WorldWealthStatus {
  if (lang.startsWith("de")) return translations.de;
  if (lang.startsWith("bn")) return translations.bn;
  return translations.en; // default fallback
}
