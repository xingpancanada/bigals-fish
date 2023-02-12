require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51MaRWoEHUukPpPjqlFXTTElFZWujqXMBL849KPtRWU18zMj927fqZsJqiOT9dhPi6TB9LYqT2crLstWrUv2tYYBD005H5b1kLi"
);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });
    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
