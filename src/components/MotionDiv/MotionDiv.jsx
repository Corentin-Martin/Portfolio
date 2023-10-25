import { useRef } from 'react';
import './MotionDiv.scss'
import { animate, inView, motion } from 'framer-motion';

function MotionDiv({content}) {
    const box = useRef();
    inView(box, (info) => {
        const animation = animate(info.target, { opacity: 1 })
      
        // This will fire when the element leaves the viewport
        return (leaveInfo) => animation.stop()
      })

    return (
<motion.div ref={box}
initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
         className="MotionDiv">
{content}
         </motion.div>
    )
}

export default MotionDiv;