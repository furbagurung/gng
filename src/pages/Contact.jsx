import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  EnvelopeIcon,
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
      <div className="grid justify-center p-4 m-4 gap-10">
        <div className="py-8">
          {" "}
          <h1 className="text-4xl poppins-extrabold text-center ">
            Get in Touch
          </h1>
          <p className="text-center">
            Ready to start your next project with us? That&apos;s great! Send us
            an message
          </p>
        </div>

        <div className="w-full flex justify-start rounded-3xl bg-white p-4 max-w-[1200px]">
          <Card className="max-w-96 bg-black text-white p-6 poppins-regular">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription className="py-6 text-gray-400">
                {" "}
                Ready to start your next project with us? That&apos;s great!
                Send us an message
              </CardDescription>
              <CardContent className="grid p-4 pl-0 gap-6 text-gray-400">
                <div className="flex justify-start gap-4 items-center">
                  <PhoneArrowDownLeftIcon className="h-4 w-4 " />
                  <div>
                    <p>+977 9876543210</p>
                    <p>+977 9876543210</p>
                  </div>
                </div>
                <div className="flex justify-start gap-4 items-center">
                  <EnvelopeIcon className="h-4 w-4 " />
                  <div>
                    <p>gossipandgiggles@gmail.com0</p>
                  </div>
                </div>
                <div className="flex justify-start gap-4 items-center">
                  <PhoneCall className="h-4 w-4 " />
                  <div>
                    <p>gossipandgiggles@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="border-0 p-6  poppins-regular">
            <CardContent className="grid gap-4 w-96">
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
