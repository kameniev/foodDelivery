import 'styled-components';
import {DefaultTheme} from 'styled-components';
import * as colors from './colors';
import {typeScale, lineHeight} from './typography';
import {borderRadius} from './visual';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    typeScale: typeof typeScale;
    lineHeight: typeof lineHeight;
    borderRadius: typeof borderRadius;
  }
}

export const theme: DefaultTheme = {
  colors,
  typeScale,
  lineHeight,
  borderRadius,
};
