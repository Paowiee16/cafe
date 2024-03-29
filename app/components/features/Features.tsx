import React from "react";
import Image from "next/image";
import CoffeBag from "../../../public/CoffeBagV2.png";
import { CiCoffeeBean, CiCoffeeCup } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { TbCoffee } from "react-icons/tb";
import { SiBuymeacoffee } from "react-icons/si";
import {
  MdOutlineCoffeeMaker,
  MdOutlineLocalFireDepartment,
} from "react-icons/md";

function Features() {
  const features = [
    {
      ImageSrc: CiCoffeeBean,
      title: "Good Quality",
      description:
        " Similique quas ea veniamTempore quasi porro Blanditiis aut mollitia ex",
    },
    {
      ImageSrc: CiCoffeeCup,
      title: "Flavours",
      description:
        " Similique quas ea veniamTempore quasi porro Blanditiis aut mollitia ex",
    },
    {
      ImageSrc: MdOutlineLocalFireDepartment,
      title: "Roast",
      description:
        " Similique quas ea veniamTempore quasi porro Blanditiis aut mollitia ex",
    },
    {
      ImageSrc: MdOutlineCoffeeMaker,
      title: "Aroma",
      description:
        " Similique quas ea veniamTempore quasi porro Blanditiis aut mollitia ex",
    },
    {
      ImageSrc: SiBuymeacoffee,
      title: "Cold Coffee",
      description:
        " Similique quas ea veniamTempore quasi porro Blanditiis aut mollitia ex",
    },
    {
      ImageSrc: TbCoffee,
      title: "Hot Coffee",
      description:
        " Similique quas ea veniamTempore quasi porro Blanditiis aut mollitia ex",
    },
  ];

  return (
    <section className=" m-auto flex text-primary lg:h-screen items-center ">
      <div className="container mx-auto grid grid-flow-row gap-4  lg:grid-cols-3   items-center justify-center justify-items-center">
        {/* LOOP HERE */}
        <Image
          src={CoffeBag}
          alt="coffeeBag"
          className="  lg:col-start-2 lg:col-end-2 lg:row-span-5  "
          width={350}
          height={350}
        />
        {features.map((feature) => (
          <div
            className="flex flex-col items-center p-4  lg:first-of-type:col-start-1 last-of-type:col-start-1 lg:last-of-type:col-start-3"
            key={feature.title}
          >
            <feature.ImageSrc size={35} />

            <h3 className="my-3 text-xl font-semibold">{feature.title}</h3>
            <div className="space-y-1 leading-tight  w-3/5 text-center">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
