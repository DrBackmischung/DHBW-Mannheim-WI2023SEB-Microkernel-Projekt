import { pluginManager } from "../../app/pluginManager";
import { MusicPluginPage } from "./Page";

pluginManager.register({
  id: "mika",
  route: "/mika",
  component: MusicPluginPage,
  tile: "Music Plugin 🎵",
  color1: "purple",
  color2: "cyan",
  spin: 45,
});