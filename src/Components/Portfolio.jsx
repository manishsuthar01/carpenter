import React from "react";
import { portfolioItems } from "../data/PortfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-14 bg-gray-50 text-black">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl  text-black font-light">
          <b>Featured Projects</b> 
        </h3>
        <span className="w-20 bg-[#c39215] h-1 inline-block "></span>
        <p className="block text-black mt-4">
         A showcase of our finest woodworking projects,each piece a testament to our <br />dedicated to quality
        </p>{" "}
        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {portfolioItems.map((items, index) => {
            return (
              <div
                key={index}
                className="rounded-lg  shadow-2xs hover:shadow-lg transition overflow-hidden p-2.5 border border-zinc-300"
              >
                <img
                  src={items.image}
                  alt={items.title}
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition"
                />
                <p className=" mt-2 font-semibold">{items.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
