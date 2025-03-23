const express = require("express")
const route = express.Router();
const userController = require("../controller/userController")


route.post("/registration", userController.registration)
route.post("/login", userController.Login)
route.post("/authentication", userController.Authentication)
route.post("/accInfo", userController.AccInfo)
route.post("/moneytransaction", userController.MoneyTransaction)
route.post("/balancequiry", userController.BalanceQuiry)
route.post("/accstatement", userController.AccStatement)
route.post("/passreset", userController.PassReset)

module.exports = route;

