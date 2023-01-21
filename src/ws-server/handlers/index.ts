import { drawCircle, drawRectangle, drawSquare } from "./draw";
import {
  handleMouseUp,
  handleMouseDown,
  handleMouseLeft,
  handleMouseRight,
  getMousePosition,
} from "./mouse";
import { makePrintScreen } from "./printScreen";

const handlers: Record<
  string,
  (command: string, value1?: number, value2?: number) => Promise<string>
> = {
  mouse_up: handleMouseUp,
  mouse_down: handleMouseDown,
  mouse_left: handleMouseLeft,
  mouse_right: handleMouseRight,
  mouse_position: getMousePosition,
  draw_circle: drawCircle,
  draw_rectangle: drawRectangle,
  draw_square: drawSquare,
  prnt_scrn: makePrintScreen,
};

export const handleRequest = async (
  command: string,
  value1: string,
  value2: string
): Promise<string> => {
  return handlers[command]?.(command, Number(value1), Number(value2));
};
