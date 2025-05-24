import { pluginManager } from "../../app/pluginManager";
import { ButtonPluginPage } from "./Page";

pluginManager.register({
  id: "button",
  route: "/button",
  component: ButtonPluginPage,
  tile: "DVD-Style!",
  color1: "#3333ff", 
  color2: "#00f7ff",
  spin: 50
});