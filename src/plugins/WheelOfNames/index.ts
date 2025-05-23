import { pluginManager } from "../../app/pluginManager";
import { WheelOfNamesPluginPage } from "./Page";

pluginManager.register({
  id: "wheelOfNames",
  route: "/wheelOfNames",
  component: WheelOfNamesPluginPage,
  tile: "Wheel Of Names",
  color1: "red", 
  color2: "yellow",
  spin: 135
});
