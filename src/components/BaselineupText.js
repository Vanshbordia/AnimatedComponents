"use client"
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const validEaseTypes = [
  'linear',
  'easeIn',
  'easeOut',
  'easeInOut',
];

BaselineupText.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  lineHeight: PropTypes.number,
  easeType: PropTypes.oneOf(validEaseTypes),
};

export default function BaselineupText({ children, className, lineHeight, easeType }) {

  const animateddiv = {
    visible: { opacity: 1 },
    hidden: { opacity: 1 },
  };

  const animatedcharacters = {
    visible: {
      y: 0,

    },
    hidden: {
      y: lineHeight || 50,
    },
    transition: {
      ease: easeType || [1, 0.5, 0.5, 1],
      duration: .4,


    },
  };

  const elements = children.split('').map((item, i) => {
    if (item === ' ') {
      return <span key={i}>&nbsp;</span>;

    } else {
      return (
        <motion.span
          key={i}
          initial='hidden'
          animate='visible'
          variants={animatedcharacters}
          transition={animatedcharacters.transition}

        >
          {item}
        </motion.span>
      );
    }
  });

  return (
    <div className={className} style={{ lineHeight: `${lineHeight}px` }}>
      <motion.div
        className='overflow-hidden flex '
        initial='hidden'
        animate='visible'
        variants={animateddiv}
      >
        {elements}
      </motion.div>
    </div>
  );
}