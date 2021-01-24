import 'styled-components'
import { DefaultTheme } from 'styled-components'
import * as colors from './colors'
import { typeScale, lineHeight } from './typography'
import { borderRadius, shadow } from './visual'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors
    typeScale: typeof typeScale
    lineHeight: typeof lineHeight
    borderRadius: typeof borderRadius
    shadow: typeof shadow
  }
}

export const theme: DefaultTheme = {
  colors,
  typeScale,
  lineHeight,
  borderRadius,
  shadow,
}
