import { pluginManager } from "../../app/pluginManager";
import { HerrscherPluginPage } from "./Page";

pluginManager.register({
  id: "herrscher",
  route: "/herrscher",
  component: HerrscherPluginPage,
  tile: "Herrscher 🚀",
  color1: "red", 
  color2: "yellow",
  spin: 135
});
