import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;
 
const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      "pk_test_51LuGJWA5CgLxn7YpNA62aGTw4Km8Sbof2Hhsg2KbMZwxN7EIumS2egghAADGA471E00TTfxpZOKx1kua96y8PmAn00lTcSvckG"
    );
  }
  return stripePromise;
};
export default initializeStripe;