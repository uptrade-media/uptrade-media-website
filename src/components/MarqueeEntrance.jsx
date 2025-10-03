function MarqueeEntrance({ children }) {
  const isMobile = useIsMobile();            // only animate on mobile
  const prefersReduced = useReducedMotion(); // respect accessibility

  if (prefersReduced) return <>{children}</>;

  return (
    <motion.div
      initial={isMobile ? { x: "100%" } : false} // false = no initial animation
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
