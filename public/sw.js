self.addEventListener("install", (e) => {
  console.log("service worker install🎊", e);
  clients.claim();
});
self.addEventListener("activate", (e) => {
  console.log("service worker activate", e);
  clients.claim();
});

setInterval(() => {
  console.log("running service worker--h", self);
  // self.registration.showNotification("Your Notification Title");
}, 4000);
