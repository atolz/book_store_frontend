self.addEventListener("install", (e) => {
  console.log("service worker install🎊", e);
  clients.claim();
});
self.addEventListener("activate", (e) => {
  console.log("service worker activate", e);
  clients.claim();
});
self.addEventListener("push", (e) => {
  console.log("push event is", e.data);
  self.registration.showNotification("Books store push notification", { body: e.data.text(), requireInteraction: true });
  navigator.serviceWorker?.getRegistration()?.showNotification("TImer Servuce WORKER", { body: "This is the body" });
});

setInterval(() => {
  // console.log("running service worker--h", self);
  // self.registration.showNotification("Your Notification Title");
}, 4000);
