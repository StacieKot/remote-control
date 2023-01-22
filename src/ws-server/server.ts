import { createWebSocketStream, WebSocketServer } from "ws";
import { handleRequest } from "./handlers";

export const startWS = () => {
  const wss = new WebSocketServer({ port: 8080 });

  wss.on("connection", (ws) => {
    ws.send(`Connected`);

    ws.on("message", async (data) => {
      const [command, ...args] = data.toString().split(" ");

      const response = await handleRequest(command, ...args);

      if (response) {
        const wsStream = createWebSocketStream(ws, {
          encoding: "utf8",
          decodeStrings: false,
        });

        wsStream.write(response);
      }
    });

    ws.on("close", () => {
      console.log("disconnected");
    });
  });
};
