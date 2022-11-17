import { ShopGallery } from "@/components/organisms";
import { motion } from "framer-motion";

function Shop() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ShopGallery />
      </motion.div>
    </>
  );
}

export default Shop;
