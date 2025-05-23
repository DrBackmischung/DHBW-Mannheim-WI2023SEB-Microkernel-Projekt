import { pluginManager } from "../../app/pluginManager";
import { RuehlPluginPage } from "./Page";

pluginManager.register({
  id: "ruehl",
  route: "/ruehl",
  component: RuehlPluginPage,
  tile: "Markus Rühl",
  color1: "#ff0000",
  color2: "#000000",
  spin: 0
});
