import { useEffect, useRef } from 'react';

interface ScreenshotCarouselProps {
  images: string[];
  alt: string;
  labels: {
    previous: string;
    next: string;
    screenshots: string;
    screen: string;
  };
}

export default function ScreenshotCarousel({
  images,
  alt,
  labels,
}: ScreenshotCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function syncTrackHeight() {
    const track = trackRef.current;
    if (!track) return;

    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    const slides = Array.from(
      track.querySelectorAll<HTMLElement>('[data-slide]'),
    );
    const activeSlide = slides.reduce<HTMLElement | null>((closest, slide) => {
      if (!closest) return slide;
      const slideCenter =
        slide.getBoundingClientRect().left + slide.offsetWidth / 2;
      const closestCenter =
        closest.getBoundingClientRect().left + closest.offsetWidth / 2;
      return Math.abs(slideCenter - trackCenter) <
        Math.abs(closestCenter - trackCenter)
        ? slide
        : closest;
    }, null);

    if (activeSlide) {
      const height = `${activeSlide.offsetHeight}px`;
      if (track.style.height !== height) track.style.height = height;
    }
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    syncTrackHeight();
    const observer = new ResizeObserver(syncTrackHeight);
    observer.observe(track);
    track
      .querySelectorAll<HTMLElement>('[data-slide]')
      .forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  function scroll(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const firstSlide = track.querySelector<HTMLElement>('[data-slide]');
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * ((firstSlide?.offsetWidth ?? track.clientWidth) + gap),
      behavior: 'smooth',
    });
  }

  return (
    <div className="relative">
      <div
        aria-label={labels.screenshots}
        className="screenshot-track flex snap-x snap-mandatory items-start gap-3 overflow-x-auto scroll-smooth"
        onScroll={syncTrackHeight}
        ref={trackRef}
      >
        {images.map((image, index) => (
          <figure
            className="w-full shrink-0 snap-center overflow-hidden rounded-xl border border-ink/10 bg-white"
            data-slide
            key={image}
          >
            <img
              alt={`${alt} — ${labels.screen} ${index + 1}`}
              className="h-auto w-full object-contain"
              loading="lazy"
              onLoad={syncTrackHeight}
              src={image}
            />
          </figure>
        ))}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex justify-end gap-2">
          <button
            aria-label={labels.previous}
            className="carousel-button"
            onClick={() => scroll(-1)}
            type="button"
          >
            ←
          </button>
          <button
            aria-label={labels.next}
            className="carousel-button"
            onClick={() => scroll(1)}
            type="button"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
