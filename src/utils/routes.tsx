import { createBrowserRouter } from "react-router";
import HomePageFinal from "../imports/HomePageFinal";
import { OrdersLayout } from "../components/OrdersLayout";
import AssetWithNavigation from "../components/AssetWithNavigation";
import Payment from "../imports/Payment";
import { AnalyticsLayout } from "../components/AnalyticsLayout";
import { AssetDetailLayout } from "../components/AssetDetailLayout";
import CustomerProfileForm from "../components/CustomerProfileForm";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CustomerProfileForm,
  },
  {
    path: "/dashboard",
    Component: HomePageFinal,
  },
  {
    path: "/orders",
    Component: OrdersLayout,
  },
  {
    path: "/assets",
    Component: AssetWithNavigation,
  },
  {
    path: "/assets/:assetId",
    Component: AssetDetailLayout,
  },
  {
    path: "/payments",
    Component: Payment,
  },
  {
    path: "/analytics",
    Component: AnalyticsLayout,
  },
]);