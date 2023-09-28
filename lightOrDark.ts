// Function to determine if a color is light or dark
export const lightOrDark = (color: string): "light" | "dark" => {
    const hexColor = parseInt(color.slice(1), 16); // Remove '#' before parsing
  
    const r = (hexColor >> 16) & 0xff;
    const g = (hexColor >> 8) & 0xff;
    const b = hexColor & 0xff;
  
    // Calculate HSP (Highly Sensitive Poo) value
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  
    // Determine whether the color is light or dark based on HSP value
    if (hsp > 127.5) {
      return "light";
    }
  
    return "dark";
  };