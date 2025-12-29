import { useEffect, useRef } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video plays automatically and loops
      video.play().catch((error) => {
        console.warn('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Background.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      </video>
      
      {/* Overlay to ensure content readability */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[0.5px]" />
      
      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/30" />
    </div>
  );
};

export default VideoBackground;