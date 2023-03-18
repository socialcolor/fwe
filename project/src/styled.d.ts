import 'styled-components';
import { IBaseTheme } from './interfaces/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends IBaseTheme {}
}
