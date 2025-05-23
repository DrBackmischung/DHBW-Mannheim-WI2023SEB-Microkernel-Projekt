import { pluginManager } from "../../app/pluginManager";
import { RaphaelStinktPluginPage } from "./Page";

pluginManager.register({
  id: "raphaelStinkt",
  route: "/raphaelStinkt",
  component: RaphaelStinktPluginPage,
  tile: "raphaelStinkt!",
  color1: "red",
  color2: "purple",
  spin: 0
});
