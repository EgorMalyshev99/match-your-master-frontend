import { Route } from "@/enums/navigation";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faWallet,
  faChartSimple,
  faGear,
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
    label: "Объявления",
    path: Route.OFFERS,
    icon: faEnvelope,
  },
  {
    label: "Подписка",
    path: Route.SUBSCRIPTION,
    icon: faWallet,
  },
  {
    label: "Статистика",
    path: Route.STAT,
    icon: faChartSimple,
  },
  {
    label: "Настройки",
    path: Route.SETTINGS,
    icon: faGear,
  },
];