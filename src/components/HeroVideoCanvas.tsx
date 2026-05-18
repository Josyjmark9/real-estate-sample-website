import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frameCount = 144;
const currentFrame = (index: number) => (`/penthhouse/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`);

export function HeroVideoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    // Desktop Full HD resolution for sharp canvas
    canvas.width = 1920;
    canvas.height = 1080;
    
    const images: HTMLImageElement[] = [];
    const video = { frame: 0 };
    
    // Preload images to prevent flickering
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
    }
    
    images[0].onload = render;
    
    function render() {
      if (images[video.frame]) {
        // We ensure image is loaded before drawing
        if (images[video.frame].complete) {
            context!.clearRect(0, 0, canvas!.width, canvas!.height);
            context!.drawImage(images[video.frame], 0, 0, canvas!.width, canvas!.height);
        }
      }
    }
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#video-scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // Smooth scrubbing
      }
    });
    
    tl.to(video, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-slate-900">
      <canvas ref={canvasRef} className="w-full h-full object-cover object-center translate-z-0" />
      {/* Subtle overlay gradients to ensure text remains readable */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  );
}
