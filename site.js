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
    el.innerHTML = "<p>New pieces coming soon.</p>";
    return;
  }
  el.innerHTML = '<div class="grid">' + PIECES.map(p =>
    '<a class="card" href="' + pieceLink(p) + '">' +
      '<img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '" loading="lazy">' +
      '<div class="info"><h2>' + esc(p.name) + "</h2>" + priceHtml(p) + "</div>" +
    "</a>"
  ).join("") + "</div>";
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
    '<img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '">' +
    "<h1>" + esc(p.name) + "</h1>" + priceHtml(p) +
    "<p>" + esc(p.description) + "</p>" +
    '<a class="back" href="index.html">See all pottery</a></div>';
}
