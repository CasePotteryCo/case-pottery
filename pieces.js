// =====================================================================
//  CASE POTTERY — all pieces live in this one file.
//
//  To add a piece: copy one { ... } block, paste it at the top of the
//  list, and change the details. Put the photo in the "images" folder.
//
//  id     short name used in the web address and QR code (lowercase,
//         dashes, no spaces). Don't change it after printing a sticker.
//  sold   true hides the price and shows "Sold".
// =====================================================================

const SITE_URL = "https://casepotteryco.github.io/case-pottery/";

const PIECES = [
  {
    id: "blue-bowl",
    name: "Blue Speckled Bowl",
    price: "$45",
    photo: "images/sample-bowl.svg",
    description: "Wheel-thrown stoneware bowl with a speckled blue glaze. About 6 inches across. Food and dishwasher safe.",
    sold: false
  }
];
