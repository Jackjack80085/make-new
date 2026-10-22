import React, { useEffect, useRef } from 'react';
import artwork from '../assets/hero-butterfly.svg?raw';

/** One clock drives forward travel, banking, lift and wing hinges. */
export function ButterflyFlight() {
  const flightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const flight = flightRef.current;
    const bounds = flight?.parentElement;
    if (!flight || !bounds) return;
    const body = flight.querySelector<HTMLElement>('.hero-butterfly-bank')!;
    const near = flight.querySelector<SVGGElement>('[data-wing="near"]')!;
    const far = flight.querySelector<SVGGElement>('[data-wing="far"]')!;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = bounds.clientWidth;
    let height = bounds.clientHeight;
    let frame = 0;
    let previous = 0;
    let elapsed = 0;
    let wingPhase = 0;
    let x = -75;
    let visible = true;

    const resize = new ResizeObserver(() => {
      width = bounds.clientWidth;
      height = bounds.clientHeight;
    });
    resize.observe(bounds);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(bounds);

    const tick = (now: number) => {
      const dt = previous ? Math.min((now - previous) / 1000, .05) : 0;
      previous = now;
      if (preference.matches) {
        flight.style.transform = `translate3d(${width * .65}px,${height * .27}px,0)`;
        flight.style.opacity = '.52';
        body.style.transform = 'rotate(0deg)';
        near.removeAttribute('transform');
        far.removeAttribute('transform');
      } else if (visible && !document.hidden) {
        elapsed += dt;
        const t = elapsed;
        // Always advances; gentle speed variation never arrests forward travel.
        const speed = (width < 640 ? 32 : 48) * (1 + .14 * Math.sin(t * .77) + .08 * Math.sin(t * 1.63));
        x += speed * dt;
        if (x > width + 75) x = -75;
        const amplitude = Math.min(height * .055, 42);
        const y = height * .27 + amplitude * Math.sin(t * .72)
          + amplitude * .35 * Math.sin(t * 1.37 + .8);
        const slope = amplitude * .72 * Math.cos(t * .72)
          + amplitude * .35 * 1.37 * Math.cos(t * 1.37 + .8);
        const bank = Math.max(-14, Math.min(14, Math.atan2(slope, speed) * 180 / Math.PI * .35));
        // Flutter bursts soften into brief open-wing glides rather than a metronomic flap.
        const activity = .5 + .5 * Math.sin(t * 1.15 + .8);
        const flutter = .3 + .7 * activity * activity;
        wingPhase += dt * (3.5 + 1.5 * activity) * Math.PI * 2;
        const fold = (phase: number) => 1 - .76 * flutter * Math.pow((1 - Math.cos(phase)) / 2, 1.2);
        // The actual attachment in the reference wing's local coordinates is (55,680).
        near.setAttribute('transform', `translate(55 680) scale(${fold(wingPhase)} 1) translate(-55 -680)`);
        far.setAttribute('transform', `translate(55 680) scale(${fold(wingPhase - .22)} 1) translate(-55 -680)`);
        const lift = Math.sin(wingPhase) * flutter * .9;
        flight.style.transform = `translate3d(${x}px,${y + lift}px,0)`;
        flight.style.opacity = String(.52 * Math.min(1, Math.max(0, (x + 65) / 50), Math.max(0, (width + 65 - x) / 50)));
        body.style.transform = `rotate(${bank}deg)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); };
  }, []);

  return (
    <div ref={flightRef} className="hero-butterfly-flight" aria-hidden="true">
      <div className="hero-butterfly-bank">
        <div className="hero-butterfly-artwork" dangerouslySetInnerHTML={{ __html: artwork }} />
      </div>
    </div>
  );
}
