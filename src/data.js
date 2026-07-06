export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const DEFAULT_TIMETABLE = {
  Monday: ["MATHS", "CHEM", "SS", "IT", "HINDI", "MAL", "MAL", "ENG"],
  Tuesday: ["MATHS", "PHY", "MAL", "ENG", "BIO", "SS", "PT", "MATHS"],
  Wednesday: ["MATHS", "CHEM", "BIO", "ENG", "MAL", "SS", "MAL", "SS"],
  Thursday: ["MATHS", "PHY", "ENG", "HINDI", "IT (P)", "IT (P)", "SS", "CHEM"],
  Friday: ["MATHS", "PHY", "HINDI", "ENG", "SS", "BIO", "MAL", "IT"],
  Saturday: [],
  Sunday: []
};

export const SUBJECTS = {
  "MATHS": { name: "Mathematics", tag: "MATHS", color: "var(--maths)" },
  "CHEM": { name: "Chemistry", tag: "CHEM", color: "var(--chem)" },
  "PHY": { name: "Physics", tag: "PHY", color: "var(--phy)" },
  "BIO": { name: "Biology", tag: "BIO", color: "var(--bio)" },
  "SS": { name: "Social Science", tag: "SS", color: "var(--ss)" },
  "IT": { name: "Information Technology", tag: "IT", color: "var(--it)" },
  "IT (P)": { name: "IT Practical", tag: "IT (P)", color: "var(--it)", practical: true },
  "HINDI": { name: "Hindi", tag: "HINDI", color: "var(--hindi)" },
  "MAL": { name: "Malayalam", tag: "MAL", color: "var(--mal)" },
  "ENG": { name: "English", tag: "ENG", color: "var(--eng)" },
  "PT": { name: "Physical Training", tag: "PT", color: "var(--pt)", practical: true }
};

export const PERIOD_TIMES = [
  [9, 20], [10, 5], [10, 50], [11, 35], [12, 35], [13, 20], [14, 5], [14, 50]
];
