// components/WhyTemporaryDumpsters.tsx

import Image from "next/image";
import {
  DollarSign,
  Truck,
  Star,
  Leaf,
} from "lucide-react";


const benefits = [
  {
    title: "Upfront Pricing",
    subtitle: "No Hidden Fees",
    description:
      "Know your dumpster rental cost before your project starts. We provide clear pricing with no surprise charges or unexpected fees.",
    image: "/upfront.jpg",
    icon: DollarSign,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    accentColor: "text-emerald-600",
    lineColor: "bg-emerald-500",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    title: "Fast Delivery",
    subtitle: "On Your Schedule",
    description:
      "Keep your cleanup moving with dependable dumpster delivery and pickup times designed around your project timeline.",
    image: "/servicesImage.png.webp",
    icon: Truck,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    accentColor: "text-sky-600",
    lineColor: "bg-sky-500",
    hoverBorder: "hover:border-sky-300",
  },
  {
    title: "5-Star Rated",
    subtitle: "Trusted Service",
    description:
      "Customers choose us for reliable service, professional support, and an easy dumpster rental experience from start to finish.",
    image: "/rated.webp",
    icon: Star,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    accentColor: "text-amber-600",
    lineColor: "bg-amber-500",
    hoverBorder: "hover:border-amber-300",
  },
  {
    title: "Eco-Friendly",
    subtitle: "Waste Solutions",
    description:
      "We focus on responsible disposal methods and recycling solutions to help reduce waste and keep communities cleaner.",
    image: "/eco1.webp",
    icon: Leaf,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    accentColor: "text-green-600",
    lineColor: "bg-green-500",
    hoverBorder: "hover:border-green-300",
  },
];



const WhyTemporaryDumpsters = () => {


return (

<section
className="
relative
overflow-hidden
bg-slate-50

px-4
py-10

sm:px-6

lg:px-8

lg:py-24
"
>



{/* BACKGROUND ACCENTS */}


<div
className="
pointer-events-none
absolute

left-[-150px]

top-20

h-[350px]

w-[350px]

rounded-full

bg-brand-primary/10

blur-[120px]
"
/>



<div
className="
pointer-events-none

absolute

right-[-120px]

bottom-20

h-[300px]

w-[300px]

rounded-full

bg-brand-accent/10

blur-[100px]
"
/>





<div
className="
relative

mx-auto

max-w-[1400px]
"
>




{/* HEADER */}


<div
className="
text-center
"
>


<p
className="
mb-2

text-xs

font-black

uppercase

tracking-[0.3em]

text-brand-accent
"
>
Why Choose Us
</p>




<h2
className="
text-3xl

font-black

leading-tight

text-brand-primary

sm:text-4xl
"
>

Why{" "}

<span
className="
text-brand-accent
"
>
Temporary
</span>{" "}

Dumpsters?


</h2>




<div
className="
mx-auto

mt-4

h-1

w-20

rounded-full

bg-brand-accent
"
/>





<p
className="
mx-auto

mt-4

max-w-3xl

text-sm

font-medium

leading-relaxed

text-slate-600

sm:text-base
"
>
Reliable dumpster rentals with transparent pricing, fast delivery,
trusted service, and responsible waste solutions.
</p>


</div>








{/* CARDS */}



<div
className="
mt-8

space-y-5

lg:mt-14

lg:space-y-6
"
>


{
benefits.map((benefit,index)=>{


const Icon = benefit.icon;

const reverse = index % 2 !== 0;



return (


<div

key={benefit.title}

className={`

group

flex

flex-col

overflow-hidden

rounded-2xl

border

border-slate-200

bg-white

shadow-md

transition-all

duration-300

hover:-translate-y-1

hover:shadow-xl

${benefit.hoverBorder}


lg:h-[330px]

lg:flex-row


${reverse ? "lg:flex-row-reverse" : ""}

`}

>



{/* IMAGE */}



<div
className="
relative

h-40

w-full

overflow-hidden

bg-slate-200


sm:h-48


lg:h-full

lg:w-[42%]
"
>


<Image
  src={benefit.image}
  alt={benefit.title}
  fill
  sizes="(max-width: 768px) 100vw, 25vw"
  className="
    object-cover
    transition-transform
    duration-500
    group-hover:scale-110
  "
/>



<div
className="
absolute

inset-0

bg-gradient-to-t

from-brand-primary/60

via-transparent

to-transparent
"
/>



</div>








{/* CONTENT */}



<div
className="
flex

flex-1

items-center

p-5


sm:p-7


lg:p-12
"
>


<div>



<div
className="
mb-3

flex

items-center

gap-3
"
>



<div
className={`
flex

h-9

w-9

items-center

justify-center

rounded-xl

${benefit.iconBg}

${benefit.iconColor}
`}
>


<Icon size={18}/>


</div>





<p
className={`
text-[10px]

font-black

uppercase

tracking-[0.2em]

${benefit.accentColor}
`}
>
{benefit.subtitle}
</p>



</div>






<h3
className="
text-2xl

font-black

text-brand-primary

sm:text-3xl
"
>
{benefit.title}
</h3>





<p
className="
mt-3

text-sm

font-medium

leading-relaxed

text-slate-600

sm:mt-4

sm:text-base
"
>
{benefit.description}
</p>





<div
className={`

mt-4

h-1

w-14

rounded-full

${benefit.lineColor}

sm:mt-6

`}
 />



</div>


</div>



</div>


)


})

}



</div>



</div>


</section>


);

};


export default WhyTemporaryDumpsters;