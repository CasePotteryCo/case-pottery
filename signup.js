// Email signup box ("first dibs on new pieces"), shown above the footer on every page.
// To turn it on, paste the Kit form number between the quotes below.
const KIT_FORM_ID = "";

(function () {
  const footer = document.querySelector("footer");
  if (!KIT_FORM_ID || !footer) return;
  const box = document.createElement("section");
  box.className = "signup";
  box.innerHTML =
    '<h2>Get first dibs on new pieces</h2>' +
    '<p>New work goes to the list a few days before it hits the shops, plus the occasional peek inside the studio.</p>' +
    '<form method="post" target="kit-frame" action="https://app.kit.com/forms/' + encodeURIComponent(KIT_FORM_ID) + '/subscriptions">' +
      '<label class="visually-hidden" for="signup-email">Email address</label>' +
      '<input id="signup-email" type="email" name="email_address" placeholder="Your email" required autocomplete="email">' +
      '<button type="submit">Sign me up</button>' +
    '</form>' +
    '<p class="signup-done" hidden>Thanks! Check your email and tap the link to confirm.</p>' +
    '<iframe name="kit-frame" title="Signup" hidden></iframe>';
  footer.parentNode.insertBefore(box, footer);
  const form = box.querySelector("form");
  form.addEventListener("submit", function () {
    setTimeout(function () { form.hidden = true; box.querySelector(".signup-done").hidden = false; }, 300);
  });
})();
