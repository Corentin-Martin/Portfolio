
import './MotionDiv.scss'
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
function MotionDiv({content, className, title}) {


    return (
        <motion.div 
            initial={{ opacity: 0, scale : 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{opacity: {duration: 1}, scale: {duration: 1}}}
            viewport={{ once: true, amount: 1 }}
            className={`MotionDiv MotionDiv-${className}`}
        >
          {className !== "Welcome" && 
           <motion.h2 
           whileInView={{scale: 1, opacity: 1}} 
           initial={{scale: 3, opacity: 0}} 
           transition={{scale: {duration: 2}, color: {duration: 2}, opacity: {duration : 2} }}
           viewport={{ once: true }}
           className='MotionDiv-Title'
       >
           {title}
       </motion.h2>}
         
          {content}
          </motion.div>
    )
}

export default MotionDiv;