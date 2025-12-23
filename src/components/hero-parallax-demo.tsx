"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  // Row 1 (scrolls right to left)
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t1.png",
  },
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t2.png",
  },
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t3.png",
  },
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t4.png",
  },
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t5.png",
  },

  // Row 2 (scrolls left to right)
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t6.png",
  },
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t7.png",
  },
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t8.png",
  },
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t9.png",
  },
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t10.png",
  },

  // Row 3 (scrolls right to left)
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t11.png",
  },
  {
    title: "Testimonial",
    link: "#",
    thumbnail: "/assets/img/t12.png",
  },
];
