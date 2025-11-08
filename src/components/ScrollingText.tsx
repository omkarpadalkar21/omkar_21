import { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollingText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const text = textRef.current;
    const clone = text.cloneNode(true) as HTMLElement;
    containerRef.current.appendChild(clone);

    const textWidth = text.offsetWidth;

    gsap.to([text, clone], {
      x: -textWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white py-6 transform -skew-y-3 my-20">
      <div ref={containerRef} className="flex whitespace-nowrap">
        <div ref={textRef} className="flex items-center space-x-8 pr-8">
          <span className="text-2xl md:text-4xl font-bold text-background">FRONTEND</span>
          <span className="text-2xl md:text-4xl font-bold text-muted">•</span>
          <span className="text-2xl md:text-4xl font-bold text-background">BACKEND</span>
          <span className="text-2xl md:text-4xl font-bold text-muted">•</span>
          <span className="text-2xl md:text-4xl font-bold text-background">DEVELOPER</span>
          <span className="text-2xl md:text-4xl font-bold text-muted">•</span>
          <span className="text-2xl md:text-4xl font-bold text-background">JAVASCRIPT</span>
          <span className="text-2xl md:text-4xl font-bold text-muted">•</span>
          <span className="text-2xl md:text-4xl font-bold text-background">FRONTEND</span>
          <span className="text-2xl md:text-4xl font-bold text-muted">•</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
