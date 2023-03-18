import { MenuType } from "./type/menu";

export const enum AppRoute {
  Root = '/',
  NotFoundScreen = '/notfoundscreen',
  Other = '*',
}

export const Menu: MenuType = {
  about: {
    name: 'О нас',
    link: '#about',
  },
  price: {
    name: 'Тарифы и цены',
    link: '#price',
  },
  teachers: {
    name: 'Учителя',
    link: '#teachers',
  },
  reviews: {
    name: 'Отзывы',
    link: '#reviews',
  },
}
