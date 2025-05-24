import { pluginManager } from "../../app/pluginManager";
import { WetterPluginPage } from "./Page";

pluginManager.register({
  id: "wetter",
  route: "/wetter",
  component: WetterPluginPage,
  tile: "Wetter Vorhersage ☀️",
  color1: "#4fc3f7", 
  color2: "#b3e5fc",
  spin: 45
});
