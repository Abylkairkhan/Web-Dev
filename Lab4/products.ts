export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    image:string;
    link: string;
  }
  
export const products = [
    {
      id: 1,
      name: 'Игровая приставка Sony PlayStation 5 + DualSense фиолетовый + FIFA 23 + NIOH + GTA 5',
      price: 543777,
      description: 'тип: стационарная объем SSD: 825 Гб поддержка UHD (4K): Да тип носителя для игр: BD (Blu-ray Disc)',
      rating: 4.5,
      image: "assets/sony-playstation-5.jpg",
      link: "https://kaspi.kz/shop/p/sony-playstation-5-dualsense-fioletovyi-fifa-23-nioh-gta-5-107290489/?c=750000000#!/item"
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Pro 16 MVVM2 серебристый',
      price: 2450008,
      description: 'диагональ экрана: 16 дюйм процессор: Intel Core i9 9880H видеокарта: AMD Radeon 5500 размер оперативной памяти: 16 ГБ тип жесткого диска: SSD общий объем накопителей: 1000 ГБ',
      rating: 5,
      image: "assets/apple-macbook-pro-16.jpg",
      link: "https://kaspi.kz/shop/p/apple-macbook-pro-16-mvvm2-serebristyi-100397588/?c=750000000#!/item"
    },
    {
      id: 3,
      name: 'Смартфон Apple iPhone 14 Pro Max 1Tb Dual Sim черный',
      price: 1170000,
      description: 'технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.7 дюйм',
      rating: 5,
      image: "assets/apple-iphone-14-pro-max.jpg",
      link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-chernyi-107116389/?c=750000000#!/item"
    },
    {
      id: 4,
      name: 'Микроволновая печь Bosch BFL524MB0 черный',
      price: 199370,
      description: 'расположение: встраиваемая внутренний объем: 20 л внутреннее покрытие камеры: нерж. сталь тип управления: электронное',
      rating: 5,
      image: "assets/bosch.jpg",
      link: "https://kaspi.kz/shop/p/bosch-bfl524mb0-chernyi-2900766/?c=750000000#!/item"
    },
    {
      id: 5,
      name: 'Кровать Cavio № 8831, 180x200 см, белый',
      price: 1882000,
      description: 'тип: двуспальная спальное место: 180x200 см материал: велюр',
      rating: 0,
      image: "assets/krovat.jpg",
      link: "https://kaspi.kz/shop/p/cavio-8831-180x200-sm-belyi-108717691/?c=750000000#!/item"
    },
    {
      id: 1,
      name: 'Игровая приставка Sony PlayStation 5 + DualSense фиолетовый + FIFA 23 + NIOH + GTA 5',
      price: 543777,
      description: 'тип: стационарная объем SSD: 825 Гб поддержка UHD (4K): Да тип носителя для игр: BD (Blu-ray Disc)',
      rating: 4.5,
      image: "assets/sony-playstation-5.jpg",
      link: "https://kaspi.kz/shop/p/sony-playstation-5-dualsense-fioletovyi-fifa-23-nioh-gta-5-107290489/?c=750000000#!/item"
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Pro 16 MVVM2 серебристый',
      price: 2450008,
      description: 'диагональ экрана: 16 дюйм процессор: Intel Core i9 9880H видеокарта: AMD Radeon 5500 размер оперативной памяти: 16 ГБ тип жесткого диска: SSD общий объем накопителей: 1000 ГБ',
      rating: 5,
      image: "assets/apple-macbook-pro-16.jpg",
      link: "https://kaspi.kz/shop/p/apple-macbook-pro-16-mvvm2-serebristyi-100397588/?c=750000000#!/item"
    },
    {
      id: 3,
      name: 'Смартфон Apple iPhone 14 Pro Max 1Tb Dual Sim черный',
      price: 1170000,
      description: 'технология NFC: Да цвет: черный тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.7 дюйм',
      rating: 5,
      image: "assets/apple-iphone-14-pro-max.jpg",
      link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-chernyi-107116389/?c=750000000#!/item"
    },
    {
      id: 4,
      name: 'Микроволновая печь Bosch BFL524MB0 черный',
      price: 199370,
      description: 'расположение: встраиваемая внутренний объем: 20 л внутреннее покрытие камеры: нерж. сталь тип управления: электронное',
      rating: 5,
      image: "assets/bosch.jpg",
      link: "https://kaspi.kz/shop/p/bosch-bfl524mb0-chernyi-2900766/?c=750000000#!/item"
    },
    {
      id: 5,
      name: 'Кровать Cavio № 8831, 180x200 см, белый',
      price: 1882000,
      description: 'тип: двуспальная спальное место: 180x200 см материал: велюр',
      rating: 0,
      image: "assets/krovat.jpg",
      link: "https://kaspi.kz/shop/p/cavio-8831-180x200-sm-belyi-108717691/?c=750000000#!/item"
    }
];