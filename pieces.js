// =====================================================================
//  CASE POTTERY — all pieces live in this one file.
//
//  To add a piece: copy one { ... } block, paste it at the top of the
//  list, and change the details. Put the photo in the "images" folder.
//
//  id     short name used in the web address and QR code (lowercase,
//         dashes, no spaces). Don't change it after printing a sticker.
//  shop   the coffee shop where it's sold. Shows "Found exclusively at ...".
//         Leave as "" to hide the line.
//  sold   true hides the price and shows "Sold".
// =====================================================================

const SITE_URL = "https://casepotteryco.github.io/case-pottery/";

const PIECES = [
  {
    id: "sage-vase",
    name: "Sage Bud Vase",
    price: "$60",
    photo: "images/sample-vase.svg",
    description: "Tall stoneware vase in a soft sage glaze with a thin gold line. About 9 inches tall.",
    shop: "Sample Coffee House",
    sold: false
  },
  {
    id: "cream-mug",
    name: "Cream Morning Mug",
    price: "$32",
    photo: "images/sample-mug.svg",
    description: "Everyday mug in a satin cream glaze with a raw clay foot. Holds about 12 oz.",
    shop: "Sample Coffee House",
    sold: true
  },
  {
    id: "blue-bowl",
    name: "Blue Speckled Bowl",
    price: "$45",
    photo: "images/sample-bowl.svg",
    description: "Wheel-thrown stoneware bowl with a speckled blue glaze. About 6 inches across. Food and dishwasher safe.",
    shop: "Sample Coffee House",
    sold: false
  }
];
