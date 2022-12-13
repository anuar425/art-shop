import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
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
import { pageMotion } from "@/components/motion";

function MyApp({ Component, pageProps, router }) {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // useEffect(() => {
  //   console.log(router.route);
  // }, [router]);

  return (
    <Provider store={store}>
      {isBrowser ? (
        <>
          <Header />
          <LazyMotion features={domAnimation}>
            <AnimatePresence initial={true} exitBeforeEnter={true}>
              <m.div
                id="base-motion-div"
                key={router.route}
                variants={pageMotion}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                // transition={"transition"}
              >
                <Component {...pageProps} />
              </m.div>
              <Footer />
            </AnimatePresence>
          </LazyMotion>
        </>
      ) : null}
    </Provider>
  );
}

export default MyApp;
