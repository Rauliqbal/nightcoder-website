"use client";
import React from "react";
import { MagicCard } from "../ui/MagicCard";
import { Monitor } from "iconsax-react";
import { BENEFITS } from "../../../../utils/data";
import { SectionHeading } from "../ui/Typography";
import { SlideIn } from "../ui/Transition";

export default function Benefits() {
   return (
      <div className="relative">
         {/* START:Content */}
         <div className="container py-20">
            {/* Section Title */}
            <SectionHeading className="md:pl-16 overflow-hidden">
               <SlideIn className="text-white/40">Manfaat gabung</SlideIn>
               <br />
               <SlideIn>!NightCoder</SlideIn>
            </SectionHeading>
            {/* End: Section Title */}
            <div className="grid grid-cols-1 md:grid-cols-3  gap-6 ">
               {BENEFITS.map((item) => (
                  <MagicCard key={item.title} className="px-6 py-8">
                     <div className="p-3 bg-gradient-to-b from-primary to-indigo-600 inline-flex rounded-xl">
                        <Monitor size="32" color="#fff" variant="Bold" />
                     </div>
                     <h3 className="text-xl md:text-2xl  tracking-wide mt-6 font-medium">
                        {item.title}
                     </h3>
                     <p className="desc mt-4">{item.desc}</p>
                  </MagicCard>
               ))}
            </div>
         </div>
         {/* END:Content */}
         <span className="blob size-1/4  absolute top-20 left-0 blur-[100px] -z-10" />

         <Icon className="absolute h-6 w-6 -top-3 hidden lg:block lg:left-5 xl:left-7 text-white" />
         <Icon className="absolute h-6 w-6 -top-3 hidden lg:block lg:right-5 xl:right-7 text-white" />
         <Icon className="absolute h-6 w-6 -bottom-3 hidden lg:block lg:left-5 xl:left-7 text-white" />
         <Icon className="absolute h-6 w-6 -bottom-3 hidden lg:block lg:right-5 xl:right-7 text-white" />
         <div className="border-top"></div>
         <div className="border-left"></div>
         <div className="border-right"></div>
         <div className="border-bottom"></div>
      </div>
   );
}

export const Icon = ({ className }: { className: string }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth="1.5"
         stroke="currentColor"
         className={className}
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
         />
      </svg>
   );
};
