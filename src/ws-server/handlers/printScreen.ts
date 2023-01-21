import Jimp from "jimp/es";
import { mouse } from "@nut-tree/nut-js";

export const makePrintScreen = async (command: string): Promise<string> => {
  const { x, y } = await mouse.getPosition();
  console.log("Handle printScreen");
  return `${command}`;
};
