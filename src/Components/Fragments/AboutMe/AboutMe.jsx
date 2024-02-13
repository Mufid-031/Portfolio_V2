const AboutMe = (Props) => {
    const { children } = Props

    return (
        <div className="w-full lg:w-1/2 lg:self-center">
            {children}
        </div>
    )
}

const AboutMeTitle = () => {

    return (
        <h2 data-aos="fade-right" className="text-3xl font-bold block text-mainColor lg:text-4xl">Tentang Saya</h2>
    )
}

const AboutMeDescription = () => {
    return (
        <p data-aos="fade-right" data-aos-delay="400" className="text-dark mt-2 lg:w-[450px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium perspiciatis quia beatae deserunt eaque voluptatem adipisci. Hic nulla, a expedita labore nobis incidunt optio dolorem voluptatem ducimus! Suscipit accusantium odio nulla mollitia ducimus? Adipisci quibusdam aliquam excepturi. Vel, ad repellendus.</p>
    )
}

AboutMe.Title = AboutMeTitle
AboutMe.Description = AboutMeDescription

export default AboutMe