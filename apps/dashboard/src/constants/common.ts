import { Social } from "@/enums/social";
import { faVk, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import instagramLogo from "@/assets/images/socials/instagram-128.png";

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
  icon?: IconProp;
  img?: string;
  value: Social;
  name: string;
  color?: string;
  linkTemplate: string;
}
export const SOCIALS: ISocial[] = [
  {
    icon: faVk,
    value: Social.vk,
    name: "VK",
    color: "#07f",
    linkTemplate: "https://vk.com/...",
  },
  {
    icon: faTelegram,
    value: Social.telegram,
    name: "Telegram",
    color: "#039be5",
    linkTemplate: "https://t.me/...",
  },
  {
    img: instagramLogo.src,
    value: Social.instagram,
    name: "Instagram",
    linkTemplate: "https://instagram.com/...",
  },
];
