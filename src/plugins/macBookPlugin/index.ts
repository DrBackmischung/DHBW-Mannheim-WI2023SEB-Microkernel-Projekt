import { pluginManager } from "../../app/pluginManager";
import { MacBookPluginPage } from "./Page";

pluginManager.register({
  id: "macbook",
  route: "/macbook",
  component: MacBookPluginPage,
  tile: "MacBook!",
  color1: "black",
  color2: "blue",
  spin: 0
});
