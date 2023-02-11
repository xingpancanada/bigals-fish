import { loadStripe } from "@stripe/stripe-js";
////185
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  //"pk_test_51L1ZG7IQvddcHP21lF7pJv4oTeW1gCEHE0l5cqKLWwRB6xkcvOHoQR0NpxVvDRwkQyLhb369JlisoqKB7cFfSgww00sQvTgZu2"
);
