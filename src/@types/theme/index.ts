interface ColorScheme {
  bg: string;
  fg: string;
  border?: string;
  opacity?: string;
}

interface ThemeColors {
  body: string;
  text: string;
  primary: ColorScheme;
  secondary: ColorScheme;
  link: string;
}

interface ThemeFonts {
  font: string;
}

interface MediaQueries {
  phones: string;
  tablets: string;
  laptops: string;
  xlarge: string;
}

export interface ThemeSchema {
  id: string;
  name: string;
  colors: ThemeColors;
  font: ThemeFonts;
  media: MediaQueries;
}