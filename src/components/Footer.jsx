import React from "react";
import Pick from "../image/logos.png"
import Face from "../image/facebook.png"
import Twi from "../image/twiter.png"
import Linkd from "../image/in.png"
import Yout from "../image/youtube.png"
import Ball from "../image/ball.png"
import Be from "../image/be.png"
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="overflow-hidden w-[80vw] py-10 ms-[10vw]">
            <section >
            
                <div className="flex  justify-between   ">
               
               <div className="">
               <Image
                className="  h-[10vh] w-[10vw] "
              src={Pick}
             />
               </div>
                    <div className="grid grid-cols-3 gap-16 leading-relaxed">
                        <div>
                            <ul className="text-gray-400">
                                <li className="text-black font-bold">About</li>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Solutions</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-400">
                                <li className="text-black font-bold">Information</li>
                                <li>Contacts</li>
                                <li>Our team</li>
                                <li>Blog</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-400">
                                <li className="text-black font-bold">Service</li>
                                <li>Pages</li>
                                <li>Elements</li>
                                <li>Site map</li>
                                <li>Pricing</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <hr className=" my-10" />
            <section className="flex justify-between" name="" id="">
                <div className="flex gap-10">
                    <div>
                        <h2>Contacts</h2>
                        <div className="flex mt-5 leading-relaxed">
                            <div>
                                <p>+1 601-201-5580</p>
                                <p>ensom@info.co.us →</p>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <h2>Contacts</h2>
                        <div className="flex mt-5 leading-relaxed ">
                            <div>
                                <p>1642 Washington Avenue,Jackson ,MS,39201</p>
                                <p>Driving derection →</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="w-[19vw]">
                    <h2>Contacts</h2>
                    <div className="flex mt-5 gap-5 h-7 w-7  ">
                        <Image src={Face}/>
                        <Image src={Twi}/>
                        <Image src={Linkd}/>
                        <Image src={Yout}/>
                        <Image src={Ball}/>
                        <Image src={Be}/>
                    </div>
                </div>
            </section>
            <hr className="my-10" />
            <section className="flex text-gray-400 justify-between">
                <div className="grid grid-cols-2 gap-20">
                    <p>Privacy policy →</p>
                    <p>Terms of us →</p>
                </div>
                <div>
                    &copy; 2022 Ensom. All Rights Reserved.
                </div>
            </section>

        </footer>
    );
};

export default Footer;
