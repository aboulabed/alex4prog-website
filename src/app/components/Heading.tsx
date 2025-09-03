import React from 'react';
import { ReactNode } from 'react';

import { motion } from 'motion/react';
type HeadingProps = {
    title: string;
    description?: ReactNode;
};
function Heading({
    title,
    description,
}: HeadingProps) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
                className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                {title}
            </motion.h2>

            <motion.p
                className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
            >
                {description}
            </motion.p>
        </div>
    )
}

export default Heading