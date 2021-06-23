const express = require("express")
const Order = require("../models/order")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const userOrders = await Order.listOrdersForUser()
    return res.status(200).json({ userOrders })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const order = await Order.createOrder()
    return res.status(201).json({ order })
  } catch (err) {
    next(err)
  }
})

module.exports = router