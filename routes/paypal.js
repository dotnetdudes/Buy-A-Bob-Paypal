const express = require("express");
const router = express.Router();
const paypalController = require("../controllers/paypalController");

router.get("/", (req, res) => {
  res.send("Paypal route");
});

router.post("/api/orders", async (req, res, next) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { cart } = req.body;

    const { jsonResponse, httpStatusCode } = await paypalController.createOrder(cart);

    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    next(error);
  }
});

router.post("/api/orders/:orderID/capture", async (req, res, next) => {
  try {
    const { orderID } = req.params;

    const { jsonResponse, httpStatusCode } = await paypalController.captureOrder(orderID);

    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
