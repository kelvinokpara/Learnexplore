import { amazonpay, UPI, mastercard, paytm } from "../Icons/payment-icons";
import {
  pricingCheck,
  pricingInfo,
  pricingMonthly,
  pricingYearly,
  pricingSingle,
} from "../Icons/pricing-icons/index.js";
export const pricingData = [
  {
    mainIcon: { pricingSingle },
    priceType: "Single Course",
    price: "10$",
    btnText: "Try for free",
    infoIcon: { pricingInfo },
    info: "Pay monthly, cancel anytime.",
    featureIcon: { pricingCheck },
    features1: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    features2: "sit amet, consectetur adipiscing.",
    features3:
      "Lorem ipsum dolor sit amet,adipiscing elit. Nullam accumsan ut arcu.",
  },
  {
    mainIcon: { pricingMonthly },
    priceType: "Monthly Plan",
    price: "55$",
    btnText: "Try for free",
    infoIcon: { pricingInfo },
    info: "Pay monthly, cancel anytime.",
    featureIcon: { pricingCheck },
    features1: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    features2: "sit amet, consectetur adipiscing.",
    features3:
      "Lorem ipsum dolor sit amet,adipiscing elit. Nullam accumsan ut arcu.",
  },
  {
    mainIcon: { pricingYearly },
    priceType: "Yearly Plan",
    price: "40$",
    btnText: "Try for free",
    infoIcon: { pricingInfo },
    info: "Pay monthly, cancel anytime.",
    featureIcon: { pricingCheck },
    features1: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    features2: "sit amet, consectetur adipiscing.",
    features3:
      "Lorem ipsum dolor sit amet,adipiscing elit. Nullam accumsan ut arcu.",
  },
];

export const checkoutPriceData = [
  { label: "Single Course", desc: "Purchase only this course.", price: "20" },
  { label: "Monthly", desc: "Pay monthly cancel anytime.", price: "20" },
  { label: "Yearly", desc: "Pay monthly cancel anytime.", price: "48" },
];

export const paymentMethodData = [
  { label: "UPI", icon: { UPI } },
  { label: "Credit Card", icon: { mastercard } },
  { label: "Paytm", icon: { paytm } },
  { label: "Mobile Wallet", icon: { amazonpay } },
];
