// import Container from "../Layout/Container"
// import AuntLayout from "../Layout/AuntLayout"
// import Label from "../Elements/Input/Label"
// import Form from "../Elements/Input/Form"
// import Lottie from 'react-lottie';
// import animationData from '../../../src/Lottie-animation/Animation - 1703686482547.json'
// import Map from "../Elements/Map/Map";
const Contact = () => {

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice"
    //     }
    // }

    return (
        <section className = "bg-white dark:bg-gray-900" >
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section >
//         {/* <div data-aos="fade-up" className="w-full h-[70vh] lg:w-1/3 bg-slate-300 rounded-lg p-5 box-border lg:shadow-2xl">
//                     <h1 className="text-3xl text-mainColor font-bold text-center">Contact</h1>
//                     <form action="" className="flex flex-col justify-evenly">
//                         <Form htmlFor="name" placeholder="Your Name" type="text" name="name" id="name" value="Name" />
//                         <Form htmlFor="email" placeholder="Your Email" type="email" name="email" id="email" value="Email" />
//                         <Label className="text-2xl font-semibold text-mainColor mt-3" htmlFor="message">Message</Label>
//                         <textarea className="p-2 box-border mb-7 focus:ring-4 ring-mainColor" name="message" placeholder="Your Message" id="message" cols="5" rows="5"></textarea>
//                         <button className="bg-white text-mainColor font-semibold hover:bg-mainColor hover:text-white rounded-md p-2">Kirim</button>
//                     </form>
//                 </div> */}
        

// {/* <div data-aos="zoom-in" className="w-full lg:w-2/3 box-border shadow-2xl">
//                     {/* <Lottie
//                         className="h-[300px] w-[300px]"
//                         options={defaultOptions}
//                     /> */}
// {/* <Map /> */ }
// {/* </div> */ }
    )
}

export default Contact