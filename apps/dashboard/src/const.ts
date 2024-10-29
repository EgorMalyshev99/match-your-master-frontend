import { Route } from "@/enums/navigation";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBriefcase,
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
    label: "Портфолио",
    path: Route.PORTFOLIO,
    icon: faBriefcase,
  },
  {
    label: "Предложения",
    path: Route.OFFERS,
    icon: faEnvelope,
  },
  {
    label: "Выплаты",
    path: Route.PAYOUTS,
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

export const API_PATHS = {
  login: "/auth/signin",
  signup: "/auth/signup",
  logout: "/auth/signout",
  resetPassword: "/auth/reset-password",
  emailVerify: "/auth/email-verify",
  csrf: "/auth/csrf-cookie",
  getUserProfile: (id: string | number) => `/user/${id}/profile`,
  getUserSettings: (id: string | number) => `/user/${id}/settings`,
};
