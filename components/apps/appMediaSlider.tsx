// components/apps/appMediaSlider.tsx
"use client";

import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

type Props = {
  images: string[];
  altBase?: string;
};

export default function AppMediaSlider({
  images,
  altBase = "App image",
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const splideRef = useRef<Splide | null>(null);

  // Always call useEffect, but only run Splide logic if images.length >= 2
  useEffect(() => {
    if (!rootRef.current) return;
    if (!images || images.length < 2) return;

    splideRef.current = new Splide(rootRef.current, {
      type: "loop",
      autoplay: true,
      interval: 3000,
      pauseOnHover: false,
      arrows: false,
      pagination: false,
      cover: true,
      heightRatio: 0.5,
      rewind: true,
    });

    splideRef.current.mount();

    return () => {
      try {
        splideRef.current?.destroy();
      } catch {}
      splideRef.current = null;
    };
  }, [images]);

  // 0 images → simple placeholder (no Splide)
  if (!images || images.length === 0) {
    return (
      <div className="relative h-[260px] w-full overflow-hidden rounded-lg bg-neutral-300 md:h-[340px] flex items-center justify-center text-neutral-600">
        No preview images available
      </div>
    );
  }

  // 1 image → render static (avoid mounting Splide at all)
  if (images.length === 1) {
    return (
      <div className="relative max-h-[400px] max-w-[400px] flex items-center justify-center">
        <Image
          src={images[0]}
          alt={`${altBase} 1`}
          width={120}
          height={120}
          className="object-contain object-center rounded-lg w-full h-full"
          sizes="100%"
          priority
        />
      </div>
    );
  }

  // 2+ images → render Splide
  return (
    <div ref={rootRef} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {images.map((src, i) => (
            <li className="splide__slide" key={i}>
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`${altBase} ${i + 1}`}
                  fill
                  className="object-contain object-center rounded-lg w-full h-full"
                  sizes="100%"
                  priority={i === 0} // prioritize first image
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
