/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "1f7cfcf1d1608e993fcce4d103b4be3a"
  },
  {
    "url": "static/css/main.3e9b0772.chunk.css",
    "revision": "07997f9becbafaf04f5c7940973da986"
  },
  {
    "url": "static/js/2.debdf233.chunk.js",
    "revision": "4d8b1dd8ea675ca03a867cc668cbd111"
  },
  {
    "url": "static/js/main.7fbbd31b.chunk.js",
    "revision": "df2cdddb9f6842ffd49246d6f345b204"
  },
  {
    "url": "static/js/runtime-main.e43c6462.js",
    "revision": "1d1154a27825248a72242a2d7cfae328"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
