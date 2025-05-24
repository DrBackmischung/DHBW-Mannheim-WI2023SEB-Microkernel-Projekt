import { pluginManager } from "../../app/pluginManager";
import { ZenPluginPage } from "./Page";

pluginManager.register({
  id: "zenPlugin",
  route: "/zen",
  component: ZenPluginPage,
  tile: "Zen!",
  color1: "#a8edea",
  color2: "#fed6e3",
  spin: 30
});
