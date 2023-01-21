import { createWebSocketStream, WebSocketServer } from "ws";
import { handleRequest } from "./handlers";

export const startWS = () => {
  const wss = new WebSocketServer({ port: 8080 });

  wss.on("connection", function connection(ws) {
    ws.send(`Connected`);

    ws.on("message", async function message(data) {
      const [command, value1, value2] = data.toString().split(" ");

      const response = await handleRequest(command, value1, value2);

      if (response) {
        const wsStream = createWebSocketStream(ws, {
          encoding: "utf8",
          decodeStrings: false,
        });

        wsStream.write(response);
      }
    });

    ws.on("error", function message() {
      ws.send(`server error`);
    });
  });
};
