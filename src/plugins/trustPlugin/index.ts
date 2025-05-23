import { pluginManager } from "../../app/pluginManager";
import { ThePluginPage } from "./Page";

pluginManager.register({
  id: "thePlugin",
  route: "/trust",
  component: ThePluginPage,
  tile: "Trustworthy!",
  color1: "black",
  color2: "orange",
  spin: 90
});
