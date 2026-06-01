import { useEffect, useRef } from "react";

export default function ViewportVideo({ className, pauseAfterVh, src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let isIntersecting = true;
    let animationFrame = null;

    const playVideo = () => {
      if (document.hidden) return;
      video.play().catch(() => {});
    };

    const pauseVideo = () => {
      video.pause();
    };

    const shouldPauseForScroll = () =>
      typeof pauseAfterVh === "number" &&
      window.scrollY > window.innerHeight * pauseAfterVh;

    const syncPlayback = () => {
      if (document.hidden || !isIntersecting || shouldPauseForScroll()) {
        pauseVideo();
      } else {
        playVideo();
      }
    };

    const requestSync = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = null;
        syncPlayback();
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting && entry.intersectionRatio > 0.2;
        syncPlayback();
      },
      { threshold: [0, 0.2, 0.6] },
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", syncPlayback);
    window.addEventListener("scroll", requestSync, { passive: true });
    syncPlayback();

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      window.removeEventListener("scroll", requestSync);
      pauseVideo();
    };
  }, [pauseAfterVh]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
