'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

interface NaverMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
}

export function NaverMap({ lat, lng, zoom = 16, className }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.naver) return;

    const center = new window.naver.maps.LatLng(lat, lng);
    const map = new window.naver.maps.Map(mapRef.current, {
      center,
      zoom,
      draggable: false,
    });

    new window.naver.maps.Marker({
      position: center,
      map,
    });
  }, [isLoaded, lat, lng, zoom]);

  const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

  return (
    clientId && (
      <>
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`}
          strategy="afterInteractive"
          onLoad={() => setIsLoaded(true)}
        />
        <div ref={mapRef} className={className} />
      </>
    )
  );
}
