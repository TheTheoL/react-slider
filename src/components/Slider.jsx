import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { data } from '../data';
import styles from './styles.css';

export const Slider = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div>
            <motion.div
                ref={carousel}
                className='carousel'
                whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag='x' d
                    dragConstraints={{ right: 0, left: -width }}
                    className='inner-carousel'
                >
                    {data.map(data => {
                        return (
                            <motion.div className='item' key={data.id}>
                                <img src={data.image} alt="photo" />
                                <h3>{data.title}</h3>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>

    )
}


