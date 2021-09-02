const mongoose = require("mongoose");

function Conn(url, porta, banco) {
  mongoose
    .connect(`mongodb://${url}:${porta}/${banco}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb Conectado");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = Conn;

// remoteDB = "mongodb+srv://ming:<pass>@cluster0.6xyk4.mongodb.net/filme?retryWrites=true&w=majority"
// function RemoteConn() {
//   mongoose.connect(remoteDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MongoDb Conectado");
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// }
