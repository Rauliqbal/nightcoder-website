import Link from "next/link";
import React from "react";

interface Button {
   href: string;
   label: string;
}

function Button({ href, label }: Button) {
   return (
      <Link
         href={href}
         className="relative inline-flex items-center justify-center h-11 uppercase px-7 group transition-all hover:scale-95"
      >
         <p className="relative z-10 font-bold text-sm text-black group-hover:text-white transition-all">
            {label}
         </p>
         <svg
            className="absolute top-0 left-0 fill-white stroke-white group-hover:fill-black group-hover:stroke-black transition-all"
            width="21"
            height="44"
            viewBox="0 0 21 44"
         >
            <path
               stroke-width="2"
               d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
            ></path>
         </svg>
         <svg
            className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)] fill-white group-hover:fill-black transition-all"
            height="44"
            viewBox="0 0 100 44"
            preserveAspectRatio="none"
         >
            <polygon
               fill-rule="nonzero"
               points="100 0 100 44 0 44 0 0"
            ></polygon>
         </svg>
         <svg
            className="absolute top-0 right-0 fill-white stroke-white group-hover:stroke-black group-hover:fill-black transition-all"
            width="21"
            height="44"
            viewBox="0 0 21 44"
         >
            <path
               stroke-width="2"
               d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
            ></path>
         </svg>
      </Link>
   );
}

export default Button;