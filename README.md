# Color Manipulation and Tag Styling Utility

This TypeScript utility library provides a collection of functions for efficient color manipulation and dynamic styling of HTML tags based on color properties. It is designed to simplify color-related tasks in web development, enhancing user interface design and readability.

## Features

- **Color Validation**: Ensure that color values stay within the valid range of 0 to 255, preventing errors in color representation.

- **Color Shading**: Modify a color by a specified percentage, creating lighter or darker shades while preserving the original color's integrity.

- **Color Lightening/Darkening**: Dynamically adjust colors by adding or subtracting an amount from their RGB components.

- **Light or Dark Detection**: Determine whether a color is light or dark using the Highly Sensitive Poo (HSP) formula, enabling informed styling decisions.

- **Tag Styling**: Style HTML tags based on their background color, automatically adjusting text and border colors for readability and aesthetics.

## Installation

  ```bash
  npm install color-tag-styler
  ```

**Usage**
  ```bash
  import { styleOfTag } from 'index.ts';

  const tagColor = "#e7bc50";
  const styledTag = styleOfTag(tagColor);
  
  console.log(styledTag); // Returns an object with color, background, and optional border properties
  ```
