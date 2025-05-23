import { pluginManager } from "../../app/pluginManager";
import { FortnitePluginPage } from "./Page";

pluginManager.register({
  id: "fortnite",
  route: "/fortnite",
  component: FortnitePluginPage,
  tile: "Fortnite!",
  color1: "violet",
  color2: "blue",
  spin: 0
});
