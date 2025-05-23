import { pluginManager } from "../../app/pluginManager";
import { pluginguin } from "./Page";
import pinguin from '../pinguin.jpg';

pluginManager.register({
  id: "pluginguin",
  route: "/pluginguin",
  component: pluginguin,
  tile: "Pluginguin!",
  color1: "black",
  color2: "white",
  spin: 0
});



