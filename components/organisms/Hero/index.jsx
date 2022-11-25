import { Image } from "@/components/atoms";
import { useScroll, useTransform, motion } from "framer-motion";

const heroFooterContent = [
  { icon: "bi bi-brush-fill", text: "Live\nPainting" },
  { icon: "bi bi-pencil-fill", text: "Content\nCreation" },
  { icon: "bi bi-gear-fill", text: "Product\nDevelopment" },
  { icon: "bi bi-person-fill", text: "Workshop\nTeaching" },
];

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <>
      {/* <section className="hero">
        <motion.img
          className="hero-background"
          style={{ y }}
          src="images/hero/2.jpeg"
        > */}
      {/* <div className="hero-background-filter"></div> */}
      {/* </motion.img>
        <div className="hero-content">
          <div className="hero-content-header"></div>

          <div className="hero-content-main text-light">
            <div className="px-5">
              <h1>Armat Bektas</h1>
              <p>
                Творения автора нового стиля в изобразительном искусстве, под
                названием «Арматлайн» хранятся в частных коллекциях и музеях
                Казахстана, США, Великобритании, Италии и России. В ближайшем
                будущем мастер планирует провести выставку во Франции.
              </p>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row justify-content-lg-around hero-content-footer">
              {heroFooterContent.map((item, key) => (
                <>
                  <div className="col-lg-auto col-6 text-center" key={key}>
                    <i className={item.icon}></i>
                    <p>{item.text}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <section className="new-hero position-relative">
        {/* <Image src="images/hero/3.jpg" className="w-100 h-100" /> */}
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center">
            <div className="col-5 offset-6 text-light new-hero-title">
              <h1 className="pb-lg-4 pb-md-2 text-uppercase">Armat Bektas</h1>
              <h3 className="mb-lg-4 mb-md-3 text-uppercase">
                Line philosophy
              </h3>
              {/* <p>
                The world of space of Armat Bektas is mostly linear, at the
                subconscious level he structures everything according to the
                principle of harmonizing reality of the surrounding world which
                is "nonlinear" that is to say unharmonized by consciousness.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
