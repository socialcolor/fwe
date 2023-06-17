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
//   question: {
//     name: 'Вопросы',
//     link: '#question',
//   },
//   contacts: {
//     name: 'Контакты',
//     link: '#contacts',
//   },
// }

// export const MenuFooter: MenuType = {
//   about: {
//     name: 'О нас',
//     link: '#about',
//   },
//   price: {
//     name: 'Тарифы',
//     link: '#price',
//   },
//   teachers: {
//     name: 'Пробный урок',
//     link: '#teachers',
//   },
//   reviews: {
//     name: 'Отзывы',
//     link: '#reviews',
//   },
//   contacts: {
//     name: 'Наши учителя',
//     link: '#contacts',
//   },
// }

export const Menu: MenuType = {
  price: {
    name: 'Цены',
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
  contacts: {
    name: 'Контакты',
    link: '#contacts',
  },
}

export const MenuFooter: MenuType = {
  price: {
    name: 'Цены',
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
  contacts: {
    name: 'Контакты',
    link: '#contacts',
  },
}

export const enum LogoSize {
  Default = 'default',
  Middle = 'middle',
  Large = 'large'
}
