import { X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-[60] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(220 72% 20%) 0%, hsl(0 75% 48%) 60%, hsl(93 48% 50%) 100%)",
          }}
        >
          <div className="flex items-center justify-center px-4 py-2.5 text-center">
            <p className="text-xs sm:text-sm font-medium text-primary-foreground">
              Introducing NerdClip: our platform for smarter academic workflows is now live –{" "}
              <Link to="/products" className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity">
                Learn more
              </Link>
            </p>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 p-1 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
