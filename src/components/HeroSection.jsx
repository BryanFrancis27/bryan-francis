import Portrait from "./Portrait";
export default function HeroSection() {
  return <section id="hero" className="hero section-wrap" aria-labelledby="hero-heading">
    <div className="hero-copy"><p className="eyebrow">Software Developer / UI/UX Designer</p><p className="hero-greeting">Hi, I’m Bryan.</p>
    <h1 id="hero-heading">I design the <span>feeling.</span><br />I build the function.</h1>
    <p className="intro">Thoughtful interfaces. Practical software. I bring design and development together to create web experiences that feel right and work well.</p>
    <div className="actions"><a className="button button-primary hero-cta" href="#projects">View Projects <span aria-hidden="true">↗</span></a><a className="button button-secondary hero-contact-button" href="#contact">Contact Me</a></div></div>
    <Portrait variant="hero" /></section>;
}
