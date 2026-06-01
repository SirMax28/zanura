import { useEffect, useRef } from "react";

export default function ViewportVideo({ className, src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const playVideo = () => {
      if (document.hidden) return;
      video.play().catch(() => {});
    };

    const pauseVideo = () => {
      video.pause();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
      { threshold: [0, 0.2, 0.6] },
    );

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseVideo();
      } else if (video.getBoundingClientRect().bottom > 0 && video.getBoundingClientRect().top < window.innerHeight) {
        playVideo();
      }
    };

    observer.observe(video);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      pauseVideo();
    };
  }, []);

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
