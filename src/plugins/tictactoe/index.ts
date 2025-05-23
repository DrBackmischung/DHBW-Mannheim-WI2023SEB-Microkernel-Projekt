import { pluginManager } from "../../app/pluginManager";
import { TicTacToePluginPage } from "./Page";

pluginManager.register({
  id: "tictactoe",
  route: "/tictactoe",
  component: TicTacToePluginPage,
  tile: "Tic Tac Toe",
  color1: "blue",
  color2: "yellow",
  spin: 20
});
