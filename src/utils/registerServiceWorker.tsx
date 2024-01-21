export const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
        await Notification.requestPermission((p)=>{
          console.log("permisiion",p)
        })
        registration.showNotification('test message')
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  } else {
    console.log("Browser does not support Service Worker");
  }
};
