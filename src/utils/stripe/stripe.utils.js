import { loadStripe } from "@stripe/stripe-js";

////185
export const stripePromise = loadStripe(
  //process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  "pk_test_51MaRWoEHUukPpPjqx9r1TlTAaLB8s55TCyc2x2XhV41i0JXED93eIOKOqJbLnH5nFEdgNqGs1fd13EC4tkpos0QG00UZxBf5yw"
);
