interface NavOptionProps {
  name: string;
  to: string;
}

export const NAV_OPTIONS: { [id: string]: NavOptionProps } = Object.freeze({
  OPTION1: {
    name: "About",
    to: "about",
  },
  OPTION2: {
    name: "Experience",
    to: "experience",
  },
  OPTION3: {
    name: "Projects",
    to: "projects",
  },
});
