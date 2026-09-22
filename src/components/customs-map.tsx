import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { useEffect, useRef } from "react";

import type { CustomsOffice } from "@/lib/site-data";

const TYPE_PATH: Record<string, string> = {
  sea: "M3 17c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1M5 15l1-5h8l1 5M8 10V7h4v3",
  land: "M2 14h10V7H2zM12 10h4l3 3v1h-7zM5.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  air: "M10 3l1.5 6.5L19 12l-7.5.5L10 19l-1.5-6.5L1 12l7.5-2.5z",
  rail: "M6 4h8v9H6zM6 13l-2 4M14 13l2 4M4 8h12",
};

function pin(office: CustomsOffice, active: boolean) {
  const type = office.types[0] ?? "land";
  const bg = active ? "#0b1f4b" : "#2b5cff";
  return L.divIcon({
    className: "",
    iconSize: [30, 38],
    iconAnchor: [15, 36],
    popupAnchor: [0, -32],
    html: `<div style="width:30px;height:38px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.35));transform:${
      active ? "scale(1.18)" : "scale(1)"
    };transform-origin:bottom center;transition:transform .15s ease">
      <svg viewBox="0 0 30 38" width="30" height="38" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 37C15 37 28 22.5 28 14A13 13 0 1 0 2 14c0 8.5 13 23 13 23z" fill="${bg}" stroke="#ffffff" stroke-width="2"/>
        <g transform="translate(5.5,4.5) scale(0.95)" fill="none" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="${TYPE_PATH[type] ?? TYPE_PATH["land"]}"/>
        </g>
      </svg>
    </div>`,
  });
}

export default function CustomsMap({
  offices,
  active,
  onSelect,
}: {
  offices: CustomsOffice[];
  active: CustomsOffice;
  onSelect: (o: CustomsOffice) => void;
}) {
  const el = useRef<HTMLDivElement | null>(null);
  const map = useRef<L.Map | null>(null);
  const markers = useRef<Record<string, L.Marker>>({});

  useEffect(() => {
    if (!el.current || map.current) return;
    const m = L.map(el.current, { scrollWheelZoom: false, zoomControl: true });
    map.current = m;
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
    }).addTo(m);

    offices.forEach((o) => {
      const mk = L.marker([o.lat, o.lng], { icon: pin(o, false), title: o.name })
        .addTo(m)
        .bindTooltip(`<strong>${o.name}</strong><br/>${o.city}`, { direction: "top", offset: [0, -30] })
        .on("click", () => onSelect(o));
      markers.current[o.name] = mk;
    });

    m.fitBounds(L.latLngBounds(offices.map((o) => [o.lat, o.lng] as [number, number])), {
      padding: [40, 40],
    });

    return () => {
      m.remove();
      map.current = null;
      markers.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    offices.forEach((o) => markers.current[o.name]?.setIcon(pin(o, o.name === active.name)));
    const m = map.current;
    if (m) {
      m.flyTo([active.lat, active.lng], Math.max(m.getZoom(), 9), { duration: 0.6 });
      markers.current[active.name]?.openTooltip();
    }
  }, [active, offices]);

  return <div ref={el} className="h-[520px] w-full" />;
}
