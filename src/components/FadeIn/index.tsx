/* eslint-disable prettier/prettier */
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

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

    const initial = { opacity: 0, ...directionMap[direction] }
    const animate = { opacity: 1, y: 0, x: 0 }

    return (
        <motion.div
            className={className}
            initial={initial}
            whileInView={animate}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
        >
            {children}
        </motion.div>
    )
}
