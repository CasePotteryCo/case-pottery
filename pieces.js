// =====================================================================
//  CASE POTTERY — all pieces live in this one file.
//
//  To add a piece: copy one { ... } block, paste it at the top of the
//  list, and change the details. Put the photo in the "images" folder.
//
//  id     short name used in the web address and QR code (lowercase,
//         dashes, no spaces). Don't change it after printing a sticker.
//  shop   which coffee shop carries it: the short name of a shop from
//         the SHOPS list below. Leave as "" to hide the line.
//  buy    the checkout link (from Stripe) for buying it online. A piece
//         with a link shows a "Buy online" button and appears on the
//         Shop Online page. Leave as "" if it's only sold in person.
//  sold   true hides the price and shows "Sold".
// =====================================================================

const SITE_URL = "https://casepotteryco.github.io/case-pottery/";

// Coffee shops that carry your pottery. Each piece page shows
// "Found exclusively at", then the shop's name, phone number and address.
const SHOPS = {
  "sample-coffee": {
    name: "Sample Coffee House",
    phone: "(555) 555-0123",
    address: "123 Main Street, Your Town"
  }
};

const PIECES = [
  {
    id: "sample-prayer-bowl",
    name: "Small Prayer Bowl",
    price: "$38",
    photo: "images/sample-bowl.svg",
    description: "A small prayer bowl for keeping written prayers close. Stoneware with a speckled blue glaze, about 4 inches across.",
    shop: "sample-coffee",
    buy: "sample",
    sold: false
  },
  {
    id: "sage-vase",
    name: "Sage Bud Vase",
    price: "$60",
    photo: "images/sample-vase.svg",
    description: "Tall stoneware vase in a soft sage glaze with a thin gold line. About 9 inches tall.",
    shop: "sample-coffee",
    buy: "sample",
    sold: false
  },
  {
    id: "cream-mug",
    name: "Cream Morning Mug",
    price: "$32",
    photo: "images/sample-mug.svg",
    description: "Everyday mug in a satin cream glaze with a raw clay foot. Holds about 12 oz.",
    shop: "sample-coffee",
    buy: "",
    sold: true
  },
  {
    id: "blue-bowl",
    name: "Blue Speckled Bowl",
    price: "$45",
    photo: "images/sample-bowl.svg",
    description: "Wheel-thrown stoneware bowl with a speckled blue glaze. About 6 inches across. Food and dishwasher safe.",
    shop: "sample-coffee",
    buy: "sample",
    sold: false
  }
];
