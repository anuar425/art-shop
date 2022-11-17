import { useScroll, useTransform, motion } from "framer-motion";

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <>
      <section className="hero">
        <motion.div className="hero-background vh-100" style={{ y }}>
          <div className="hero-background-filter"></div>
        </motion.div>
        <div className="hero-content">
          <div className="hero-content-header bg-transparent"></div>
          <div className="hero-content-main text-light">
            <div className="container">
              <h1>Hello</h1>
              <p>
                I'm James Lewis, a multidisciplinary British artist. I'm best
                known for producing viral art videos, teaching workshops, and
                collaborating with the worlds biggest brands.
              </p>
            </div>
          </div>
          <div className="hero-content-footer">
            <div>
              <i class="bi bi-brush-fill"></i>
              <p>
                Live <br />
                Painting
              </p>
            </div>
            <div>
              <i class="bi bi-pencil-fill"></i>
              <p>
                Content
                <br /> Creation
              </p>
            </div>
            <div>
              <i class="bi bi-gear-fill"></i>
              <p>
                Product
                <br /> Development
              </p>
            </div>
            <div>
              <i class="bi bi-person-fill"></i>
              <p>
                Workshop
                <br /> Teaching
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
