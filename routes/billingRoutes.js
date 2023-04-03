const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middleware/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: "USD",
      description: "$5 for 5 mail credits",
      payment_method_types: ["card"],
      receipt_email: req.user.email,
    });

    // create a payment link
    const paymentLink =
      paymentIntent["https://buy.stripe.com/test_9AQ03a2pO7ox0eY3cc"];

    req.user.credits += 5;
    const user = await req.user.save();

    res.send({ user, paymentLink });
  });
};
