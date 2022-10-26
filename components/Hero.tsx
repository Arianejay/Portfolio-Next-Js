import React from 'react'

// lib
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="snap-center">
      <div className="h-screen flex flex-col items-center text-center justify-center z-0">
        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-9xl md:text-8xl font-[Valencia] tracking-[0.5rem] mb-10"
        >
          Ariane Jay Tan
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-4xl font-[Avenir-Book-01] tracking-[0.3rem]"
        >
          <p className="p__first p">Web Developer</p>
          <p className="p__second p">Web Developer</p>
          <p className="p__third p">Web Developer</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
