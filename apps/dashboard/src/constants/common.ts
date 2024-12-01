import { Social } from "@/enums/social";
import {
  faVk,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const GENDERS = [
  {
    value: "male",
    label: "Мужской",
  },
  {
    value: "female",
    label: "Женский",
  },
];

interface ISocial {
  icon: IconProp;
  value: Social;
  name: string;
}
export const SOCIALS: ISocial[] = [
  {
    icon: faVk,
    value: Social.vk,
    name: "VK",
  },
  {
    icon: faTelegram,
    value: Social.telegram,
    name: "Telegram",
  },
  {
    icon: faInstagram,
    value: Social.instagram,
    name: "Instagram",
  },
];
