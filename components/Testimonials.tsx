// components/Testimonials.tsx

"use client";

import {
  Star,
  BadgeCheck,
} from "lucide-react";


const testimonials = [
  {
    name: "Mike R.",
    location: "Residential Customer",
    review:
      "Dumpster arrived exactly when promised and pickup was simple. Pricing was clear with no surprises.",
  },
  {
    name: "Sarah T.",
    location: "Property Manager",
    review:
      "Fast delivery, great communication, and dependable service. We use Temporary Dumpsters for multiple projects.",
  },
  {
    name: "Carlos M.",
    location: "General Contractor",
    review:
      "Professional drivers and reliable scheduling helped keep our construction projects moving on time.",
  },
];



export default function Testimonials() {


return (

<section
className="
relative
overflow-hidden

bg-slate-50

px-4

py-12

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

top-40

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
Customer Reviews
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

Trusted By{" "}

<span
className="
text-brand-accent
"
>
Homeowners
</span>

{" "} & Contractors


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
See why customers choose Temporary Dumpsters for reliable service,
transparent pricing, and hassle-free waste solutions.
</p>



</div>









{/* REVIEWS CONTAINER */}



<div
className="
mt-10

rounded-3xl

border

border-slate-200

bg-white

p-6

shadow-xl

sm:p-8

lg:mt-14

lg:p-10
"
>







{/* TRUST HEADER */}



<div
className="
flex

flex-col

items-center

justify-between

gap-6

border-b

border-slate-200

pb-8

sm:flex-row
"
>


<div>


<p
className="
text-sm

font-bold

text-slate-500
"
>
Excellent
</p>





<div
className="
mt-2

flex

gap-1
"
>


{
[1,2,3,4,5].map((star)=>(


<div
key={star}

className="
flex

h-9

w-9

items-center

justify-center

rounded

bg-[#00B67A]
"
>

<Star
size={20}

className="
fill-white

text-white
"
/>


</div>


))
}


</div>




<p
className="
mt-3

text-xs

font-medium

text-slate-500
"
>
Based on customer reviews
</p>



</div>








<div
className="
flex

items-center

gap-3
"
>


<div
className="
flex

h-12

w-12

items-center

justify-center

rounded-full

bg-green-100
"
>


<BadgeCheck

size={26}

className="
text-green-600
"

/>


</div>





<div>


<p
className="
text-4xl

font-black

text-brand-primary
"
>
4.9
</p>



<p
className="
text-xs

font-bold

uppercase

tracking-[0.2em]

text-slate-500
"
>
Trust Score
</p>



</div>



</div>






</div>









{/* TESTIMONIAL CARDS */}



<div
className="
mt-8

grid

gap-5

lg:grid-cols-3
"
>



{
testimonials.map((testimonial)=>(



<div
key={testimonial.name}

className="
group

rounded-2xl

border

border-slate-200

bg-slate-50

p-5

transition-all

duration-300

hover:-translate-y-1

hover:border-brand-accent/40

hover:shadow-xl
"
>



<div
className="
flex

items-center

justify-between
"
>



<div
className="
flex

gap-1
"
>


{
[1,2,3,4,5].map((star)=>(


<Star

key={star}

size={16}

className="
fill-[#00B67A]

text-[#00B67A]
"

/>


))
}


</div>





<BadgeCheck

size={18}

className="
text-green-600
"

/>



</div>








<p
className="
mt-4

text-sm

font-medium

leading-relaxed

text-slate-600
"
>
"{testimonial.review}"
</p>








<div
className="
mt-5

border-t

border-slate-200

pt-4
"
>



<p
className="
font-black

text-brand-primary
"
>
{testimonial.name}
</p>





<p
className="
text-xs

font-bold

uppercase

tracking-[0.15em]

text-slate-500
"
>
{testimonial.location}
</p>



</div>





</div>



))
}



</div>







</div>






</div>



</section>


);

}