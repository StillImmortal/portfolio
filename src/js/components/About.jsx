import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion"

// Constants
import { services } from "../../constants/constants";
import { fadeIn, textVariant } from "../../utils/motion";

// Styles
import { styles } from "../../styles/styles.js";
 
export default function About() {
    return (
        <section className="about">
            <motion.div className="about__container" variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
        </section>
    )
}