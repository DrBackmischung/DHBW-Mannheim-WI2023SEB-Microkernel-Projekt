
import { pluginManager } from "../../app/pluginManager";
import { YoutubePage } from "./Page";

pluginManager.register({
  id: "iplugin",  
  route: "/iplugin",
  component: YoutubePage,
  tile: "Seagulls",
  color1: "#ff0000",
  color2: "#000000",
  spin: 0
});
