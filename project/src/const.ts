import { MenuType } from "./type/menu";

export const enum AppRoute {
  Root = '/',
  NotFoundScreen = '/notfoundscreen',
  Other = '*',
}

// export const Menu: MenuType = {
//   about: {
//     name: 'О нас',
//     link: '#about',
//   },
//   price: {
//     name: 'Тарифы и цены',
//     link: '#price',
//   },
//   teachers: {
//     name: 'Учителя',
//     link: '#teachers',
//   },
//   reviews: {
//     name: 'Отзывы',
//     link: '#reviews',
//   },
// }

export const Menu: MenuType = {
  price: {
    name: 'Тарифы и цены',
    link: '#price',
  },
  rules: {
    name: 'Правила',
    link: '#rules',
  },
  offer: {
    name: 'Оферта',
    link: '#Offer',
  },
}

export const enum LogoSize {
  Default = 'default',
  Middle = 'middle',
  Large = 'large'
}
