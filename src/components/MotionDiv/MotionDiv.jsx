import {  useRef } from 'react';
import './MotionDiv.scss'
import { motion, useInView} from 'framer-motion';

// eslint-disable-next-line react/prop-types
function MotionDiv({content, className, title, id}) {

    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.1, once: true});

    return (
        <motion.div
            style={{opacity : isInView ? 1 : 0, transition : "1.5s"}}
            className={`MotionDiv MotionDiv-${className}`}
            id={id}
            ref={ref}
        >
          {className !== "Welcome" && 
           <motion.h2 
           whileInView={{scale: 1, opacity: 1}} 
           initial={{scale: 3, opacity: 0}} 
           transition={{scale: {duration: 1}, opacity: {duration : 1} }}
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