// @material-ui/icons
import { Dashboard, PhotoAlbum } from "@material-ui/icons";

// custom views
import DashBoard from "./dashboard";
import Album from "./album";

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: DashBoard,
    },
    {
        path: "/album",
        name: "Album",
        icon: PhotoAlbum,
        component: Album,
    },
];

export default routes;
