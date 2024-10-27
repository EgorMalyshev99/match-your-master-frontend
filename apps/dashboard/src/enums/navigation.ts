export enum Route {
  HOME = "/",
  LOGIN = "/auth/login",
  SIGNUP = "/auth/signup",
  USER = "/user",
  PROFILE = "/profile",
  PORTFOLIO = "/portfolio",
  OFFERS = "/offers",
  PAYOUTS = "/payouts",
  STAT = "/stat",
  SETTINGS = "/settings",
}

export const ProtectedRoutes = [
  Route.PROFILE,
  Route.PORTFOLIO,
  Route.OFFERS,
  Route.PAYOUTS,
  Route.STAT,
  Route.SETTINGS,
];
