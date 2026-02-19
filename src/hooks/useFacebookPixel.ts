// src/hooks/useFacebookPixel.ts
import { useEffect } from "react";

const PIXEL_ID = "1249761577087950";

interface PixelOptions {
  eventName?: string;
  eventParams?: Record<string, any>;
}

export function useFacebookPixel({ eventName, eventParams }: PixelOptions = {}) {
  useEffect(() => {
    // If pixel already exists → just track
    if (window.fbq) {
      if (eventName) {
        window.fbq("track", eventName, eventParams || {});
      }
      return;
    }

    // 🔥 Official Meta Base Code
    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;

      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };

      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];

      t = b.createElement(e);
      t.async = true;
      t.src = v;

      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);

    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    // Initialize once
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");

    // Track additional event if provided
    if (eventName) {
      window.fbq("track", eventName, eventParams || {});
    }

  }, [eventName, eventParams]);
}