import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_efikxlf", "template_eyascpm", form.current, {
        publicKey: "d109jLia2JTOP68MJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {/* <form ref={form} onSubmit={sendEmail}>
<label>Name</label>
        <input type="text" name="user_name" />
<label>Email</label>
        <input type="email" name="user_email" />
<label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
      <div className="grid sm:flex flex-col justify-center p-4 m-4 sm:gap-10">
        <div className="sm:py-8 grid justify-center ">
          {" "}
          <div className=" text-4xl poppins-extrabold text-center ">
            <h1>Get in Touch</h1>
          </div>
          <div className="text-center flex justify-center  w-[320px] sm:w-full p-4">
            <p>
              Ready to start your next project with us? That&apos;s great! Send
              us an message
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="sm:w-fit sm:flex flex-row-reverse md:flex rounded-3xl gap-2 justify-center sm:gap-4 bg-white  p-4 max-w-[1200px]">
            {" "}
            <Card className="border-0 sm:p-6 max-w-96 grid md:flex bg-white  poppins-regular pb-6">
              <form ref={form} onSubmit={sendEmail}>
                <CardContent className="grid py-1 gap-4 pt-6 sm:w-96">
                  <label>Name *</label>
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                  />
                  <label>Email *</label>
                  <Input
                    ttype="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                  />
                  <label>Subject *</label>
                  <Input type="text" placeholder="Your Subject" required />
                  <label htmlFor="message">Your message *</label>
                  <Textarea
                    placeholder="Type your message here."
                    id="message"
                    name="message"
                    required
                  />
                  <Button>
                    <NavLink to="../thankyou">
                      <input type="submit" value="Send" />
                    </NavLink>
                  </Button>
                </CardContent>
              </form>
            </Card>
            <Card className="w-[300px] sm:w-full max-w-96 grid md:flex justify-start bg-black text-white sm:p-6 poppins-regular">
              <CardHeader className="w-[250px] sm:w-fit">
                <CardTitle className="w-[250px] sm:w-fit">Contact Us</CardTitle>
                <CardDescription className="py-6 w-[250px] sm:w-full text-gray-400 grid gap-4">
                  {" "}
                  Ready to start your next project with us? That&apos;s great!
                  Send us an message
                  <div className="text-sm  text-white">
                    <p>Gossip & Giggles Cosmetics Co.Ltd.</p>
                  </div>
                </CardDescription>
                <CardContent className="grid w-fit p-4 pl-0 gap-6 text-gray-400">
                  <div className="flex justify-start gap-4 items-center w-[200px] sm:w-full">
                    <PhoneArrowDownLeftIcon className="h-4 w-4 " />
                    <div>
                      <p>+866&nbsp;18000455998</p>
                      {/* <p>+977 9876543210</p> */}
                    </div>
                  </div>
                  <div className="flex justify-start gap-4 text-[14px]  sm:w-full items-center">
                    <EnvelopeIcon className="h-4 w-4 " />
                    <div className="sm:text-sm w-fit">
                      <p>gossipandgiggles@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex justify-start items-start gap-4  w-[200px] sm:w-full">
                    <MapPinIcon className="h-4 w-4 " />
                    <div className="sm:text-sm w-[200px]">
                      <p>China Merchant City, Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
