
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LinkFriend = (Props) => {
    const { children } = Props

    return (
        <div className="w-full lg:w-1/2 lg:-mt-10">
            {children}
        </div>
    )
}

const Linktitle = () => {
    return (
        <h2 data-aos="fade-right" className="text-3xl font-bold block text-mainColor mt-10 lg:text-4xl">Mari Berkawan</h2>
    )
}

const LinkDescription = () => {
    return (
        <p data-aos="fade-right" data-aos-delay="400" className="text-dark mt-2 w-3/4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum cupiditate delectus labore magni asperiores adipisci minima maiores? A, dolore.</p>
    )
}

const ContainerLink = (Props) => {
    const { children } = Props

    return (
        <div className="flex w-full justify-evenly mt-10 lg:justify-start lg:gap-2">
            {children}
        </div>
    )
}

const LinkInstagram = () => {

    return (
        <div data-aos="fade-right" data-aos-delay="800" className="w-10 h-10 p-2 border-2 rounded-full hover:bg-mainColor hover:text-white">
            <a href="https://www.instagram.com/damslette3/">
                <FaInstagram size={20} />
            </a>
        </div>
    )
}

const LinkTwitter = () => {

    return (
        <div data-aos="fade-right" data-aos-delay="1000" className="w-10 h-10 p-2 border-2 rounded-full hover:bg-mainColor hover:text-white">
            <a href="https://twitter.com/MufidRisqi30683">
                <FaTwitter size={20} />
            </a>
        </div>
    )
}

const LinkTikTok = () => {

    return (
        <div data-aos="fade-right" data-aos-delay="1200" className="w-10 h-10 p-2 border-2 rounded-full hover:bg-mainColor hover:text-white">
            <a href="https://www.tiktok.com/@mufid_risqi?lang=id-ID">
                <FaTiktok size={20} />
            </a>
        </div>
    )
}

const LinkDiscord = () => {

    return (
        <div data-aos="fade-right" data-aos-delay="1400" className="w-10 h-10 p-2 border-2 rounded-full hover:bg-mainColor hover:text-white">
            <a href="https://discord.com/channels/@scrips-031">
                <FaDiscord size={20} />
            </a>
        </div>
    )
}

const LinkGithub = () => {

    return (
        <div data-aos="fade-right" data-aos-delay="1600" className="w-10 h-10 p-2 border-2 rounded-full hover:bg-mainColor hover:text-white">
            <a href="https://github.com/Mufid-031">
                <FaGithub size={20} />
            </a>
        </div>
    )
}

LinkFriend.Title = Linktitle
LinkFriend.Description = LinkDescription
LinkFriend.Container = ContainerLink
ContainerLink.LinkInstagram = LinkInstagram
ContainerLink.LinkTwitter = LinkTwitter
ContainerLink.LinkTikTok = LinkTikTok
ContainerLink.LinkDiscord = LinkDiscord
ContainerLink.LinkGithub = LinkGithub

export default LinkFriend