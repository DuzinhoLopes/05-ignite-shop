import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY as string;

if (!stripeSecretKey) {
  throw new Error("A variável STRIPE_SECRET_KEY não está definida.");
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-09-30.acacia",
  appInfo: {
    name: "Ignite Shop",
  },
});
