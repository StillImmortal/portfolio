import React from "react";
import { motion } from "framer-motion";

// Styles
import { styles } from "../styles/styles";
import { staggerContainer } from "../utils/motion";

export default function HOC(Component, idName) {
    return function () {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.25}}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        )
    }
}
