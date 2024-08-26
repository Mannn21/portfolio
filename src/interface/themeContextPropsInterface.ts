import { lightTheme } from "../theme";

export interface ThemeContextProps {
    theme: typeof lightTheme;
    toggleTheme: () => void;
  }