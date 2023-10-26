import {motion} from 'framer-motion';

// eslint-disable-next-line react/prop-types
function AnimatedName({text}) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0,},
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.04 * i },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
    return (
      <motion.h1
        style={{ display: "flex", marginRight: '1rem' }}
        variants={container}
        initial="hidden"
        animate="visible"
        className='Welcome-Box-Title'
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
    );
}

export default AnimatedName;