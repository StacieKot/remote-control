import {
  mouse,
  left,
  right,
  up,
  down,
  straightTo,
  Point,
  Button,
} from "@nut-tree/nut-js";

const degreesToRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

export const drawCircle = async (
  command: string,
  value = 100
): Promise<string> => {
  let angle = 5;
  const centerPoint = await mouse.getPosition();
  const initPoint = { x: centerPoint.x + value, y: centerPoint.y };

  await mouse.setPosition(new Point(initPoint.x, initPoint.y));
  await mouse.pressButton(Button.LEFT);

  do {
    const offsetX = value * Math.cos(degreesToRadians(angle));
    const offsetY = value * Math.sin(degreesToRadians(angle));
    const x = centerPoint.x + offsetX;
    const y = centerPoint.y + offsetY;
    angle = angle + 5;
    await mouse.drag(straightTo(new Point(x, y)));
  } while (angle <= 360);
  await mouse.releaseButton(Button.LEFT);

  return `${command}_${value}`;
};

export const drawRectangle = async (
  command: string,
  value1 = 100,
  value2 = 100
): Promise<string> => {
  await mouse.pressButton(Button.LEFT);
  await mouse.drag(right(value1));
  await mouse.drag(down(value2));
  await mouse.drag(left(value1));
  await mouse.drag(up(value2));
  await mouse.releaseButton(Button.LEFT);

  return `${command}_${value1},${value2}`;
};

export const drawSquare = async (
  command: string,
  value = 100
): Promise<string> => {
  await mouse.pressButton(Button.LEFT);
  await mouse.drag(right(value));
  await mouse.drag(down(value));
  await mouse.drag(left(value));
  await mouse.drag(up(value));
  await mouse.releaseButton(Button.LEFT);

  return `${command}_${value}`;
};
