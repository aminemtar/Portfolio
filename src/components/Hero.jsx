import React, { useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const jumpTo = (id) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  const [light, setLight] = useState(false);
  const [active, setActive] = useState("home");

  const navigate = (id) => {
    setActive(id);
    jumpTo(id);
  };

  return (
    <section
      id="home"
      className={`portfolio-cinematic ${light ? "is-light" : ""}`}
      aria-label="Mohamed Amine Mtar — Full-Stack Developer"
    >
      <img
        className="portfolio-reference-scene"
        src="/portfolio-reference.webp"
        alt=""
        fetchPriority="high"
        draggable="false"
      />
      <div className="portfolio-scene-shade" aria-hidden="true" />
      <img
        className="portfolio-walk-cycle"
        src="/portfolio-walk.gif"
        alt="Animated portrait of Mohamed Amine walking forward in a navy suit"
        fetchPriority="high"
        draggable="false"
      />

      {/* Desktop controls sit precisely over the matching controls in the approved artwork. */}
      <a className="scene-hotspot brand-hotspot" href="#home" aria-label="Mohamed Amine Mtar — Home" onClick={(e) => { e.preventDefault(); navigate("home"); }} />
      <nav className="scene-navigation" aria-label="Main navigation">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={active === id ? "scene-nav-hit active" : "scene-nav-hit"}
            onClick={() => navigate(id)}
            aria-label={label}
            aria-current={active === id ? "page" : undefined}
          />
        ))}
      </nav>
      <button
        type="button"
        className="scene-theme-hit"
        onClick={() => setLight((value) => !value)}
        aria-label={light ? "Switch to dark appearance" : "Switch to light appearance"}
        aria-pressed={light}
      />
      <div className="scene-cta-hitboxes">
        <button type="button" onClick={() => navigate("work")} aria-label="Explore my work" />
        <button type="button" onClick={() => navigate("about")} aria-label="Learn more about me" />
      </div>
      <div className="scene-tech-hitboxes" aria-label="Technology links">
        <a href="https://flutter.dev" target="_blank" rel="noreferrer" aria-label="Flutter" />
        <a href="https://react.dev" target="_blank" rel="noreferrer" aria-label="React" />
        <a href="https://developer.android.com" target="_blank" rel="noreferrer" aria-label="Android" />
        <a href="https://developer.apple.com" target="_blank" rel="noreferrer" aria-label="Apple platforms" />
        <a href="https://github.com/aminemtar" target="_blank" rel="noreferrer" aria-label="GitHub" />
        <a href="https://developer.mozilla.org" target="_blank" rel="noreferrer" aria-label="Web development" />
      </div>
      <button className="scene-scroll-hit" type="button" onClick={() => navigate("about")} aria-label="Scroll to explore" />

      {/* Mobile gets real HTML controls instead of relying on text baked into the desktop artwork. */}
      <div className="scene-mobile-header">
        <a href="#home" onClick={(event) => { event.preventDefault(); navigate("home"); }} className="mobile-brand" aria-label="Mohamed Amine Mtar home">
          <span className="mobile-brand-mark">M<span>.</span></span>
          <span>Mohamed Amine<br />MTAR</span>
        </a>
        <nav aria-label="Mobile navigation">
          {sections.slice(1).map(({ id, label }) => (
            <button key={id} type="button" onClick={() => navigate(id)}>{label}</button>
          ))}
        </nav>
      </div>
      <div className="scene-mobile-copy">
        <p className="mobile-eyebrow">HELLO, I’M</p>
        <h1>Mohamed Amine <span>Mtar</span></h1>
        <h2>Full-Stack Developer</h2>
        <p className="mobile-intro">Building innovative web &amp; mobile solutions with passion and creativity.</p>
        <div className="mobile-actions">
          <button type="button" onClick={() => navigate("work")}>Explore My Work <span aria-hidden="true">↗</span></button>
          <button type="button" onClick={() => navigate("about")}>Learn More <span aria-hidden="true">↓</span></button>
        </div>
      </div>
      <div className="scene-mobile-stats" aria-label="Professional highlights">
        <div><strong>2+ Years</strong><span>Experience</span></div>
        <div><strong>6+ Apps</strong><span>Delivered</span></div>
        <div><strong>ESPRIT</strong><span>Graduate</span></div>
      </div>
      <div className="scene-live-status"><i /> Available for opportunities</div>
    </section>
  );
}
