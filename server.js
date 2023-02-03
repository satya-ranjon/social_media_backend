const { default: mongoose } = require("mongoose");
const app = require("./app/app");

const PORT = process.env.PORT || 5000
const DATABASE_URL = process.env.DATABASE_URL 


mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log(
      `---- database connection on port ${DATABASE_URL} ----`
    );
    app.listen(PORT, () => {
      console.log(`---- server listening on port ${PORT} ----`);
    });
  })
  .catch((err) => {
    console.log("connect error:", err);
  });
