import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Playfair Display', Georgia, serif" },
        body: { value: "'Source Sans 3', 'Segoe UI', sans-serif" },
      },
    },
  },
});
