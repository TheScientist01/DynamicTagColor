import { validateColor } from "./validateColor";

// Function to lighten or darken a color
export const lightenDarkenColor = (col: string, amt: number): string => {
    let usePound = false;
    if (col[0] === "#") {
      col = col.slice(1);
      usePound = true;
    }
    const num = parseInt(col, 16);
  
    // Calculate new color components (R, G, B)
    const r = validateColor((num >> 16) + amt);
    const g = validateColor(((num >> 8) & 0xff) + amt);
    const b = validateColor((num & 0xff) + amt);
  
    return (usePound ? "#" : "") + (b | (g << 8) | (r << 16)).toString(16).padStart(6, '0');
  };