"use client";
import { useEffect, useRef, useState } from "react";
import { animate } from "motion";

// From The backend
const slides = [
    {
        image: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "We Build Smart Software",
        subtitle: "From idea to product, we help you grow",
    },
    {
        image: "https://media.istockphoto.com/id/2157499482/photo/close-up-of-a-businessman-working-on-a-laptop-computer-and-holding-and-looking-at-a-mobile.jpg?s=2048x2048&w=is&k=20&c=hSw38cc4n8UulrLGYHZgKhHYgRxFyKPeQ1rX07D83kU=",
        title: "Boost Your Business",
        subtitle: "Custom Web & Mobile Solutions",
    },
    {
        image: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Alex4Prog Team",
        subtitle: "Experienced Developers – On Demand",
    },
];

export default function MotionCarousel() {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(0);
    const currentImgRef = useRef(null);
    const prevImgRef = useRef(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);



    useEffect(() => {
        const timer = setInterval(() => {
            setPrev(current);
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    useEffect(() => {
        if (prevImgRef.current && currentImgRef.current) {
            // Move previous image to right
            animate(prevImgRef.current, { x: ["-100%", "0%"], opacity: [0, 1] }, { duration: 1 });

            // Move current image from left
            animate(currentImgRef.current, { x: ["0%", "100%"], opacity: [1, 0] }, { duration: 1 });
        }

        // Animate title and subtitle
        if (titleRef.current) {
            animate(
                titleRef.current,
                { opacity: [0, 1], y: [40, 0] },
                { duration: 0.6, delay: 0.2 }
            );
        }

        if (subtitleRef.current) {
            animate(
                subtitleRef.current,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.6, delay: 0.4 }
            );
        }
    }, [current]);

    return (
        <section className="relative w-full h-screen overflow-hidden" id="home">
            {/* Previous image */}
            <img
                ref={prevImgRef}
                src={slides[prev].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
            />

            {/* Current image */}
            <img
                ref={currentImgRef}
                src={slides[current].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover brightness-75 z-10"
            />

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white z-20">
                <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-4">
                    {slides[current].title}
                </h2>
                <p ref={subtitleRef} className="text-lg md:text-2xl">
                    {slides[current].subtitle}
                </p>
            </div>
        </section>
    );
}
