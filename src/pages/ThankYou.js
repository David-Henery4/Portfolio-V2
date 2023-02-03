import React from 'react'
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import {BgMultipleWaves, BgWaveStraight, Bg2Waves} from "../assets"

const ThankYou = () => {
  return (
    <motion.main
      className="w-full col-start-2 col-end-12 lrgDesk:col-start-4 lrgDesk:col-end-[14] py-12 grid place-items-center content-center gap-10 relative"
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.25,
      }}
    >
      <BgMultipleWaves className='absolute -bottom-10 right-10'/>
      <Bg2Waves className='absolute top-0 -left-16'/>
      <p className="text-2xl text-center">Thank you for getting in touch!</p>
      <p className="text-2xl text-center">I will reply as quickly as possible</p>
      <Link to="/" className="primary-btn main-btn-styles grid place-items-center">
        Back to Home
      </Link>
    </motion.main>
  );
}

export default ThankYou