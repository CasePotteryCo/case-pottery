// Builds the pages from the PIECES list in pieces.js. No need to edit this.

function esc(text) {
  const div = document.createElement("div");
  div.textContent = text == null ? "" : String(text);
  return div.innerHTML;
}

function priceHtml(piece) {
  return piece.sold
    ? '<span class="sold">Sold</span>'
    : '<span class="price">' + esc(piece.price) + "</span>";
}

function findShop(piece) {
  return (typeof SHOPS !== "undefined" && SHOPS[piece.shop]) || null;
}

// Short version for the gallery: just the shop's name.
function shopHtml(piece) {
  const shop = findShop(piece);
  return shop
    ? '<div class="shop">Found exclusively at <span>' + esc(shop.name) + "</span></div>"
    : "";
}

// Full version for a piece's own page: name, phone (tap to call) and address (tap for map).
function shopDetailsHtml(piece) {
  const shop = findShop(piece);
  if (!shop) return "";
  let html = '<div class="shop shop-full">Found exclusively at<strong>' + esc(shop.name) + "</strong>";
  if (shop.phone) {
    html += '<a href="tel:' + esc(shop.phone.replace(/[^0-9+]/g, "")) + '">' + esc(shop.phone) + "</a>";
  }
  if (shop.address) {
    html += '<a href="https://maps.google.com/?q=' + encodeURIComponent(shop.address) +
      '" target="_blank" rel="noopener">' + esc(shop.address) + "</a>";
  }
  return html + "</div>";
}

// "Buy online" button. Shows only when the piece has a checkout link and isn't sold.
function buyHtml(piece) {
  if (piece.sold || !piece.buy) return "";
  if (!/^https:\/\//.test(piece.buy)) {
    return '<span class="buy disabled">Online checkout coming soon</span>';
  }
  return '<a class="buy" href="' + esc(piece.buy) + '" target="_blank" rel="noopener">Buy online</a>';
}

// "How to use" button for prayer bowls: shows on any piece whose name or
// description mentions "prayer bowl". The instructions live in prayer-bowl.html.
function howToHtml(piece) {
  const text = (piece.name || "") + " " + (piece.description || "");
  return /prayer[\s-]*bowl/i.test(text)
    ? '<a class="howto" href="prayer-bowl.html">How to use your prayer bowl</a>'
    : "";
}

function forSaleOnline(piece) {
  return piece.buy && !piece.sold;
}

function pieceLink(piece) {
  return "piece.html?id=" + encodeURIComponent(piece.id);
}

// onlineOnly: true for the Shop Online page, which lists only pieces you can buy online.
function renderGallery(el, onlineOnly) {
  const list = onlineOnly ? PIECES.filter(forSaleOnline) : PIECES;
  if (!list.length) {
    el.innerHTML = '<section class="showcase"><p class="empty">' +
      (onlineOnly ? "Nothing available online right now. Check back soon." : "New pieces coming soon.") +
      "</p></section>";
    return;
  }
  el.innerHTML = list.map(p =>
    '<section class="showcase">' +
      '<a class="showcase-link" href="' + pieceLink(p) + '">' +
        '<div class="frame reveal"><img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '" loading="lazy"></div>' +
        '<div class="caption reveal"><h2>' + esc(p.name) + "</h2>" + priceHtml(p) +
          (onlineOnly ? "" : shopHtml(p)) + "</div>" +
      "</a>" +
      ((onlineOnly && buyHtml(p)) || howToHtml(p)
        ? '<div class="actions reveal">' + (onlineOnly ? buyHtml(p) : "") + howToHtml(p) + "</div>"
        : "") +
    "</section>"
  ).join("");
  revealOnScroll();
}

// Fades each piece in as it scrolls into view.
function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(i => i.classList.add("shown"));
    return;
  }
  const watcher = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("shown"); watcher.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach(i => watcher.observe(i));
}

function renderPiece(el) {
  const id = new URLSearchParams(location.search).get("id");
  const p = PIECES.find(x => x.id === id);
  if (!p) {
    el.innerHTML = '<div class="piece"><h1>Piece not found</h1>' +
      '<p>This one may have found a new home.</p>' +
      '<a class="back" href="index.html">See all pottery</a></div>';
    return;
  }
  // Per-piece title and description, so each piece can show up in Google on its own
  const summary = "Handmade " + p.name.toLowerCase() + " by Case Pottery Co. " + p.description.replace(/\s+/g, " ").trim();
  document.title = p.name + " | Handmade by Case Pottery Co.";
  const setMeta = (sel, attr, val) => { const m = document.querySelector(sel); if (m) m.setAttribute(attr, val); };
  setMeta('meta[name="description"]', "content", summary.slice(0, 160));
  setMeta('meta[property="og:title"]', "content", document.title);
  setMeta('meta[property="og:description"]', "content", summary.slice(0, 200));
  setMeta('link[rel="canonical"]', "href", SITE_URL + "piece.html?id=" + encodeURIComponent(p.id));
  el.innerHTML = '<div class="piece">' +
    '<div class="frame"><img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '"></div>' +
    "<h1>" + esc(p.name) + "</h1>" + priceHtml(p) + buyHtml(p) +
    "<p>" + esc(p.description) + "</p>" + howToHtml(p) + shopDetailsHtml(p) +
    '<a class="back" href="index.html">See all pottery</a></div>';
}
