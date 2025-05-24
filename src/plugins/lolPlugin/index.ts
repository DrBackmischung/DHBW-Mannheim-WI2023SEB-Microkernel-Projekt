import { pluginManager } from "../../app/pluginManager";
import { LolPluginPage } from "./Page.tsx";

pluginManager.register({
    id: "lol",
    route: "/lol",
    component: LolPluginPage,     // Name der exportierten Komponente
    tile: "Lol Button 🎉",        // Titel in der Plugin-Übersicht
    color1: "pink",               // Farbanpassung
    color2: "white",
    spin: 45
});
