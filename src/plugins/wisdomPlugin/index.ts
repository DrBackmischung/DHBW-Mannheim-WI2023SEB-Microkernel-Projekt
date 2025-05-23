import { pluginManager } from "../../app/pluginManager";
import { WisdomPluginPage } from "./Page";

pluginManager.register({
  id: "wisdomPlugin",
  route: "/wisdomPlugin",
  component: WisdomPluginPage,
  tile: "Weisheit des Tages 🧠",
  color1: "#5e60ce",
  color2: "#6930c3",
  spin: 42
});
