const express = require("express");

const iotRouter = require("./routes/iot-routes");

const app = express();

const PORT = 5000;

app.use(express.json());

app.use("/api/iot", iotRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
