import { ShopImage } from "@/components/organisms";
import { motion } from "framer-motion";

function SelectedImage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ShopImage />
      </motion.div>
    </>
  );
}

export default SelectedImage;
