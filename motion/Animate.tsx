import React, { ReactNode } from 'react'

// lib
import { motion } from 'framer-motion'

const animation = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

interface Props {
  children: ReactNode
}

const Animate: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 4 }}
      viewport={{ once: true }}
      variants={animation}
    >
      {children}
    </motion.div>
  )
}

export default Animate
