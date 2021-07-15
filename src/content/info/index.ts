import { InfoDataProps } from "../../components/sections/info"

export const INFO_DATA: { [id: string]: InfoDataProps } = {
  OPTION1: {
    id: "option1",
    topLine: " ~ Option 1 ~ ",
    heading: "The best option there is!",
    isLightText: true,
    buttonLabel: "Go top",
    isPrimary: true,
    isDark: true,
    subheading:
      "With option 1 you can do anything wherever and whenever you feel like it! Isn't that amazing?",
  },
  OPTION2: {
    id: "option2",
    topLine: " ~ Option 2 ~ ",
    isLightText: true,
    buttonLabel: "Go top",
    isPrimary: true,
    isDark: true,
    heading: "The second best option there is!",
    subheading:
      "With option 1 you can do anything wherever and whenever you feel like it! Isn't that amazing? But 2 is ok if you cannot afford 1.",
  },
  OPTION3: {
    id: "option3",
    topLine: " ~ Option 3 ~ ",
    isLightText: true,
    buttonLabel: "Go top",
    isPrimary: true,
    isDark: true,
    heading: "The least option there is :(",
    subheading:
      "With option 1 you can do anything wherever and whenever you feel like it! Isn't that amazing? So why bother choosing 3? :/",
  },
}
