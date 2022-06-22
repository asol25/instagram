import io from '../../server';


export function initialize(): any {
    // io.use((socket, next) => {
    //     const username = socket.handshake.auth.username;
    //     if (!username) {
    //         return next(new Error("invalid username"));
    //     }
    //     (socket as any).username = username
    //     next();
    // });

    io.on("connection", (socket) => {
        socket.on('created', (username) => {
            console.log(username);
        })
      });
}
