import type { WorldWealthStatus } from "../worldStatusTypes";

const worldStatusQuestionsBn: WorldWealthStatus = {
  basicNeeds: {
    title: "মৌলিক চাহিদা",
    questions: [
      {
        question: "আপনার কি একটি নিরাপদ ঘর আছে যেখানে বৃষ্টিতে পানি পড়ে না?",
        key: "hasSafeHomeWithoutLeak",
        points: 6,
        answer: false,
      },
      {
        question: "আপনার কি পরিষ্কার পানীয় জলের নির্ভরযোগ্য ব্যবস্থা আছে?",
        key: "hasAccessToCleanWater",
        points: 6,
        answer: false,
      },
      {
        question: "আপনার কি প্রতিদিন নির্ভরযোগ্য বিদ্যুৎ থাকে?",
        key: "hasReliableElectricity",
        points: 6,
        answer: false,
      },
      {
        question: "আপনি কি প্রতিদিন তিনবেলা খাবার খান?",
        key: "eatsThreeMealsADay",
        points: 6,
        answer: false,
      },
      {
        question: "আপনি কি সরকারি হাসপাতাল বা কমিউনিটি ক্লিনিকের স্বাস্থ্যসেবা পান?",
        key: "hasAccessToHealthcare",
        points: 6,
        answer: false,
      },
    ],
  },
  everydayLiving: {
    title: "দৈনন্দিন জীবন",
    questions: [
      {
        question: "আপনার কি তিন জোড়ার বেশি জুতা আছে?",
        key: "hasMoreThanThreePairsOfShoes",
        points: 3,
        answer: false,
      },
      {
        question: "আপনার কি একটি মোবাইল ফোন আছে?",
        key: "ownsMobilePhone",
        points: 3,
        answer: false,
      },
      {
        question: "আপনার কি একটি স্মার্টফোন আছে?",
        key: "ownsSmartphone",
        points: 3,
        answer: false,
      },
      {
        question: "আপনার কি ঘরে একটি টেলিভিশন আছে?",
        key: "ownsTv",
        points: 2,
        answer: false,
      },
      {
        question: "আপনার কি ঘরে ইন্টারনেট সংযোগ আছে?",
        key: "hasInternetAtHome",
        points: 5,
        answer: false,
      },
      {
        question: "আপনার কি একটি ফ্যান বা কুলার আছে?",
        key: "ownsFanOrCooler",
        points: 4,
        answer: false,
      },
      {
        question: "আপনার কি একটি ফ্রিজ আছে?",
        key: "ownsFridge",
        points: 5,
        answer: false,
      },
    ],
  },
  transportAndMobility: {
    title: "যাতায়াত ও চলাচল",
    questions: [
      {
        question: "আপনার কি একটি মোটরসাইকেল, রিকশা বা গাড়ি আছে?",
        key: "ownsVehicle",
        points: 4,
        answer: false,
      },
      {
        question: "আপনি কি নিরাপদে গণপরিবহন (বাস, ট্রেন, রিকশা) ব্যবহার করতে পারেন?",
        key: "usesPublicTransportSafely",
        points: 3,
        answer: false,
      },
      {
        question: "আপনি কি কোনোদিন বিদেশ ভ্রমণ করেছেন?",
        key: "hasTraveledAbroad",
        points: 4,
        answer: false,
      },
      {
        question: "আপনি কি বছরে অন্তত একবার গ্রামের বাড়ি বা শহরের বাইরে ঘুরতে যান?",
        key: "canAffordTripOutsideCity",
        points: 3,
        answer: false,
      },
    ],
  },
  financialSecurity: {
    title: "আর্থিক নিরাপত্তা",
    questions: [
      {
        question: "আপনার কি জরুরী অবস্থার জন্য কিছু টাকা জমা আছে?",
        key: "hasEmergencySavings",
        points: 5,
        answer: false,
      },
      {
        question: "আপনার কি স্থায়ী মাসিক আয় আছে?",
        key: "hasStableMonthlyIncome",
        points: 5,
        answer: false,
      },
      {
        question: "আপনি কি সারা মাসে গ্যাস, বিদ্যুৎ ও ভাড়া দিতে পারেন?",
        key: "canAffordUtilitiesAndRent",
        points: 4,
        answer: false,
      },
      {
        question: "আপনি কি প্রয়োজনে নতুন কাপড় কিনতে পারেন?",
        key: "canAffordNewClothes",
        points: 4,
        answer: false,
      },
    ],
  },
  comfortAndExtras: {
    title: "স্বাচ্ছন্দ্য ও অতিরিক্ত",
    questions: [
      {
        question: "আপনার কি বই, খেলনা বা বিনোদনের জন্য কিছু আছে?",
        key: "ownsBooksGamesOrHobbies",
        points: 2,
        answer: false,
      },
      {
        question: "আপনার কি কোনো সময় কেবল টিভি বা অনলাইন স্ট্রিমিং পরিষেবার সাবস্ক্রিপশন থাকে?",
        key: "hasAccessToCableOrStreaming",
        points: 2,
        answer: false,
      },
      {
        question: "আপনি কি মাসে অন্তত একবার বাইরে খেতে যান?",
        key: "eatsOutMonthly",
        points: 3,
        answer: false,
      },
      {
        question: "আপনার কি মাসের শেষে কিছু টাকা বাকি থাকে?",
        key: "hasSpareMoneyAtEndOfMonth",
        points: 5,
        answer: false,
      },
    ],
  },
};

export default worldStatusQuestionsBn;
