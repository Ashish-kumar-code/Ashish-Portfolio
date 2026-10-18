import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

/**
 * Magic UI Dock — macOS-style interactive magnification floating dock
 */

const DEFAULT_MAGNIFICATION = 58;
const DEFAULT_DISTANCE = 110;
const DEFAULT_SIZE = 40;

export function Dock({ 
  children, 
  className = '', 
  magnification = DEFAULT_MAGNIFICATION, 
  distance = DEFAULT_DISTANCE 
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`mx-auto flex h-14 items-center gap-2 rounded-full border border-[var(--dock-border)] bg-[var(--dock-bg)] px-3 backdrop-blur-xl shadow-lg transition-colors ${className}`}
      style={{
        boxShadow: 'var(--dock-shadow)',
      }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            mouseX,
            magnification,
            distance,
          });
        }
        return child;
      })}
    </motion.div>
  );
}

export function DockIcon({ 
  children, 
  mouseX, 
  magnification = DEFAULT_MAGNIFICATION, 
  distance = DEFAULT_DISTANCE, 
  className = '', 
  label = '', 
  onClick, 
  href, 
  target, 
  rel,
  ariaLabel
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const distanceCalc = useTransform(mouseX || { get: () => Infinity }, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [DEFAULT_SIZE, magnification, DEFAULT_SIZE]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 170,
    damping: 12,
  });

  const Component = href ? motion.a : motion.button;

  return (
    <div className="relative flex items-center justify-center">
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && label && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.9 }}
            animate={{ opacity: 1, y: -8, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--foreground)] px-2 py-0.5 text-[10px] font-semibold text-[var(--background)] shadow-md"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>

      <Component
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={ariaLabel || label}
        style={{ width, height: width }}
        className={`flex aspect-square items-center justify-center rounded-full text-[var(--foreground)] hover:text-[var(--accent)] hover:bg-[var(--card-hover)] transition-colors cursor-pointer focus:outline-none ${className}`}
      >
        <div className="flex items-center justify-center text-current pointer-events-none">
          {children}
        </div>
      </Component>
    </div>
  );
}

export function DockSeparator({ className = '' }) {
  return (
    <div className={`h-6 w-[1px] bg-[var(--border)] opacity-80 mx-0.5 ${className}`} />
  );
}
