// Function to validate color values (0-255)
export const validateColor = (color: number): number => {
    if (color > 255) {
      return 255;
    }
  
    if (color < 0) {
      return 0;
    }
  
    return color;
  };
  