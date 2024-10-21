import { User } from "@/models/user";

interface HomeCard {
  title: string;
  img: string;
  filter: string;
  description: string;
}

export const homeCards: HomeCard[] = [
  {
    title: "Барбер",
    img: "/img/barber.jpg",
    filter: "barber",
    description:
      "Барбер — это мастер стиля, который создает уникальные образы с помощью стрижек и укладок. Профессиональный подход, внимание к деталям и индивидуальный стиль.",
  },
  {
    title: "Тату мастер",
    img: "/img/tattoo.jpg",
    filter: "tattoo",
    description:
      "Тату-мастер — это художник, который воплощает идеи клиентов в уникальные татуировки. Профессионализм, креативность и внимание к мелочам создают шедевры на коже.",
  },
  {
    title: "Мастер по ногтям",
    img: "/img/nails.jpeg",
    filter: "nails",
    description:
      "Мастер по ногтям — это специалист, который создает стильный маникюр и педикюр. Творческий подход, аккуратность и внимание к деталям гарантируют идеальные результаты.",
  },
  {
    title: "Бровист",
    img: "/img/brows.png",
    filter: "brows",
    description:
      "Мастер по бровям — это эксперт в создании идеальной формы и окрашивании. Профессионализм, внимание к деталям и индивидуальный подход обеспечивают безупречный результат.",
  },
];

export const mockUser: User = {
  firstName: "Семён",
  lastName: "Никифоров",
  avatar: "/img/mock-avatar.jpg",
  age: "24",
  qualification: "Мастер-класс",
  city: "Москва",
  phone: "+79999999999",
  email: "test@example.com",
  telegram: "Mr_Shimson",
  whatsApp: "+79999999999",
  personalWebsite: "https://example.com",
};
