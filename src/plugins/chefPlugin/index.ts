import { pluginManager } from "../../app/pluginManager";
import { ChefPluginPage } from "./Page";

pluginManager.register({
  id: "chef",
  route: "/chef",
  component: ChefPluginPage,
  tile: "Plugin von Chef",
  color1: "blue", 
  color2: "yellow",
  spin: 135
});
