import { IBaseTheme } from "../interfaces/styled";

export const baseTheme: IBaseTheme = {
    colors: {
        white: '#ffffff',
        khaki: '#4B5830',
        khakiDark: '#282C21',
        khakiLight: '#A7B38E',
        khakiSecondary: '#92A173',
        green: '#7B8468',
        orange: '#FF7542',
        orangeLight: '#F67600',
        beige: '#E0D3B0',
        yellow: '#ECB072',
        yellowLight: '#E08B3C',
        black: '#000000',
        grey: '#D1D1D1',
        greyDark: '#9F9F9F',
        greyLight: '#D9D9D9',
    },
    media: {
        phone: '(max-width: 425px)',
        tablet: '(min-width: 425px) and (max-width: 768px)'
    }
}
