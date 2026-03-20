import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { CountryPlans } from "./components/CountryPlans";
import { PlanDetails } from "./components/PlanDetails";
import { Cart } from "./components/Cart";
import { Profile } from "./components/Profile";
import { Orders } from "./components/Orders";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "country/:countryId", Component: CountryPlans },
      { path: "plan/:planId", Component: PlanDetails },
      { path: "cart", Component: Cart },
      { path: "profile", Component: Profile },
      { path: "orders", Component: Orders },
    ],
  },
]);
