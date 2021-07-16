interface NavOptionProps {
  name: string
  to: string
}

export const NAV_OPTIONS: { [id: string]: NavOptionProps } = Object.freeze({
  OPTION1: {
    name: "Option 1",
    to: "option1",
  },
  OPTION2: {
    name: "Option 2",
    to: "option2",
  },
  OPTION3: {
    name: "Option 3",
    to: "option3",
  },
})
