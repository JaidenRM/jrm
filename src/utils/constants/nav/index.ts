interface NavOptionProps {
  name: string;
  to: string;
}

export const NAV_OPTIONS: { [id: string]: NavOptionProps } = Object.freeze({
  OPTION1: {
    name: "Experience",
    to: "experience",
  },
  OPTION2: {
    name: "Projects",
    to: "projects",
  },
});
