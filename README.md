# Case Pottery website

A tiny website: a gallery page, one page per piece, and a printable QR sticker sheet.

## Files
- `pieces.js` — **the only file you edit.** Every piece (name, price, photo, description) lives here, plus the site's web address.
- `images/` — photos and the logo (`logo.png` is the Case Pottery Co. logo).
- `index.html` — gallery of all pieces.
- `piece.html?id=...` — one piece's page. This is what the QR code opens.
- `stickers.html` — printable QR stickers for every piece. Add `?id=blue-bowl` to print just one.
- `style.css`, `site.js`, `qrcode.js` — behind-the-scenes; no need to touch.

## Updating with Claude
Just say things like:
- "Add a new mug, $30, here's the photo, glossy white glaze, holds 12oz"
- "Mark the blue bowl as sold"
- "Change the price of the green vase to $60"

Claude edits `pieces.js`, adds the photo to `images/`, and publishes.

## Rules of thumb
- Never change a piece's `id` after its sticker is printed, or the sticker will stop working.
- Set `SITE_URL` in `pieces.js` to the real address before printing stickers.
