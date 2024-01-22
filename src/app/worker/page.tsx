"use client";
import { registerServiceWorker } from "@/utils/registerServiceWorker";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ServciceWorkerPage = () => {
  const [sub, setSub] = useState({});

  const subToPushs = async () => {
    if (!("PushManager" in window)) {
      // Push isn't supported on this browser, disable or hide UI.
      toast.error("Browser does not support push notification");
      return;
    }

    const registration = await navigator.serviceWorker.ready;
    if (registration) {
      const sub = await registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: "BOJfK4gnC4ap_tTcdrAEvS_4TWivJE65-ZfJK0EpjIHEUiv8DsUv4atrQeyxoZpBQfsOLkjx7FyCRUiVbpK2H-c" });
      setSub(sub.toJSON());
      console.log("in sub FUnction");
      toast.success("Subed to push notification");
    } else {
      toast.error("No service worker yet");
    }
  };

  useEffect(() => {
    console.log("load");
    registerServiceWorker();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      ServciceWorkerPage
      <button
        onClick={async () => {
          console.log((await navigator.serviceWorker?.getRegistration())?.showNotification("Hey there", { body: "This is the body" }));
        }}
      >
        Show Notification
      </button>
      <button className="w-max p-2 rounded-full bg-green-500" onClick={subToPushs}>
        Subscribe
      </button>
      <div className=" min-w-0 break-words  text-wrap overflow-hidden">
        {/* Subscripbiont is::{JSON.stringify(sub)} */}
        <div className="">Endpoint: {sub?.endpoint}</div>
        <div>p256dh: {sub?.keys?.p256dh}</div>
        <div>auth: {sub?.keys?.auth}</div>
      </div>
      <button
        onClick={() => {
          setTimeout(async () => {
            (await navigator.serviceWorker?.getRegistration())?.showNotification("TImer Servuce WORKER", { body: "This is the body" });
          }, 5000);
        }}
      >
        WIth timer Service worker
      </button>
    </div>
  );
};

export default ServciceWorkerPage;
