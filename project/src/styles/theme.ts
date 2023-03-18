import { IBaseTheme } from "../interfaces/styled";

export const baseTheme: IBaseTheme = {
    colors: {
        green: '#4B5830',
        orange: '#FF7542',
        beige: '#E0D3B0',
        lightGreen: '#92A173',
        lightOrange: '#F67600',
        default: '#ffffff'
    },
    media: {
        phone: '(max-width: 425px)',
        tablet: '(min-width: 425px) and (max-width: 768px)'
    }
}
