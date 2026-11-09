import React, { useState } from "react";

const jumpTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Hero() {
  const [light, setLight] = useState(false);
  const [active, setActive] = useState("home");

  const navigate = (id) => {
    setActive(id);
    if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    else jumpTo(id);
  };

  return (
    <section id="home" className={`portfolio-cinematic ${light ? "is-light" : ""}`} aria-label="Mohamed Amine Mtar portfolio introduction">
      <img className="portfolio-reference-scene" src="/portfolio-reference.webp" alt="" fetchPriority="high" />
      <img className="portfolio-walk-cycle" src="/portfolio-walk.gif" alt="Mohamed Amine walking toward the viewer in a navy suit" fetchPriority="high" />
      <div className="portfolio-scene-shade" />

      <a className="scene-hotspot brand-hotspot" href="#home" aria-label="Mohamed Amine Mtar — home" onClick={(e) => { e.preventDefault(); navigate("home"); }} />
      <nav className="scene-navigation" aria-label="Main navigation">
        {["home", "work", "about", "contact"].map((id) => (
          <button key={id} className={active === id ? "scene-nav-hit active" : "scene-nav-hit"} onClick={() => navigate(id)} aria-label={id[0].toUpperCase() + id.slice(1)} />
        ))}
      </nav>
      <button className="scene-theme-hit" onClick={() => setLight((v) => !v)} aria-label={light ? "Switch to dark appearance" : "Switch to light appearance"} />

      <div className="scene-cta-hitboxes">
        <button onClick={() => navigate("work")} aria-label="Explore my work" />
        <button onClick={() => navigate("about")} aria-label="Learn more about me" />
      </div>
      <div className="scene-tech-hitboxes" aria-label="Technology links">
        <a href="https://flutter.dev" target="_blank" rel="noreferrer" aria-label="Flutter" />
        <a href="https://react.dev" target="_blank" rel="noreferrer" aria-label="React" />
        <a href="https://developer.android.com" target="_blank" rel="noreferrer" aria-label="Android" />
        <a href="https://developer.apple.com" target="_blank" rel="noreferrer" aria-label="Apple platforms" />
        <a href="https://github.com/aminemtar" target="_blank" rel="noreferrer" aria-label="GitHub" />
        <a href="https://developer.mozilla.org" target="_blank" rel="noreferrer" aria-label="Web development" />
      </div>
      <div className="scene-scroll-hit" onClick={() => jumpTo("about")} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && jumpTo("about")} aria-label="Scroll to explore" />

      <div className="scene-mobile-copy">
        <p>HELLO, I’M</p>
        <h1>Mohamed Amine <span>Mtar</span></h1>
        <h2>Full-Stack Developer</h2>
        <p className="mobile-intro">Building innovative web &amp; mobile solutions with passion and creativity.</p>
        <div className="mobile-actions">
          <button onClick={() => navigate("work")}>Explore My Work ↗</button>
          <button onClick={() => navigate("about")}>Learn More ↓</button>
        </div>
      </div>
      <div className="scene-live-status"><i /> Available for opportunities</div>
    </section>
  );
}
