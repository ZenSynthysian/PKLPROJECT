import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function CursorAnimation() {
    const animationFrameRef = useRef();
    const cursorPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        gsap.set('.curs-animate', { xPercent: -50, yPercent: -50 });
        gsap.set('.curs-animate-high', { xPercent: -50, yPercent: -50 });

        // GSAP tweens
        const xTo = gsap.quickTo('.curs-animate', 'x', { duration: 0.17, ease: 'power1' });
        const yTo = gsap.quickTo('.curs-animate', 'y', { duration: 0.17, ease: 'power1' });
        const xToHigh = gsap.quickTo('.curs-animate-high', 'x', { duration: 0.09, ease: 'power1' });
        const yToHigh = gsap.quickTo('.curs-animate-high', 'y', { duration: 0.09, ease: 'power1' });

        // Update cursor position
        const updateCursor = () => {
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;
            xTo(cursorPos.current.x + scrollX);
            yTo(cursorPos.current.y + scrollY);
            xToHigh(cursorPos.current.x + scrollX);
            yToHigh(cursorPos.current.y + scrollY);
            animationFrameRef.current = requestAnimationFrame(updateCursor);
        };

        const handleMouseMove = (e) => {
            cursorPos.current.x = e.clientX;
            cursorPos.current.y = e.clientY;
            if (!animationFrameRef.current) {
                animationFrameRef.current = requestAnimationFrame(updateCursor);
            }
        };

        // Handle visibility change
        const handleVisibilityChange = () => {
            if (document.hidden) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            } else {
                // Restart animation if needed
                if (cursorPos.current.x !== 0 || cursorPos.current.y !== 0) {
                    animationFrameRef.current = requestAnimationFrame(updateCursor);
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    return (
        <>
            <div className="bg-pink-800 rounded-full absolute h-2 w-2 curs-animate-high pointer-events-none"></div>
            <div className="curs-animate absolute pointer-events-none border border-pink-800 rounded-full h-6 w-6 z-30 flex justify-center items-center overflow-visible"></div>
        </>
    );
}

export default CursorAnimation;
