import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getTransition } from "../utils/animationUtils";

const routes = [
  "/",
  "/login",
  "/signin-linkedin",
  "/welcome",
  "/user/profile",
  "/user/experience",
  "/user/projects",
  "/user/certifications",
  "/user/skills",
  "/user/education"
];

const getDirection = (prev, current, animateXAxis) => {
  if (animateXAxis) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    if (prev.search && current.pathname === prev.pathname) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      return `${current?.search}`.split("=")[1] - `${prev?.search}`.split("=")[1] < 0
        ? "left-right"
        : "right-left";
    }
    return "left-right";
  }
  return routes.findIndex((d) => d === current.pathname) -
    routes.findIndex((d) => d === prev.pathname) <
    0
    ? "top-bottom"
    : "bottom-tops";
};

const Animate = ({ children, animateXAxis }) => {
  const { prev, current } = useSelector(({ route }) => route);
  const direction = getDirection(prev, current, animateXAxis);

  const { initialPosition, animateTo } = getTransition(direction);
  return (
    <motion.div
      initial={initialPosition}
      animate={animateTo}
      transition={{
        ease: "easeInOut",
        duration: direction === "left-right" || direction === "right-left" ? 0.8 : 0.6
      }}>
      {children}
    </motion.div>
  );
};

export default Animate;
