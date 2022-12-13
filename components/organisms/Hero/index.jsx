import { motion } from "framer-motion";
import { heroTitleMotion, heroSubtitleMotion } from "@/components/motion";

const heroFooterContent = [
  { icon: "bi bi-brush-fill", text: "Live\nPainting" },
  { icon: "bi bi-pencil-fill", text: "Content\nCreation" },
  { icon: "bi bi-gear-fill", text: "Product\nDevelopment" },
  { icon: "bi bi-person-fill", text: "Workshop\nTeaching" },
];

function Hero() {
  return (
    <>
      <motion.section
        initial={"hidden"}
        animate={"animate"}
        className="new-hero position-relative"
      >
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center">
            <div className="col-5 offset-6 text-light new-hero-title">
              <motion.h1
                variants={heroTitleMotion}
                className="pb-lg-4 pb-md-2 text-uppercase overflow-hidden"
              >
                Armat Bektas
              </motion.h1>
              <motion.h3
                variants={heroSubtitleMotion}
                className="mb-lg-4 mb-md-3 text-uppercase"
              >
                Line philosophy
              </motion.h3>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Hero;
