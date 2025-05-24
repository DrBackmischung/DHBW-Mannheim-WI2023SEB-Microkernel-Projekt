import { pluginManager } from "../../app/pluginManager";
import { avatarPlugin } from "./Page";

pluginManager.register({
  id: "avatar",
  route: "/avatar",
  component: avatarPlugin,
  tile: "You got a new Avatar 🔥",
  color1: "red", 
  color2: "blue",
  spin: 123
});
