import {
  createEmotionCache,
  DefaultMantineColor,
  MantineThemeOverride,
  Tuple,
} from '@mantine/core';

// Foundational style overrides
import {colors} from './foundations/colors';

// Component style overrides
// import { Button } from "./components/Button";

export const theme: MantineThemeOverride = {
  colors,
  primaryColor: 'brand',
  components: {},
};

export const customCache = createEmotionCache({key: 'dn'});

type ExtendedCustomColors = 'brand' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
