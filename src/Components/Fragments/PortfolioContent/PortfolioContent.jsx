import img1 from "../../../../public/img/1.png";
import img2 from "../../../../public/img/2.png";
import img3 from "../../../../public/img/3.png";
import img4 from "../../../../public/img/4.png";



const Layout = (Props) => {
    const { children } = Props

    return (
        <div data-aos="fade-up" className="flex flex-wrap w-full lg:bg-slate-300 rounded-xl z-0">
            {children}
        </div >
    )
}

const Title = () => {
    return (
        <div className="flex lg:flex-col lg:items-center lg:justify-center lg:-rotate-90 lg:-z-10 w-full lg:w-1/4 pr-2">
            <h1 data-aos="fade-up" className="text-3xl lg:text-[100px] lg:drop-shadow-xl font-bold text-mainColor w-[650px] lg:tracking-wide lg:z-10">My Portfolio</h1>
        </div>
    )
}

const CardContainer = (Props) => {
    const { children } = Props

    return (
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className="flex flex-wrap w-full lg:w-3/4 bg-white shadow-xl rounded-xl lg:z-10">
            {children}
        </div>
    )
}

const Card = () => {

    const gambar = [
        {
            img: img1,
            title: "Panda Store",
            colorTitle: "lime-300",
            data_aos: "fade-right"
        },
        {
            img: img2,
            title: "Belajar React",
            colorTitle: "cyan-300",
            data_aos: "fade-right",
            data_aos_delay: "400"
        },
        {
            img: img3,
            title: "Scrips Movie",
            colorTitle: "amber-300",
            data_aos: "fade-right",
            data_aos_delay: "800"
        },
        {
            img: img4,
            title: "Laptop Store/ Register Page",
            colorTitle: "lime-300",
            data_aos: "fade-right",
            data_aos_delay: "1200"
        }

    ]

    return (
        gambar.map((item, index) => {
            return (
                <div key={index} className="w-full lg:w-2/4 p-4 lg:hover:bg-slate-300 transition duration-500 rounded-md lg:z-10">
                    <div className="w-full rounded-xl overflow-hidden">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <CardTitle className={`text-3xl font-bold pt-4 pl-3`} item={item.title} />
                    <p className="text-darkGray px-3 mb-3 py-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure cum non illum numquam repudiandae sequi in id atque quis. Quia aspernatur minima ratione natus asperiores est doloremque nam, quis corrupti.</p>
                </div>
            )
        })
    )
}

const CardTitle = (Props) => {
    const { className, item } = Props

    if (item === 'Panda Store') {
        return (
            <h2 className={`${className} text-lime-300`}>{item}</h2>
        )
    } else if (item === 'Scrips Movie') {
        return (
            <h2 className={`${className} text-amber-300`}>{item}</h2>
        )
    } else if (item === 'Belajar React') {
        return (
            <h2 className={`${className} text-cyan-300`}>{item}</h2>
        )
    } else if (item === 'Laptop Store/ Register Page') {
        return (
            <h2 className={`${className} text-lime-300`}>{item}</h2>
        )
    }
}


Layout.Title = Title
Layout.CardContainer = CardContainer
Layout.Card = Card

export default Layout