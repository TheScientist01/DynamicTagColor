import { lightOrDark } from "./lightOrDark";
import { lightenDarkenColor } from "./lightenDarkendColor";
import { shade } from "./shadeColor";

// Function to style a tag based on its color
export const styleOfTag = (color: string): { color: string; background: string; border?: string } => {
    if (lightOrDark(color) === "light") {
      // For light colors, calculate text color, background color, and border
      return {
        color: lightenDarkenColor(color, -37),
        background: shade(color, 0.85),
        border: `1px solid ${lightenDarkenColor(color, -37)}`,
      };
    } else {
      // For dark colors, use the original color for text and calculate background
      return { color, background: shade(color, 0.85) };
    }
  };
  