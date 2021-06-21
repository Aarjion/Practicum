import Admin from "./pages/Admin";
import {
    PRODUCT_ROUTE,
    SHOP_ROUTE,
    CATALOG_ROUTE,
    FAVORITES_ROUTE,
    BASKET_ROUTE,
    CONTACT_ROUTE,
    REGISTRATION_ROUTE,
    LOGIN_ROUTE,
    ABOUT_ROUTE,
    ADMIN_ROUTE,
} from "./utils/consts";
import Basket from "./pages/Basket";
import Favorites from "./pages/Favorites";
import Auth from "./pages/Auth";
import Product from "./pages/Product";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: FAVORITES_ROUTE,
        Component: Favorites
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:idProduct',
        Component: Product
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },

]