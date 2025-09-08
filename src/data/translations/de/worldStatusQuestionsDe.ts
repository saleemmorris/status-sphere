import type { WorldWealthStatus } from "../worldStatusTypes";

const worldStatusQuestionsDe: WorldWealthStatus = {
  basicNeeds: {
    title: "Grundbedürfnisse",
    questions: [
      {
        question: "Haben Sie ein sicheres Zuhause mit Heizung?",
        key: "hasSafeHomeWithHeating",
        points: 6,
        answer: false,
      },
      {
        question: "Haben Sie zu Hause Zugang zu sauberem Trinkwasser?",
        key: "hasAccessToCleanWater",
        points: 6,
        answer: false,
      },
      {
        question: "Haben Sie rund um die Uhr zuverlässigen Strom?",
        key: "hasReliableElectricity",
        points: 6,
        answer: false,
      },
      {
        question: "Essen Sie an den meisten Tagen drei Mahlzeiten?",
        key: "eatsThreeMealsMostDays",
        points: 6,
        answer: false,
      },
      {
        question: "Haben Sie Zugang zu einer allgemein verfügbaren Gesundheitsversorgung (z. B. über die gesetzliche Krankenkasse)?",
        key: "hasFreeHealthcare",
        points: 6,
        answer: false,
      },
    ],
  },
  everydayLiving: {
    title: "Alltägliches Leben",
    questions: [
      {
        question: "Besitzen Sie mehr als drei Paar Schuhe?",
        key: "hasMoreThanThreePairsOfShoes",
        points: 3,
        answer: false,
      },
      {
        question: "Besitzen Sie ein Handy oder Smartphone?",
        key: "ownsMobilePhone",
        points: 3,
        answer: false,
      },
      {
        question: "Besitzen Sie einen Computer oder ein Tablet?",
        key: "ownsComputerOrTablet",
        points: 3,
        answer: false,
      },
      {
        question: "Besitzen Sie einen Fernseher?",
        key: "ownsTv",
        points: 2,
        answer: false,
      },
      {
        question: "Haben Sie zu Hause einen Internetanschluss?",
        key: "hasInternetAtHome",
        points: 5,
        answer: false,
      },
      {
        question: "Besitzen Sie eine Waschmaschine?",
        key: "ownsWashingMachine",
        points: 5,
        answer: false,
      },
      {
        question: "Besitzen Sie einen Kühlschrank oder eine Kühl-/Gefrierkombination?",
        key: "ownsFridgeFreezer",
        points: 5,
        answer: false,
      },
    ],
  },
  transportAndMobility: {
    title: "Mobilität & Transport",
    questions: [
      {
        question: "Besitzen oder fahren Sie ein Auto oder Motorrad?",
        key: "ownsOrDrivesCarOrMotorbike",
        points: 4,
        answer: false,
      },
      {
        question: "Nutzen Sie öffentliche Verkehrsmittel ohne Sorge um Ihre Sicherheit?",
        key: "usesPublicTransportSafely",
        points: 3,
        answer: false,
      },
      {
        question: "Sind Sie mindestens einmal im Leben ins Ausland gereist?",
        key: "hasTraveledAbroad",
        points: 4,
        answer: false,
      },
      {
        question: "Können Sie sich alle paar Jahre einen Urlaub leisten?",
        key: "canAffordHoliday",
        points: 4,
        answer: false,
      },
    ],
  },
  financialSecurity: {
    title: "Finanzielle Sicherheit",
    questions: [
      {
        question: "Haben Sie Geld für Notfälle zurückgelegt?",
        key: "hasEmergencySavings",
        points: 5,
        answer: false,
      },
      {
        question: "Verfügen Sie über ein stabiles monatliches Einkommen?",
        key: "hasStableMonthlyIncome",
        points: 5,
        answer: false,
      },
      {
        question: "Können Sie sich Heizung im Winter leisten, ohne dass es Sie stark belastet?",
        key: "canAffordWinterHeating",
        points: 4,
        answer: false,
      },
      {
        question: "Können Sie sich bei Bedarf neue Kleidung leisten?",
        key: "canAffordNewClothes",
        points: 4,
        answer: false,
      },
    ],
  },
  comfortAndExtras: {
    title: "Komfort & Extras",
    questions: [
      {
        question: "Besitzen Sie Bücher, Spiele oder Hobbymaterialien zur Freizeitgestaltung?",
        key: "ownsBooksGamesOrHobbies",
        points: 2,
        answer: false,
      },
      {
        question: "Haben Sie Zugang zu Streaming-Diensten (z. B. Netflix, Spotify usw.)?",
        key: "hasAccessToStreamingServices",
        points: 2,
        answer: false,
      },
      {
        question: "Gehen Sie mindestens einmal im Monat essen oder bestellen Sie Essen nach Hause?",
        key: "eatsOutMonthly",
        points: 3,
        answer: false,
      },
      {
        question: "Haben Sie am Ende der meisten Monate noch Geld übrig?",
        key: "hasSpareMoneyAtEndOfMonth",
        points: 5,
        answer: false,
      },
    ],
  },
};

export default worldStatusQuestionsDe;
