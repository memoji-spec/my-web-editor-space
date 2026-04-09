import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100] bg-card border border-border rounded-xl shadow-2xl p-6"
        >
          <div className="flex items-start gap-3">
            <Cookie className="text-brand mt-0.5 shrink-0" size={20} />
            <div>
              <h4 className="font-semibold text-sm text-foreground">Cookie Settings</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              </p>
              <div className="flex gap-2 mt-4">
                <Button size="sm" onClick={accept} className="bg-brand text-primary-foreground hover:bg-brand/90 rounded-lg text-xs">
                  Accept All
                </Button>
                <Button size="sm" variant="outline" onClick={decline} className="rounded-lg text-xs">
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
