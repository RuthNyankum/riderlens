export function formatPrice(
  amount: number,
  currency: "USD" | "GHS",
  rate: number,
) {
  let converted = amount;

  if (currency === "USD") {
    converted = amount * rate; // convert GHS → USD
  }
  /* for only symbol
  const symbol = currency === "USD" ? "$" : "₵";
   */
  const symbol = currency === "USD" ? "$" : "GH₵";

  return `${symbol} ${converted.toFixed(2)}`;
}
