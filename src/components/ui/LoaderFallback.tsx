import { Loader, Text } from "@mantine/core";
import { motion } from "framer-motion";

const LoaderFallback = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="loader-container"
  >
    <Loader size="lg" />
    <Text>Loading...</Text>
  </motion.div>
);

export default LoaderFallback;
