#!/usr/bin/env node
// Pings IndexNow (Bing/Yandex) with the URLs below.
// Usage:  node scripts/indexnow-ping.mjs
// Run after each production deploy. Add more URLs to URLS as new pages ship.

const HOST = "www.overleaf.agency"
const KEY = process.env.INDEXNOW_KEY || "d90242329a4a4f3db82d67bdb02afc14"
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/case-studies`,
  `https://${HOST}/sitemap.xml`,
]

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URLS,
}

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
})

console.log(`IndexNow → ${res.status} ${res.statusText}`)
if (!res.ok) {
  console.error(await res.text())
  process.exit(1)
}
