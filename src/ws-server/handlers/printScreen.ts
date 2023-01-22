import Jimp from "jimp/es";
import { mouse, Region, screen } from "@nut-tree/nut-js";

export const makePrintScreen = async (command: string): Promise<string> => {
  try {
    const { x, y } = await mouse.getPosition();
    const region = new Region(x - 100, y - 100, 200, 200);

    await screen.highlight(region);

    const screenImage = await screen.grabRegion(region);

    const image = new Jimp({ data: screenImage.data, width: 200, height: 200 });

    const encodedPicture = await image.getBufferAsync(Jimp.MIME_PNG);

    return `${command} ${encodedPicture.toString("base64")}`;
  } catch (err: any) {
    return `${command}_failed - ${err.message}`;
  }
};
