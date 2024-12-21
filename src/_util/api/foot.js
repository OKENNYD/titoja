import {
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
  FaCcDinersClub,
  FaCcAmazonPay,
  FaCcAmex,
  FaCcApplePay,
  FaCcJcb,
  FaCcPaypal,
  FaCcStripe,
  FaTruckFast,
  FaRegCreditCard,
  FaHeadset,
  FaUserShield,
} from "react-icons/fa6";

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWechat,
  IoLogoWhatsapp,
  IoArrowForward,
} from "react-icons/io5";

let service = [
  {
    title: "Secured Payment",
    icon: <FaRegCreditCard size={30} />,
    text: "100% secure payment."
  },
  {
    title: "24/7 Assistance",
    icon: <FaHeadset size={30} />,
    text: "Around the clock helpdesk"
  },
  {
    title: "Safe Shopping",
    icon: <FaUserShield size={30} />,
    text: "If goods have problems"
  },
  {
    title: "Quick Delivery",
    icon: <FaTruckFast size={30} />,
    text: "For orders above 100kg"
  },
]

let foot = [
  {
    title: "My Account",
    navs: [
      { title: "Product Support", href: "/account/customer_service" },
      { title: "Checkout", href: "/checkout" },
      { title: "Shopping Cart", href: "/cart" },
      { title: "My list", href: "/account/my_list" },
      { title: "Redeem Voucher", href: "/account/my_list" },
    ],
  },
  {
    title: "Help",
    navs: [
      { title: "New Customers", href: "" },
      { title: "How to use My Account", href: "" },
      { title: "Placing an Order", href: "" },
      { title: "Payment Methods", href: "" },
      { title: "Delivery & Dispatch", href: "" },
      { title: "Problem with your Order", href: "" },
    ],
  },
  {
    title: "Customer Service",
    navs: [
      { title: "Help Center", href: "/account/help_center" },
      { title: "Contact Us", href: "" },
      { title: "Report Abuse", href: "" },
      { title: "Submit a Dispute", href: "" },
      { title: "Policies & Rules", href: "" }
    ],
  },
  {
    title: "Affiliate",
    navs: [
      { title: "Partnership center", href: "" },
      { title: "Marchant center", href: "" },
      { title: "Dispatch center", href: "" },
    ],
  },
];

let card = {
  title: "Pay With",
  cards: [
    { icon: <FaCcMastercard className="max-md:text-3xl text-3xl" /> },
    { icon: <FaCcVisa className="max-md:text-3xl text-3xl" /> },
    { icon: <FaCcDiscover className="max-md:text-3xl text-3xl" /> },
    { icon: <FaCcAmex className="max-md:text-3xl text-3xl" /> },
    { icon: <FaCcApplePay className="max-md:text-3xl text-3xl" /> },
    { icon: <FaCcJcb className="max-md:text-3xl text-3xl" /> },
    { icon: <FaCcPaypal className="max-md:text-3xl text-3xl" /> },
    { icon: <FaCcStripe className="max-md:text-3xl text-3xl" /> },
  ],
};

let socialHandle = {
  title: "News Letter",
  icons: [
  {
    name: "whatsapp",
    Icon: <IoLogoWhatsapp className=" max-sm:text-2xl text-2xl" />,
    href: "https://whatsapp.com/salepex",
  },
  {
    name: "facebook",
    Icon: <IoLogoFacebook className=" max-sm:text-2xl text-2xl" />,
    href: "https://facebook.com/salepex",
  },
  {
    name: "instagram",
    Icon: <IoLogoInstagram className=" max-sm:text-2xl text-2xl" />,
    href: "https://instagram.com/salepex",
  },
  {
    name: "twitter",
    Icon: <IoLogoTwitter className=" max-sm:text-2xl text-2xl" />,
    href: "https://twitter.com/salepex",
  },
  {
    name: "wechat",
    Icon: <IoLogoWechat className=" max-sm:text-2xl text-2xl" />,
    href: "https://wechat.com/salepex",
  },
]};

export { foot, card, socialHandle, service };
