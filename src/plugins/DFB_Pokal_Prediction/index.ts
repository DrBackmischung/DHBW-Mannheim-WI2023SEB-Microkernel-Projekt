import { pluginManager } from "../../app/pluginManager";
import { DFB_Pokal_PluginPage } from "./Page";

pluginManager.register({
  id: "DFB_Pokal",
  route: "/DFB_Pokal",
  component: DFB_Pokal_PluginPage,
  tile: "DFB_Pokal_Vorhersage!",
  color1: "withe",
  color2: "red",
  spin: 0
});
