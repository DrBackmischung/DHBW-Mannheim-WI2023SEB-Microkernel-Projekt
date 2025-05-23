import { pluginManager } from "../../app/pluginManager";
import { TomPluginPage } from "./Page";

pluginManager.register({
  id: "tom",
  route: "/tom",
  component: TomPluginPage,
  tile: "tom",
  color1: "green",
  color2: "black",
  spin: 187
});
