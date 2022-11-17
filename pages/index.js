import { Gallery, Hero } from "organisms/index";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    console.log(scrollYProgress);
  }, [ref]);

  return (
    <>
      {/* <motion.div
        initial={{
          opacity: 0,
          left: "-100%",
          scale: 0.6,
        }}
        animate={{
          opacity: 1,
          left: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          left: "100%",
          scale: 0.6,
        }}
        transition={{
          duration: 0.7,
        }}
      > */}

      <Hero />

      <Gallery />

      {/* </motion.div> */}
    </>
  );
}

export default Home;
