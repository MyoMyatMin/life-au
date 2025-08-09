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

export default function AppMediaSlider({ images, altBase = "App image" }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const splideRef = useRef<Splide | null>(null);

  // 0 images → simple placeholder (no Splide)
  if (!images || images.length === 0) {
    return (
      <div className="relative h-[260px] w-full overflow-hidden rounded-lg bg-neutral-300 md:h-[340px] flex items-center justify-center text-neutral-600">
        No image available
      </div>
    );
  }

  // 1 image → render static (avoid mounting Splide at all)
  if (images.length === 1) {
    return (
      <div className="relative h-[260px] w-full md:h-[340px]">
        <Image
          src={images[0]}
          alt={`${altBase} 1`}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>
    );
  }

  // 2+ images → mount Splide on the actual element via ref
  useEffect(() => {
    if (!rootRef.current) return;

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
  }, []);

  return (
    <div ref={rootRef} className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {images.map((src, i) => (
            <li className="splide__slide" key={i}>
              <div className="relative h-[260px] w-full md:h-[340px]">
                <Image
                  src={src}
                  alt={`${altBase} ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
