"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Parallax Effect for Backgrounds
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".bg-fixed-parallax");
      parallaxElements.forEach((el) => {
        const scrollPosition = window.pageYOffset;
        el.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
}
