import Instagram from "../../Elements/Icon/Instagram"
import Twitter from "../../Elements/Icon/Twitter"
import TikTok from "../../Elements/Icon/TikTok"
import Discord from "../../Elements/Icon/Discord"
import Github from "../../Elements/Icon/Github"

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
        <h2 className="text-3xl font-bold block text-mainColor mt-10 lg:text-4xl">Mari Berkawan</h2>
    )
}

const LinkDescription = () => {
    return (
        <p className="text-dark mt-2 w-3/4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum cupiditate delectus labore magni asperiores adipisci minima maiores? A, dolore.</p>
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
        <div className="w-10 h-10 p-2 border-2 rounded-full hover:bg-mainColor hover:text-white">
            <a href="#">
                <Instagram />
            </a>
        </div>
    )
}

const LinkTwitter = () => {
    return (
        <div className="w-10 h-10 p-2 border-2 rounded-full hover:bg-mainColor hover:text-white">
            <a href="#">
                <Twitter />
            </a>
        </div>
    )
}

const LinkTikTok = () => {
    return (
        <div className="w-10 h-10 p-2 border-2 rounded-full hover:bg-mainColor hover:text-white">
            <a href="#">
                <TikTok />
            </a>
        </div>
    )
}

const LinkDiscord = () => {
    return (
        <div className="w-10 h-10 p-2 border-2 rounded-full hover:bg-mainColor hover:text-white">
            <a href="#">
                <Discord />
            </a>
        </div>
    )
}

const LinkGithub = () => {
    return (
        <div className="w-10 h-10 p-2 border-2 rounded-full hover:bg-mainColor hover:text-white">
            <a href="#">
                <Github />
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