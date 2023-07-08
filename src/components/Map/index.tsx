"use client";
import { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";

export const initMap = (
  container: HTMLDivElement,
  coords: [number, number]
): Map => {
  return new Map({
    container,
    style: "mapbox://styles/mapbox/light-v11",
    pitchWithRotate: false,
    center: coords,
    zoom: 10,
    accessToken:
      "pk.eyJ1IjoiaXRzbWVsZW9uYXJkbyIsImEiOiJja3ZzcmpoMTU0czBtMm9tbHZhbTMzYTFrIn0.fgwmkMuUlIaqcnXtQjbWfQ",
    doubleClickZoom: false,
  });
};

export default function MapView() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      initMap(mapRef.current, [-77.036526, -12.062106]);
    }
  }, []);

  return <div ref={mapRef} className="map w-full h-full" />;
}
