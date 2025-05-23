import { pluginManager } from "../../app/pluginManager";
import { HelloWorldPluginPage } from "./Page";

pluginManager.register({
  id: "release",
  route: "/release",
  component: HelloWorldPluginPage,
  tile: "Days till Graduation",
  color1: "Green",
  color2: "Green",
  spin: 15
});
