import { SiGmail } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="items-center flex flex-col justify-center">
        <h1 className="font-extrabold text-4xl m-4">About FootRadar</h1>
        <span className="m-12">
          FootScout is your go-to platform for football insights. We provide
          real-time data on teams, players, scorers, and match history. Whether
          you're a casual fan or a scouting enthusiast, our app helps you
          discover and compare talent from all over the world. Stay tuned — new
          features like transfer simulations and player comparison tools are
          coming soon! Created by football fan especially Arsenal and
          Jagiellonia Białystok fan and tech student from AGH University of
          Science. Feel free to contact me if you have some feedback or proposal
          :)))
        </span>
        <p className="p-8">
          Here are my social media accounts. Feel free to drop a comment or
          connect!
        </p>
      </div>
      <div className="flex justify-around p-4">
        <a href="mailto:szymondomagala32@gmail.com">
          <SiGmail size={80} />
        </a>
        <a href="https://www.github.com/Szymi611">
          <FiGithub size={80} />
        </a>
        <a href="">
          <FaInstagram size={80} />
        </a>
        <a href="https://www.linkedin.com/in/szymon-domagała-b582812b9/">
          <FaLinkedin size={80} />
        </a>
      </div>
    </>
  );
}
