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

function pieceLink(piece) {
  return "piece.html?id=" + encodeURIComponent(piece.id);
}

function renderGallery(el) {
  if (!PIECES.length) {
    el.innerHTML = '<section class="showcase"><p>New pieces coming soon.</p></section>';
    return;
  }
  el.innerHTML = PIECES.map(p =>
    '<a class="showcase" href="' + pieceLink(p) + '">' +
      '<div class="frame reveal"><img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '" loading="lazy"></div>' +
      '<div class="caption reveal"><h2>' + esc(p.name) + "</h2>" + priceHtml(p) + "</div>" +
    "</a>"
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
  document.title = p.name + " | Case Pottery Co.";
  el.innerHTML = '<div class="piece">' +
    '<div class="frame"><img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '"></div>' +
    "<h1>" + esc(p.name) + "</h1>" + priceHtml(p) +
    "<p>" + esc(p.description) + "</p>" +
    '<a class="back" href="index.html">See all pottery</a></div>';
}
