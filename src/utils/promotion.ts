import { formatCurrency } from "./currency";
import { PromotionType } from "~/domains/promotion";

export const convertPromotionToString = (
  amount: number,
  amountType: number
) => {
  if (amountType === PromotionType.Amount) {
    return formatCurrency(amount, 0);
  }

  return `${amount}%`;
};
