import { Route } from "@/enums/navigation";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faWallet,
  faChartSimple,
  faGear,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export interface MenuItem {
  label: string;
  path: Route;
  icon: IconProp;
}

export const PROFILE_MENU_ITEMS: MenuItem[] = [
  {
    label: "Профиль",
    path: Route.PROFILE,
    icon: faUser,
  },
  {
    label: "Кабинет мастера",
    path: Route.CABINET,
    icon: faAddressCard,
  },
  {
    label: "Объявления",
    path: Route.OFFERS,
    icon: faEnvelope,
  },
  {
    label: "Статистика",
    path: Route.STAT,
    icon: faChartSimple,
  },
  {
    label: "Подписка",
    path: Route.SUBSCRIPTION,
    icon: faWallet,
  },
  {
    label: "Настройки",
    path: Route.SETTINGS,
    icon: faGear,
  },
];
