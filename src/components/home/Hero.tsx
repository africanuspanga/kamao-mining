"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDictionary, useLanguage } from "@/lib/i18n";
import { company } from "@/content/company";

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getIsMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
}

function subscribeIsMobile(callback: () => void) {
  const query = window.matchMedia("(max-width: 768px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function Hero() {
  const lang = useLanguage();
  const dict = useDictionary();
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );
  const isMobile = useSyncExternalStore(subscribeIsMobile, getIsMobile, () => false);

  useEffect(() => {
    if (videoRef.current) {
      if (prefersReducedMotion) {
        videoRef.current.pause();
      } else if (!isMobile) {
        videoRef.current.play().catch(() => {
          // Autoplay may be blocked; the static fallback remains visible.
        });
      }
    }
  }, [prefersReducedMotion, isMobile]);

  const showVideo = !prefersReducedMotion && !isMobile;

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-kamao-earth">
      {/* Static fallback image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${company.heroFallbackImage})` }}
        aria-hidden="true"
      />

      {/* Video layer */}
      {showVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={company.heroFallbackImage}
          aria-hidden="true"
        >
          <source src={company.heroVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-kamao-earth/70" />

      <Container className="relative z-10 pt-24 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-kamao-copper backdrop-blur-sm">
            {dict.home.hero.eyebrow}
          </span>
          <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-hero-lg">
            {dict.company.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-kamao-mist/90 md:text-xl">
            {dict.home.hero.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href={lang === "fr" ? "/fr/mineraux/" : "/minerals/"}
              className="group"
            >
              {dict.actions.exploreMinerals}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outlineWhite"
              size="lg"
              href={lang === "fr" ? "/fr/contact/" : "/contact/"}
            >
              {dict.actions.startConversation}
            </Button>
          </div>
          <p className="mt-12 text-sm font-medium uppercase tracking-widest text-kamao-sand/70">
            {dict.home.hero.supportingLine}
          </p>
        </div>
      </Container>
    </section>
  );
}
