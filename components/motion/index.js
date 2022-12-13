export const pageMotion = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const galleryCardMotion = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  animated: (list) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: list * 0.2,
    },
  }),
  viewport: {
    once: true,
  },
};

export const heroTitleMotion = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

export const heroSubtitleMotion = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 0.5,
    },
  },
};

export const navMenuItemHover = {
  initial: {
    width: "0%",
  },
  hover: {
    width: "100%",
    transition: {
      duration: 0.6,
    },
  },
};
