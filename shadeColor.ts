import { validateColor } from "./validateColor";

// Function to shade a color by a percentage
export const shade = (color: string, percent: number): string => {
    let f = parseInt(color.slice(1), 16), // Remove '#' before parsing
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? -percent : percent,
      R = (f >> 16) & 0xff,
      G = (f >> 8) & 0xff,
      B = f & 0xff;
  
    return (
      "#" +
      (
        0x1000000 +
        (validateColor((R + (t - R) * p)) << 16) +
        (validateColor((G + (t - G) * p)) << 8) +
        validateColor((B + (t - B) * p))
      )
        .toString(16)
        .slice(1)
    );
  };