import { Route } from "@/enums/navigation";

export interface MenuItem {
  label: string;
  path: Route;
}

export const PROFILE_MENU_ITEMS: MenuItem[] = [
  {
    label: "Профиль",
    path: Route.PROFILE,
  },
  {
    label: "Портфолио",
    path: Route.PORTFOLIO,
  },
  {
    label: "Предложения",
    path: Route.OFFERS,
  },
  {
    label: "Выплаты",
    path: Route.PAYOUTS,
  },
  {
    label: "Статистика",
    path: Route.STAT,
  },
  {
    label: "Настройки",
    path: Route.SETTINGS,
  },
];
