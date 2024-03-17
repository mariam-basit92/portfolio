'use client';

import { FC, ReactNode } from 'react'
import { motion } from "framer-motion"

const Section: FC<{ children: ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    className="flex flex-col items-start justify-start w-full h-full p-4"
  >
          {children}
  </motion.div>
)

export default Section;
