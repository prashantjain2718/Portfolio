import './Hero.css'

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-left">
            <h1>Hello, I am Prashant Jain</h1>
            <p>I am a Software Developer</p>
            <a href="#projects" className="btn-primary">View My Work</a>
        </div>
        <div className="hero-right">
            <img src="public/my_photo.jpg" alt="my photo" />
        </div>
      </section>
    </>
  );
}

