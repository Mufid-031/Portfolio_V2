import Blob from "../../Elements/Blob/Blob"
import Hero from "../../Elements/Hero/Hero"

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
        <div className="w-full lg:pl-20 drop-shadow-xl">
            <Hero />
        </div>
    )
}

const BlobContainer = () => {
    return (
        <span className="absolute -bottom-40 -left-10 block w-[700px] -z-10 lg:w-[700px] lg:-bottom-48">
            <Blob />
        </span>
    )
}

HeroMain.HeroContainer = HeroContainer
HeroMain.BlobContainer = BlobContainer


export default HeroMain