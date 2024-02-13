import Blob from "../../Elements/Blob/Blob"
import Hero from "../../Elements/Hero/Hero"
import { motion } from "framer-motion"
import { variantScaleUp } from "../../../Framer-Motion/ScaleAnimation"

const HeroMain = (Props) => {
    const { children } = Props

    return (
        <div className="flex justify-center w-full relative lg:self-start lg:justify-center lg:w-1/2 ">
            {children}
        </div>
    )
}

const HeroContainer = () => {

    return (
        <motion.div variants={variantScaleUp} initial="hidden" animate="visible" className="w-full lg:pl-20 drop-shadow-xl">
            <Hero />
        </motion.div>
    )
}

const BlobContainer = () => {

    const variantAnimation = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.5,
            }
        }

    }

    return (
        <motion.span initial="hidden" animate="visible" variants={variantAnimation} className="absolute -bottom-40 -left-10 block w-[700px] -z-10 lg:w-[700px] lg:-bottom-48">
            <Blob />
        </motion.span>
    )
}

HeroMain.HeroContainer = HeroContainer
HeroMain.BlobContainer = BlobContainer


export default HeroMain