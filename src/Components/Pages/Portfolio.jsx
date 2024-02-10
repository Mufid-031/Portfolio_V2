import Container from "../Layout/Container"
import AuntLayout from "../Layout/AuntLayout"

const Portfolio = () => {

    const gambar = [
        {
            img: "../src/assets/img/1.png",
            title: "Panda Store",
            colorTitle: "lime-300",
        },
        {
            img: "../src/assets/img/2.png",
            title: "Belajar React",
            colorTitle: "cyan-300",
        }
    ]

    return (
        <Container>
            <h1 className="text-3xl font-bold text-mainColor">My Portfolio</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, delectus esse? Perspiciatis libero ipsam praesentium illo ea ad doloremque placeat vel eveniet quam eum nulla officiis consequuntur, porro labore quos?</p>
            <AuntLayout>
                <div className="w-full h-screen bg-white shadow-lg rounded-xl mt-5">
                    {
                        gambar.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="w-full rounded-xl overflow-hidden">
                                        <img src={item.img} alt="panda-store" />
                                    </div>
                                    <h2 className={`text-3xl font-bold pt-4 pl-3 ${item.colorTitle}`}>{item.title}</h2>
                                    <p className="text-dark px-3 mb-16">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure cum non illum numquam repudiandae sequi in id atque quis. Quia aspernatur minima ratione natus asperiores est doloremque nam, quis corrupti.</p>
                                </div>
                            )
                        })
                    }
                </div >
            </AuntLayout>
        </Container>
    )
}

export default Portfolio