import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "@/styles/index.scss";
import { Footer, Header } from "@/components/organisms";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  motion,
  m,
} from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    console.log(router.route);
  }, [router]);

  return (
    <Provider store={store}>
      <Header />
      <LazyMotion features={domAnimation}>
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          <m.div
            key={router.route}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <Component {...pageProps} />
          </m.div>
          <Footer />
        </AnimatePresence>
      </LazyMotion>
    </Provider>
  );
}

export default MyApp;
