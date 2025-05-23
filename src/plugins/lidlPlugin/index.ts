import { pluginManager } from "../../app/pluginManager";
import { LidlPluginPage } from "./Page";

pluginManager.register({
  id: "lidl",
  route: "/lidl",
  component: LidlPluginPage,
  tile: "Lidl!",
  color1: "blue",
  color2: "yellow",
  spin: 0
});
