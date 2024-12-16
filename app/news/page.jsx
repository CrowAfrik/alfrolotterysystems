import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import background from '../images/background.png';
import team from '../images/team.png';
import play_store from '../images/play_store.svg'
import mobile from '../images/mobile.png';
import ammachi from "../images/ammachi.svg";
import { client } from "../lib/sanity";
import app_store from '../images/appstore.svg';

async function getNews() {
    const query = `
      *[_type == "news"] {
        title,
        description,
        images[]{
            asset->{
            _id,
            url
            }
        }
        }
    `;
    return client.fetch(query, {},
        {
            cache: 'no-store',
        }
    )
}


export default async function News() {
    const news = await getNews();
    return (
        <div className="container mx-auto p-4 lg:p-8 bg-black">
            <Navbar />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-32 m-10">
                <div className="flex justify-start items-center">
                    <h1 className="font-light text-red-500 text-3xl lg:text-7xl mb-2 animate-flip-up">
                        Our Latest <br />Updates
                    </h1>
                </div>
                <div>
                    <Image
                        src={background} // Replace with correct path
                        alt="Our Updates"
                        className="max-w-xl max-h-l mx-auto w-full  md:w-fit lg:w-screen "
                    />
                </div>
            </div>


            {news.map((news, index) => (
                <div key={index} className="flex flex-col">
                    {/* <div className="flex items-center mb-4">
                            <h1 className="text-xl text-gray-400">{event.title}</h1>
                        </div> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        <div className="flex items-center">
                            <h2 className="text-lg text-gray-500">{news.description}</h2>
                        </div>
                        {news.images?.map((image, imageIndex) => (
                            <div key={imageIndex} className="w-full h-auto">
                                <Image
                                    src={image.asset.url}
                                    alt={news.title}
                                    width={300}
                                    height={170}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="flex flex-col text-center items-center justify-center pt-64">
                <h1 className="text-3xl lg:text-5xl text-white">
                    Download Out App and start <span className="textred-500">Playing Now</span> !
                </h1>
                <div className="flex mt-7">
                    <a className=" m-5 mt-8" href="https://drive.google.com/file/d/1Xin9r45H4UfZ-5m1wTl7t81bOF5S6OpG/view?usp=drive_link" target="_blank">
                        <Image
                            className=""
                            src={play_store}
                            alt="image"
                        />
                    </a>
                    <a className=" m-5 mt-8" href="https://apps.apple.com/us/app/afro-lottery-systems/id6478978244" target="_blank">
                        <Image
                            className=""
                            src={app_store}
                            alt="image"
                        />
                    </a>
                </div>
                <div className="mt-10">
                    <Image
                        src={mobile}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 lg:mt-52 mt-32 sm:grid-cols-1 md:grid-cols-2 bg-red-950  text-grey-900">

                <div className="lg:px-16 px-8 py-8 lg:py-0">
                    <h2 className="text-white font-light lg:mt-32 text-2xl lg:text-4xl">Connect with Us</h2>
                    <div className="mt-8 ml-4">
                        <ul className=" text-gray-100 font-thin font-Jakarta text-l list-disc ">
                            <li>
                                We are available 24 x 7 for your help !
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <a href="#" className="text-white mt-8 font-light text-center px-10 py-4 border max-w-72 rounded-3xl border-white mx-auto hover:bg-red-900 hover:text-white">
                            Contact Us Now
                        </a>
                    </div>

                </div>
                <div>
                    <Image
                        className="lg:max-w-xl"
                        src={ammachi}
                        alt="image"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}