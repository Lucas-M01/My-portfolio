import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  duration?: number
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
  duration = 0.6,
}: FadeInProps) {
  const directionMap = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { y: 0, x: 32 },
    right: { y: 0, x: -32 },
    none: { y: 0, x: 0 },
  }

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const reduceMotion = useReducedMotion()
  const hidden = { opacity: 0, ...directionMap[direction] }
  const animate = inView || reduceMotion ? { opacity: 1, y: 0, x: 0 } : hidden

  return (
    <motion.div
      className={className}
      ref={ref}
      data-reveal=""
      initial={hidden}
      animate={animate}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  )
}
