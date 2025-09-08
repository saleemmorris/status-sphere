interface Question {
  question: string;
  key: string;
  points: number;
  answer: boolean;
}

interface QuestionCategory {
  title: string;
  questions: Question[];
}

export interface WorldWealthStatus {
  [category: string]: QuestionCategory;
}

const worldStatusQuestions: WorldWealthStatus = {
  basicNeeds: {
    title: "Basic Needs",
    questions: [
      {
        question: "Do you have a safe home with heating?",
        key: "hasSafeHomeWithHeating",
        points: 6,
        answer: false,
      },
      {
        question: "Do you have access to clean drinking water at home?",
        key: "hasAccessToCleanWater",
        points: 6,
        answer: false,
      },
      {
        question: "Do you have reliable electricity 24/7?",
        key: "hasReliableElectricity",
        points: 6,
        answer: false,
      },
      {
        question: "Do you eat 3 meals most days?",
        key: "eatsThreeMealsMostDays",
        points: 6,
        answer: false,
      },
      {
        question: "Do you have access to healthcare free at the point of use (NHS)?",
        key: "hasFreeHealthcare",
        points: 6,
        answer: false,
      },
    ],
  },
  everydayLiving: {
    title: "Everyday Living",
    questions: [
      {
        question: "Do you have more than 3 pairs of shoes?",
        key: "hasMoreThanThreePairsOfShoes",
        points: 3,
        answer: false,
      },
      {
        question: "Do you own a mobile phone?",
        key: "ownsMobilePhone",
        points: 3,
        answer: false,
      },
      {
        question: "Do you own a computer or tablet?",
        key: "ownsComputerOrTablet",
        points: 3,
        answer: false,
      },
      {
        question: "Do you own a TV?",
        key: "ownsTv",
        points: 2,
        answer: false,
      },
      {
        question: "Do you have internet at home?",
        key: "hasInternetAtHome",
        points: 5,
        answer: false,
      },
      {
        question: "Do you own a washing machine?",
        key: "ownsWashingMachine",
        points: 5,
        answer: false,
      },
      {
        question: "Do you own a fridge/freezer?",
        key: "ownsFridgeFreezer",
        points: 5,
        answer: false,
      },
    ],
  },
  transportAndMobility: {
    title: "Transport & Mobility",
    questions: [
      {
        question: "Do you own or drive a car/motorbike?",
        key: "ownsOrDrivesCarOrMotorbike",
        points: 4,
        answer: false,
      },
      {
        question: "Do you use public transport without worry of safety?",
        key: "usesPublicTransportSafely",
        points: 3,
        answer: false,
      },
      {
        question: "Have you travelled abroad at least once in your life?",
        key: "hasTraveledAbroad",
        points: 4,
        answer: false,
      },
      {
        question: "Can you afford a holiday at least once every few years?",
        key: "canAffordHoliday",
        points: 4,
        answer: false,
      },
    ],
  },
  financialSecurity: {
    title: "Financial Security",
    questions: [
      {
        question: "Do you have money saved for emergencies?",
        key: "hasEmergencySavings",
        points: 5,
        answer: false,
      },
      {
        question: "Do you have a stable monthly income?",
        key: "hasStableMonthlyIncome",
        points: 5,
        answer: false,
      },
      {
        question: "Can you afford heating throughout winter without hardship?",
        key: "canAffordWinterHeating",
        points: 4,
        answer: false,
      },
      {
        question: "Can you afford new clothes when needed?",
        key: "canAffordNewClothes",
        points: 4,
        answer: false,
      },
    ],
  },
  comfortAndExtras: {
    title: "Comfort & Extras",
    questions: [
      {
        question: "Do you own books, games, or hobbies for leisure?",
        key: "ownsBooksGamesOrHobbies",
        points: 2,
        answer: false,
      },
      {
        question: "Do you have access to streaming services (Netflix, Spotify, etc.)?",
        key: "hasAccessToStreamingServices",
        points: 2,
        answer: false,
      },
      {
        question: "Do you eat out or order takeaway at least monthly?",
        key: "eatsOutMonthly",
        points: 3,
        answer: false,
      },
      {
        question: "Do you have spare money left at the end of most months?",
        key: "hasSpareMoneyAtEndOfMonth",
        points: 5,
        answer: false,
      },
    ],
  },
};

export default worldStatusQuestions;