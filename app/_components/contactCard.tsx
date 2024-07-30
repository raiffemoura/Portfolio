"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactCard = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <form
          action="https://formsubmit.co/1993.raiffe@gmail.com"
          method="POST"
          target="blank"
          className="flex h-fit w-[30rem] flex-col items-center justify-between rounded-3xl border-none bg-[#000000] bg-opacity-70 px-8 py-6 text-white"
        >
          <h1 className="text-3xl">
            Lets
            <Button className="pointer-events-none ml-1 bg-[#fab676] px-2 text-3xl text-white hover:bg-[#fab676]">
              Connect
            </Button>
          </h1>

          <div className="mb-2 w-[90%]">
            <h3>Name</h3>
            <Input
              type="text"
              placeholder="Joshua Hernandez"
              className="mb-2 mt-1 w-full border-none bg-[#29292b] bg-opacity-50 text-white placeholder:text-[#696969] focus-visible:ring-offset-0"
              onChange={(e) => setName(e.target.value)}
              required
              name="name"
            />
          </div>

          <div className="mb-2 w-[90%]">
            <h3>Email</h3>
            <Input
              type="email"
              placeholder="joshuhernandez@me.com"
              className="mb-2 mt-1 w-full border-none bg-[#29292b] bg-opacity-50 text-white placeholder:text-[#696969] focus-visible:ring-offset-0"
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
            />
          </div>

          <div className="mb-2 w-[90%]">
            <h3>Subject</h3>
            <Input
              type="text"
              placeholder="Enter the subject of your message"
              className="mb-2 mt-1 w-full border-none bg-[#29292b] bg-opacity-50 text-white placeholder:text-[#696969] focus-visible:ring-offset-0"
              onChange={(e) => setSubject(e.target.value)}
              required
              name="subject"
            />
          </div>

          <div className="mb-2 w-[90%]">
            <h3>Subject</h3>
            <Textarea
              placeholder="Type your message here"
              className="mb-2 mt-1 max-h-60 min-h-20 w-full border-none bg-[#29292b] bg-opacity-50 text-white placeholder:text-[#696969] focus-visible:ring-offset-0"
              onChange={(e) => setMessage(e.target.value)}
              required
              name="message"
            />
          </div>

          <Button
            type="submit"
            disabled={!email || !name || !message || !subject}
            className="text-md w-[90%] bg-[#fab676] font-bold hover:bg-[#fab676]"
            name="_next"
            value="/"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactCard;
