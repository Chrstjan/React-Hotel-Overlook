import { DestinationsPage } from "../pages/DestinationsPage";
import { LandingPage } from "../pages/LandingPage";
import { ReservationPage } from "../pages/ReservationPage";
import { RoomsPage } from "../pages/RoomsPage";
import { LoginPage } from "../pages/LoginPage";

export const paths = [
    {
        name: "Forside",
        element: LandingPage,
        path: "/"
    },
    {
        name: "Hoteller & Destinationer",
        element: DestinationsPage,
        path: "/destinations"
    },
    {
        name: "Værelser",
        element: RoomsPage,
        path: "/rooms"
    },
    {
        name: "Reservation",
        element: ReservationPage,
        path: "/reservation"
    },
    {
        name: "Login",
        element: LoginPage,
        path: "/login"
    },
]