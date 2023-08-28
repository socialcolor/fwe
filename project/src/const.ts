import { MenuType } from "./type/menu";
import { FaqType } from "./type/faq";

export const enum AppRoute {
  Root = '/',
  NotFoundScreen = '/notfoundscreen',
  Contract = '/contract',
  Rules = '/rules',
  Other = '*',
}


// export const Menu: MenuType = {
//   price: {
//     name: 'Цены',
//     link: `${AppRoute.Root}#price`,
//   },
//   rules: {
//     name: 'Правила',
//     link: `${AppRoute.Rules}`,
//   },
//   offer: {
//     name: 'Оферта',
//     link: AppRoute.Contract,
//   },
//   contacts: {
//     name: 'Контакты',
//     link: `{AppRoute.Root}#contacts`,
//   },
// }

export const Menu: MenuType = {
  about: {
    name: 'О нас',
    link: `${AppRoute.Root}#about`,
  },
  price: {
    name: 'Тарифы и цены',
    link: `${AppRoute.Root}#price`,
  },
  techers: {
    name: 'Учителя',
    link: `${AppRoute.Root}#teachers`,
  },
  review: {
    name: 'Отзывы',
    link: `${AppRoute.Root}#review`,
  },
  rules: {
    name: 'Правила',
    link: `${AppRoute.Rules}`,
  },
}

export const MenuFooter: MenuType = {
  about: {
    name: 'О нас',
    link: `${AppRoute.Root}#about`,
  },
  price: {
    name: 'Тарифы и цены',
    link: `${AppRoute.Root}#price`,
  },
  trial: {
    name: 'Пробный урок',
    link: `${AppRoute.Root}#trial`,
  },
  review: {
    name: 'Отзывы',
    link: `${AppRoute.Root}#review`,
  },
  techers: {
    name: 'Наши учителя',
    link: `${AppRoute.Root}#teachers`,
  },
  rules: {
    name: 'Правила',
    link: `${AppRoute.Rules}`,
  },
}

export const PriceLists = [
  {
    name: 'Индивидуальные уроки',
    iconUrl: './img/person.svg',
    tarifs: [{
      duration: 30,
      price: 1000,
    },
    {
      duration: 45,
      price: 1300,
    },
    {
      duration: 60,
      price: 1800,
    },
    ]
  },
  {
    name: 'Групповые уроки',
    iconUrl: './img/people.svg',
    tarifs: [
      {
        duration: 60,
        price: 800,
      },
    ]
  },
  {
    name: 'Парные уроки',
    iconUrl: './img/people.svg',
    tarifs: [
      {
        duration: 60,
        price: 800,
      },
    ]
  },
]

export const TeachersList = [
  {
    name: 'Эмилия Леонович',
    img: './img/teachers/emilia-leonovich.png',
    title: 'Преподаватель и носитель языка',
  },
  {
    name: 'Лариса Леванова',
    img: './img/teachers/larisa-levanov.png',
    title: 'Преподаватель и носитель языка',
  },
  {
    name: 'Анастасия Москвина',
    img: './img/teachers/anastasia-moskvina.jpg',
    title: 'Преподаватель и носитель языка',
  }
];

export const ReviewsList = [
  {
    name: 'Ученик 1',
    img: './img/teachers/Ellipse6.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Accumsan vulputate fames eget sed placerat quis. Hendrerit vitae nunc faucibus amet. Odio tincidunt eget ut lacus quam. Odio tristique risus sodales turpis nec turpis duis fermentum.',
  },
  {
    name: 'Ученик 2',
    img: './img/teachers/Ellipse7.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Accumsan vulputate fames eget sed placerat quis. Hendrerit vitae nunc faucibus amet. Odio tincidunt eget ut lacus quam. Odio tristique risus sodales turpis nec turpis duis fermentum.',
  },
  {
    name: 'Ученик 3',
    img: './img/teachers/Ellipse8.jpg',
    title: 'Lorem ipsum dolor sit amet consectetur. Accumsan vulputate fames eget sed placerat quis. Hendrerit vitae nunc faucibus amet. Odio tincidunt eget ut lacus quam. Odio tristique risus sodales turpis nec turpis duis fermentum.',
  }
];

export const FaqList:FaqType = [
  {
    question: 'как лучше изучать язык? индивидуально или в группе?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Accumsan vulputate fames eget sed placerat quis. Hendrerit vitae nunc faucibus amet. Odio tincidunt eget ut lacus quam. Odio tristique risus sodales turpis nec turpis duis fermentum.'
  },
  {
    question: 'Могу ли я начать изучать французский язык если у меня начальный уровень?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Accumsan vulputate fames eget sed placerat quis. Hendrerit vitae nunc faucibus amet. Odio tincidunt eget ut lacus quam. Odio tristique risus sodales turpis nec turpis duis fermentum.'
  },
  {
    question: 'как вы можете гарантировать результат?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Accumsan vulputate fames eget sed placerat quis. Hendrerit vitae nunc faucibus amet. Odio tincidunt eget ut lacus quam. Odio tristique risus sodales turpis nec turpis duis fermentum.'
  },
  {
    question: 'может ли мой ребенок изучать французский язык в вашей школе?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Accumsan vulputate fames eget sed placerat quis. Hendrerit vitae nunc faucibus amet. Odio tincidunt eget ut lacus quam. Odio tristique risus sodales turpis nec turpis duis fermentum.'
  },
]
