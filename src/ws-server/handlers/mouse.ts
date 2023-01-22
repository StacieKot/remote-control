import { mouse, left, right, up, down } from "@nut-tree/nut-js";

const DEFAULT_STEP = 10;

export const handleMouseUp = async (
  command: string,
  value = DEFAULT_STEP
): Promise<string> => {
  await mouse.move(up(value));

  return `${command}_${value}`;
};

export const handleMouseDown = async (
  command: string,
  value = DEFAULT_STEP
): Promise<string> => {
  await mouse.move(down(value));

  return `${command}_${value}`;
};

export const handleMouseLeft = async (
  command: string,
  value = DEFAULT_STEP
): Promise<string> => {
  await mouse.move(left(value));

  return `${command}_${value}`;
};

export const handleMouseRight = async (
  command: string,
  value = DEFAULT_STEP
): Promise<string> => {
  await mouse.move(right(value));

  return `${command}_${value}`;
};

export const getMousePosition = async (command: string): Promise<string> => {
  const point = await mouse.getPosition();

  return `${command} ${point.x},${point.y}`;
};
