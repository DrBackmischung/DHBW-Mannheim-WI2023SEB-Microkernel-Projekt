import { pluginManager } from "../../app/pluginManager";
import { BielefeldPluginPage } from "./Page";

pluginManager.register({
  id: "bielefeld",
  route: "/bielefeld",
  component: BielefeldPluginPage,
  tile: "Bielefeld!!!! 💙",
  color1: "blue", 
  color2: "white",
  spin: 0
});
