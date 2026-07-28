"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  DollarSign,
  Truck,
  Star,
  Leaf,
} from "lucide-react";



const heroImages = [
  "/hero.png",
  "/residential.webp",
  "/hero6.webp",
  "/construction.webp",
  "/commercial.webp",
];



import { Variants } from "framer-motion";
const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
  
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.2, 1],
      },
    },
  };

const stagger: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};





export default function Hero(){



const [activeImage,setActiveImage] = useState(0);




useEffect(()=>{


const interval = setInterval(()=>{


setActiveImage((prev)=>
(prev + 1) % heroImages.length
);


},6000);



return ()=>clearInterval(interval);



},[]);







return (



<section

className="
relative
w-full
overflow-hidden
bg-brand-primary
"

>





{/* BACKGROUND GLOWS */}



<div

className="
pointer-events-none
absolute
bottom-[-180px]
left-1/2
h-[350px]
w-[700px]
-translate-x-1/2
rounded-full
bg-blue-400/20
blur-[120px]
"

/>





<div

className="
pointer-events-none
absolute
right-0
top-1/3
h-[300px]
w-[300px]
rounded-full
bg-brand-accent/10
blur-[100px]
"

/>








{/* MOBILE IMAGE */}



<motion.div


initial={{
opacity:0,
scale:1.05
}}


animate={{
opacity:1,
scale:1
}}


transition={{
duration:1
}}


className="
relative
h-[275px]
overflow-hidden
xl:hidden
"


>



<motion.div


key={activeImage}


initial={{
opacity:0,
scale:1.08
}}


animate={{
opacity:1,
scale:1
}}


transition={{
duration:1
}}


className="
absolute
inset-0
"


>


<Image

src={heroImages[activeImage]}

alt="Dumpster rental service"

fill

priority

sizes="100vw"

className="
object-cover
"

 />





<div

className="
absolute
inset-0

bg-gradient-to-t

from-brand-primary/80

via-brand-primary/20

to-transparent
"

/>





</motion.div>





{/* MOBILE DOTS */}



<div

className="
absolute
bottom-4
left-1/2
flex
-translate-x-1/2
gap-2
"

>


{
heroImages.map((_,index)=>(


<button

key={index}

onClick={()=>setActiveImage(index)}

className={`
h-2
rounded-full
transition-all

${
activeImage===index
?
"w-8 bg-brand-accent"
:
"w-2 bg-white/50"
}

`}

/>


))

}



</div>





</motion.div>









{/* MAIN GRID */}



<div

className="
relative

grid

xl:grid-cols-[50%_50%]

2xl:grid-cols-[45%_55%]

"

>









{/* LEFT CONTENT */}



<motion.div


variants={fadeUp}


initial="hidden"


animate="show"


className="
flex
items-center

px-4

sm:px-6

md:px-8

py-8

text-left

xl:min-h-[500px]

xl:pl-8

xl:pr-12

2xl:min-h-[560px]
"


>




<div

className="
w-full

max-w-2xl

min-w-0

overflow-hidden
"

>



<p

className="
mb-3

text-sm

font-bold

uppercase

tracking-[0.25em]

text-brand-accent
"

>

CLEANER TODAY. BETTER TOMORROW.

</p>






<h1

className="
text-[2.15rem]

font-black

leading-[1.05]

sm:text-5xl

lg:text-5xl

xl:text-5xl

2xl:text-5xl
"

>



<span

className="
block

whitespace-normal

sm:whitespace-nowrap

text-white
"

>

Temporary Dumpsters

</span>





<span

className="
block

mt-2

whitespace-normal

sm:whitespace-nowrap
"

>

<span className="text-white">

for a{" "}

</span>


<span className="text-brand-accent">

Cleaner Tomorrow.

</span>


</span>



</h1>
<p

className="
mt-4

max-w-xl

text-base

leading-relaxed

text-white/80

sm:text-lg
"

>

Temporary Dumpster provides dumpster rental services nationwide.
Contact us today for all your waste removal needs!

</p>







<div

className="
mt-6

flex

flex-col

gap-3

sm:flex-row
"

>


<button

className="
rounded-lg

bg-brand-accent

px-8

py-3.5

font-bold

text-white

shadow-lg

shadow-brand-accent/30

transition

hover:scale-105
"

>

ORDER ONLINE

</button>






<button

className="
rounded-lg

border-2

border-white/80

px-8

py-3.5

font-bold

text-white

transition

hover:bg-white

hover:text-brand-primary
"

>

GET A QUOTE

</button>


</div>









<motion.div


variants={stagger}


initial="hidden"


animate="show"


className="
mt-6

grid

w-full

grid-cols-2

gap-y-5

border-t

border-white/20

pt-6

pl-10

sm:pl-0

md:grid-cols-4

md:gap-x-6
"


>




<Feature

icon={<DollarSign/>}

title="Upfront Pricing"

text="No hidden fees"

color="text-emerald-400"

/>





<Feature

icon={<Truck/>}

title="Fast Delivery"

text="On your schedule"

color="text-sky-400"

/>





<Feature

icon={<Star/>}

title="5-Star Rated"

text="Trusted service"

color="text-yellow-400"

/>





<Feature

icon={<Leaf/>}

title="Eco-Friendly"

text="Waste solutions"

color="text-lime-400"

/>




</motion.div>





</div>


</motion.div>









{/* DESKTOP IMAGE */}



<div

className="
relative

hidden

min-h-[500px]

xl:block

2xl:min-h-[560px]
"

>



<div

className="
absolute

inset-0

overflow-hidden
"

>



<motion.div


key={activeImage}


initial={{
opacity:0
}}


animate={{
opacity:1
}}


transition={{
duration:1
}}


className="
absolute

inset-0
"

>




<motion.div


animate={{
scale:[1,1.08,1],
x:[0,-12,0]
}}


transition={{
duration:18,

repeat:Infinity,

ease:"easeInOut"
}}


className="
absolute

inset-0
"

>



<Image

src={heroImages[activeImage]}

alt="Dumpster rental service"

fill

priority

sizes="55vw"

className="
object-cover
"

/>






{/* PREMIUM OVERLAYS */}



<div

className="
absolute

inset-0

bg-gradient-to-r

from-brand-primary/75

via-brand-primary/25

to-transparent
"

/>





<div

className="
absolute

inset-0

bg-gradient-to-t

from-brand-primary/50

via-transparent

to-transparent
"

/>





</motion.div>





</motion.div>






{/* IMAGE CONTROLS */}



<div

className="
absolute

bottom-6

right-6

flex

gap-2
"

>



{
heroImages.map((_,index)=>(


<button

key={index}

onClick={()=>setActiveImage(index)}

className={`
h-2

rounded-full

transition-all

duration-300


${
activeImage===index

?

"w-8 bg-brand-accent"

:

"w-2 bg-white/60"

}

`}

/>


))

}



</div>







</div>






</div>






</div>



</section>



)



}









function Feature({

icon,

title,

text,

color,

}:{

icon:React.ReactNode;

title:string;

text:string;

color:string;

}){



return (



<motion.div


variants={fadeUp}


className="
flex

items-start

gap-3

min-w-0
"

>



<div

className={`
mt-1

h-6

w-6

shrink-0

${color}
`}

>

{icon}

</div>







<div

className="
min-w-0
"

>



<p

className="
text-sm

font-bold

text-white
"

>

{title}

</p>





<p

className="
text-xs

text-white/60
"

>

{text}

</p>



</div>





</motion.div>



)



}