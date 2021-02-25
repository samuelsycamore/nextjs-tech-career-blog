---
title: "Project Overview: NASA EONET Weather Tracker"
date: "2021-02-24"
desc: "React app that dynamically displays extreme weather data around the world."
---

<div>
  <a href="https://sycamore-weather-tracker.netlify.app" target="_blank">
    <Image
      src="../images/eonet-desktop.png"
      height={355}
      width={640}
      alt="EONET Screenshot"
    />
  </a>
</div>  

## Project Overview:

This project uses React to fetch data from NASA's Earth Observatory Natural Event Tracker (EONET) API then dynamically display that data on top of Google Maps.

The app renders icons on the map using the latitude and longitude of the corresponding natural event. Clicking on any icon will open a modal that provides further details.

Natural events tracked by this app include:

* Wildfires
* Floods
* Earthquakes
* Severe Storms
* Snow Storms
* Excessive Haze/Dust

## Built With:

* React
* EONET API
* Google Maps API