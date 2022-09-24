const { default: mongoose } = require("mongoose");
const app = require("./app/app");

mongoose
  .connect(`mongodb:${process.env.DATABASE_URL}`)
  .then(() => {
    console.log(
      `---- database connection on port ${process.env.DATABASE_URL} ----`
    );
    app.listen(process.env.PORT, () => {
      console.log(`---- server listening on port ${process.env.PORT} ----`);
    });
  })
  .catch((err) => {
    console.log("connect error:", err);
  });
