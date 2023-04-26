import React from "react";
import Chaima from "../image/chaima.png";
import Chaima2 from "../image/chama2.png";
import Chaima3 from "../image/chaima3.png";
import Image from "next/image";
import Servo from "../image/servo.png";
import Flesh from "../image/flesh.png";
import Cle from "../image/cle.png";
import Wil from "../image/wilwod.png";
import Apps from "../image/appel.png";
import Iii from "../image/III.png";
import Group from "../image/group.png";
import Haed from "../image/hard.png";
import Faire from "../image/faire.png";

const Page = () => {
  return (
    <div className=" overflow-hidden ">
      <section className="ms-70 w-[85vw] py-20 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-10 ms-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl mb-5">
              Find true power in your data with Ensome
            </h2>
            <p className="text-gray-400 text-2xl mb-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex flex-wrap justify-start">
              <button className="rounded-lg bg-blue-600 text-white text-xl py-4 px-6 mb-4 md:mr-4">
                Learn more
              </button>
              <button className="rounded-lg text-black md:ms-4">
                <span className="rounded-full border-2 px-1.5 py-0.5 me-5 border-black">
                  ▷
                </span>
                Watch the demo
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src={Chaima} />
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap justify-around">
          <Image src={Wil} className="mb-4 md:mr-6" />
          <Image src={Apps} className="mb-4 md:mr-6" />
          <Image src={Iii} className="mb-4 md:mr-6" />
          <Image src={Group} className="mb-4 md:mr-6" />
          <Image src={Haed} className="mb-4 md:mr-6" />
          <Image src={Faire} className="mb-4 md:mr-6" />
        </div>
      </section>
      <hr />
      <section className="bg-blue-100 px-4 py-10 md:px-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl mx-auto mb-5 w-full max-w-[400px]">
            Why our clients choose Ensome?
          </h2>
          <p className="text-gray-400 mx-auto mb-5 text-center text-lg md:text-2xl w-full max-w-[550px]">
            Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mx-auto text-gray-400 w-full max-w-[70vw] mt-10">
          <div className="bg-white p-5 rounded-lg shadow-xl flex-1">
            <div className="border-2 border-gray-300 mt-5 p-1 rounded-lg w-14 mx-auto md:mx-0">
              <Image src={Servo} />
            </div>
            <h2 className="my-3 font-bold  text-black text-center md:text-left">
              Machine Learning
            </h2>
            <p className="text-center md:text-left">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-xl flex-1 mt-5 md:mt-0">
            <div className="border-2 border-gray-300 mt-5 p-1 rounded-lg w-14 mx-auto md:mx-0">
              <Image src={Flesh} />
            </div>
            <h2 className="my-3 font-bold text-black text-center md:text-left">
              Data Analytics
            </h2>
            <p className="text-center md:text-left">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-xl flex-1 mt-5 md:mt-0">
            <div className="border-2 border-gray-300 mt-5 p-1 rounded-lg w-14 mx-auto md:mx-0">
              <Image src={Cle} />
            </div>
            <h2 className="my-3 font-bold text-black text-center md:text-left">
              Data Visualization
            </h2>
            <p className="text-center md:text-left">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto px-4 md:px-0 py-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div className="flex flex-col justify-center md:pr-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The newest business analytics platform
            </h2>
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex justify-start md:justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-4 text-xl">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              className="w-full md:w-4/5 lg:w-3/4"
              src={Chaima2}
              alt="Ensome demo"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex justify-center md:justify-end">
            <Image
              className="w-full md:w-4/5 lg:w-3/4"
              alt="Ensome demo"
              src={Chaima3}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-5 font-bold text-center md:text-left">
              Radically new data solutions
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl mb-5 text-center md:text-left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-100  p-10">
        <div className=" text-center ">
          <h2 className="text-5xl w-[400px] m-auto  mb-5">
            Glad to help your success
          </h2>
        </div>
        <div className=" flex m-auto w-[70vw] gap-5">
          <div className="bg-white shadow-xl rounded-lg p-5">
            <p>22 june 2020</p>
            <h2 className="my-3 font-bold">
              Sed ut perspiciatis unde omnis at vero blanditils
            </h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti...
            </p>
            <button className="border border-gray-200 text-blue-500 rounded-lg py-1.1 px-1.5 mt-5 me-2">
              Proxy
            </button>
            <button className="border border-gray-200 text-blue-500 rounded-lg py-1.1 px-1.5 ">
              Proxy
            </button>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-5">
            <p>22 june 2020</p>
            <h2 className="my-3 font-bold">
              sed ut perspiciatis unde omnis at vero blanditils
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              asperiores commodi perferendis veritatis voluptatibus deserunt
            </p>
            <button className="border border-gray-200 text-blue-500 rounded-lg py-1.1 px-1.5 mt-5 me-2">
              Proxy
            </button>
            <button className="border border-gray-200 text-blue-500 rounded-lg py-1.1 px-1.5 ">
              Proxy
            </button>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-5">
            <p>22 june 2020</p>
            <h2 className="my-3 font-bold">
              sed ut perspiciatis unde omnis at vero blanditils
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              asperiores commodi perferendis veritatis voluptatibus deserunt
            </p>
            <button className="border border-gray-200 text-blue-500 rounded-lg py-1.1 px-1.5 mt-5 me-2">
              Proxy
            </button>
            <button className="border border-gray-200 text-blue-500 rounded-lg py-1.1 px-1.5 ">
              Proxy
            </button>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="rounded-lg bg-blue-600  text-white text-xl py-4 px-6 ">
            learn more
          </button>
        </div>
      </section>
      <section className="w-[70vw] m-auto p-10 mb-5">
        <div className="flex  ">
          <h2 className="text-4xl w-[30vw] ">
            Trusted by the best in the business
          </h2>
          <span>
            <button className="text-4xl  rounded-lg bg-blue-100 text-blue-300  me-10 ms-96 px-10 pb-1">
              ←
            </button>
          </span>
          <span>
            <button className="text-4xl  rounded-lg bg-blue-100 text-black px-10 pb-1">
              →
            </button>
          </span>
        </div>
        <div className="grid grid-cols-2 mt-10  gap-4">
          <div className="mt-5  relative">
            <div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-lg p-5">
              <img
                className="h-20 w-20 rounded-full absolute  top-[-50px]  "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaU2i-9GpchYMFwmLI-KYTOEnvrCSilPESFKAkHyyxRw&s"
                alt=""
              />
              <p className="mt-10 text-gray-400">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel
                illum.”
              </p>
              <h2 className="mt-3 font-bold">alex bern</h2>
              <p className="text-gray-400">ceo by pi</p>
            </div>
          </div>
          <div className="mt-5  relative">
            <div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-lg p-5">
              <img
                className="h-20 w-20 rounded-full absolute  top-[-50px]  "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaU2i-9GpchYMFwmLI-KYTOEnvrCSilPESFKAkHyyxRw&s"
                alt=""
              />
              <p className="mt-10 text-gray-400">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel
                illum.”
              </p>
              <h2 className="mt-3 font-bold">Alex Bern</h2>
              <p className="text-gray-400">CEO by NOX</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center text-center text-white gap-10 bg-blue-600 p-10">
          <div className=" ">
            <p className="text-5xl font-black mb-2">1830+</p>
            <p className="text-sm font-black">Project executed</p>
          </div>
          <div className="h-20 w-0.5 bg-white"></div>
          <div className=" ">
            <p className="text-5xl font-black mb-2">220</p>
            <p className="text-sm font-black">Data analytics</p>
          </div>
          <div className="h-20 w-0.5 bg-white"></div>
          <div className=" ">
            <p className="text-5xl font-black mb-2">390</p>
            <p className="text-sm font-black">Data management</p>
          </div>
          <div className="h-20 w-0.5 bg-white"></div>
          <div className=" ">
            <p className="text-5xl font-black mb-2">834+</p>
            <p className="text-sm font-black">Satisfied customers</p>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 p-10">
        <div className="grid grid-cols-2 ms-[18vw] ">
          <div className=" w-[28vw]">
            <div className="m-0 p-0">
              <h2 className="text-3xl mb-6 font-bold leading-relaxed">
              Left questions? Contacts us now for a free consultation and free trial!
              </h2>
            </div>
            <div className="mb-20">
              <p className=" text-gray-400">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
              </p>
            </div>
            <div className="mb-7">
              <p className=" text-gray-400">Email address</p>
              <p>ensome@info.co.us</p>
            </div>
            <div className="mb-7">
              <p className=" text-gray-400">Phone number</p>
              <p>+1601-201-5580</p>
            </div>
            <div className="">
              <p className=" text-gray-400">Address</p>
              <p>1642 Washington Avenue,jackson, Ms ,Mississippi,39201</p>
            </div>
          </div>
          <form className="bg-white w-[25vw] px-10 shadow-xl  pb-5">
            <h2 className="py-10 text-4xl">Contact Us</h2>

            <div className="mb-5">
              <label htmlFor="name" className=" text-gray-400">
                name
              </label>
              <br />
              <input
                className="border-b-2 border-gray-500 py-2 outline-none"
                type="text"
                placeholder="text"
                name=""
                id="name"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className=" text-gray-400">
                Email
              </label>
              <br />
              <input
                className="border-b-2 border-gray-500 py-2 outline-none"
                type="email"
                placeholder="email"
                name=""
                id="email"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="theme" className=" text-gray-400">
                Theme
              </label>
              <br />
              <input
                className="border-b-2 border-gray-500 py-2 outline-none"
                type="text"
                placeholder="Theme"
                name=""
                id="theme"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className=" text-gray-400">
                Message
              </label>
              <br />
              <input
                className="border-b-2 border-gray-500 py-2 outline-none"
                type="text"
                placeholder="Message"
                name=""
                id="message"
              />
            </div>
            <div className="text-end">
              <button
                className="bg-blue-600 py-2 text-white px-9 rounded-lg"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="flex items-center justify-center  p-10 bg-blue-600">
        <div className=" ">
          <h2 className="text-2xl mb-3 font-bold text-white">
            Subscribe to our newsletter
          </h2>
          <p className="text-lg text-white w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            error assumenda ipsum debitis!
          </p>
        </div>
        <div className="">
          <input
            className="outline-none placeholder:font-bold placeholder:text-gray-900  p-3 rounded-l-lg bg-slate-300"
            type="email"
            name=""
            placeholder="Your email"
            id=""
          />
          <button className="py-3 px-5 bg-white rounded-r-lg font-bold" type="submit">
            Send
          </button>
        </div>
      </section>
    </div>
  );
};

export default Page;
