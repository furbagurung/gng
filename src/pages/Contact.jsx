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
import { PhoneCall } from "lucide-react";

import Footer from "./Footer";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
function Contact() {
  return (
    <>
      <div className="grid sm:flex flex-col justify-center p-4 m-4 sm:gap-10">
        <div className="sm:py-8 grid justify-center border">
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
            <Card className="border-0 sm:p-6 max-w-96 grid md:flex bg-white  poppins-regular pb-6">
              <CardContent className="grid py-1 gap-4 pt-6 sm:w-96">
                <Label>Name</Label>
                <Input type="text" placeholder="Your Name" />
                <Label>Email</Label>
                <Input type="email" placeholder="Your Email" />
                <Label>Subject</Label>
                <Input type="text" placeholder="Your Subject" />
                <Label htmlFor="message">Your message</Label>
                <Textarea placeholder="Type your message here." id="message" />
                <Button>Send message</Button>
              </CardContent>
            </Card>
            <Card className="w-[300px] sm:w-full max-w-96 grid md:flex justify-start bg-black text-white sm:p-6 poppins-regular">
              <CardHeader className="w-[250px] sm:w-fit">
                <CardTitle className="w-[250px] sm:w-fit">Contact Us</CardTitle>
                <CardDescription className="py-6 w-[250px] sm:w-full text-gray-400">
                  {" "}
                  Ready to start your next project with us? That&apos;s great!
                  Send us an message
                </CardDescription>
                <CardContent className="grid w-fit p-4 pl-0 gap-6 text-gray-400">
                  <div className="flex justify-start gap-4 items-center w-[200px] sm:w-full">
                    <PhoneArrowDownLeftIcon className="h-4 w-4 " />
                    <div>
                      <p>+977 9876543210</p>
                      <p>+977 9876543210</p>
                    </div>
                  </div>
                  <div className="flex justify-start gap-4 text-[14px]  sm:w-full items-center">
                    <EnvelopeIcon className="h-4 w-4 " />
                    <div className="sm:text-sm w-fit">
                      <p>gossipandgiggles@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex justify-start gap-4  w-[200px] sm:w-full items-center">
                    <MapPinIcon className="h-4 w-4 " />
                    <div className="sm:text-sm w-[200px]">
                      <p>China</p>
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
