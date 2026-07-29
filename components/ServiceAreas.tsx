"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MapPin,
  ChevronDown,
  Truck,
  CheckCircle,
} from "lucide-react";


const areas = [
  {
    state:"Texas",
    cities:[
      "Arlington",
      "Austin",
      "Dallas",
      "Fort Worth",
      "Houston",
      "Plano",
      "San Antonio",
    ],
  },
  {
    state:"Georgia",
    cities:[
      "Atlanta",
      "Augusta",
    ],
  },
  {
    state:"Florida",
    cities:[
      "Jacksonville",
      "Miami",
      "Orlando",
      "Tampa",
    ],
  },
  {
    state:"Arizona",
    cities:[
      "Chandler",
      "Mesa",
      "Phoenix",
      "Scottsdale",
      "Tucson",
    ],
  },
  {
    state:"Colorado",
    cities:[
      "Aurora",
      "Colorado Springs",
      "Denver",
    ],
  },
  {
    state:"North Carolina",
    cities:[
      "Charlotte",
      "Durham",
      "Greensboro",
      "Raleigh",
    ],
  },
  {
    state:"Ohio",
    cities:[
      "Cincinnati",
      "Cleveland",
      "Columbus",
    ],
  },
  {
    state:"National Coverage",
    cities:[
      "Chicago",
      "Boston",
      "New York",
      "Philadelphia",
      "Seattle",
      "Washington DC",
    ],
  },
];




export default function ServiceAreas(){


const [openArea,setOpenArea] = useState<string | null>(null);



return (

<section
className="
relative
overflow-hidden

bg-brand-primary

px-4

pt-12
pb-10
-mt-4
md:mt-0
sm:px-6

lg:px-8

lg:pt-16
lg:pb-14
"
>





{/* SOFT GLOWS */}


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

bottom-0

h-[300px]

w-[300px]

rounded-full

bg-brand-accent/10

blur-[110px]
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
mb-8

text-center
lg:py-14
"
>


<p
className="
text-xs

font-bold

uppercase

tracking-[0.25em]

text-white
"
>
Service Areas
</p>





<h2
className="
mx-auto

mt-2

max-w-4xl

text-3xl

font-black

leading-tight

text-white

sm:text-4xl
"
>

Serving {""}

<span
className="
text-brand-accent
"
>
Cities 
</span>{" "}

<span
className=""

>
Across the United States
</span>


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

text-white

sm:text-base
"
>
From residential cleanouts to commercial construction projects, our dumpster rental services help communities keep projects moving.
</p>




</div>

{/* MAIN CONTENT */}


<div
className="
grid

items-start

gap-8

lg:grid-cols-[350px_1fr]
"
>







{/* IMAGE */}



<div
className="
relative

h-[300px]

overflow-hidden

rounded-3xl

shadow-xl


lg:h-[400px]
"
>


<Image
src="/delivery.jpg"

alt="Dumpster rental service areas"

fill

className="
object-cover
"
/>




<div
className="
absolute

inset-0

bg-gradient-to-t

from-brand-primary/90

via-brand-primary/20

to-transparent
"
/>






<div
className="
absolute

bottom-6

left-6

right-6
"
>


<p
className="
text-xs

font-bold

uppercase

tracking-[0.2em]

text-brand-accent
"
>
Nationwide Coverage
</p>




<h3
className="
mt-2

text-2xl

font-black

leading-tight

text-white
"
>
Reliable Dumpster Rentals Wherever You Need Us
</h3>



</div>




</div>






{/* CONTENT */}


<div>










{/* STATS */}


<div
className="
 

grid

gap-3

sm:grid-cols-3
"
>





<div
className="
rounded-2xl

border

border-slate-200

bg-white

p-4

shadow-md

transition

hover:-translate-y-1

hover:shadow-lg
"
>


<Truck
size={22}

className="text-brand-accent"
/>



<p
className="
mt-2

text-sm

font-black

text-brand-primary
"
>
Fast Delivery
</p>


<p
className="
mt-1

text-xs

font-medium

text-slate-500
"
>
Quick drop-off & pickup
</p>


</div>







<div
className="
rounded-2xl

border

border-slate-200

bg-white

p-4

shadow-md

transition

hover:-translate-y-1

hover:shadow-lg
"
>


<MapPin
size={22}

className="text-brand-accent"
/>




<p
className="
mt-2

text-sm

font-black

text-brand-primary
"
>
75+ Areas
</p>



<p
className="
mt-1

text-xs

font-medium

text-slate-500
"
>
Nationwide coverage
</p>



</div>








<div
className="
rounded-2xl

border

border-slate-200

bg-white

p-4

shadow-md

transition

hover:-translate-y-1

hover:shadow-lg
"
>


<CheckCircle
size={22}

className="text-brand-accent"
/>




<p
className="
mt-2

text-sm

font-black

text-brand-primary
"
>
Reliable Service
</p>




<p
className="
mt-1

text-xs

font-medium

text-slate-500
"
>
Trusted solutions
</p>



</div>




</div>








 


{/* AREAS */}


<div
className="
mt-6

grid

gap-4

sm:grid-cols-2

items-start
"
>


<div
className="
space-y-4
"
>


{
areas
.slice(0, Math.ceil(areas.length / 2))
.map((area)=>(

<AreaCard

key={area.state}

state={area.state}

cities={area.cities}

open={openArea === area.state}

onToggle={() =>
setOpenArea(
openArea === area.state
? null
: area.state
)
}

/>

))
}


</div>





<div
className="
space-y-4
"
>


{
areas
.slice(Math.ceil(areas.length / 2))
.map((area)=>(

<AreaCard

key={area.state}

state={area.state}

cities={area.cities}

open={openArea === area.state}

onToggle={() =>
setOpenArea(
openArea === area.state
? null
: area.state
)
}

/>

))
}


</div>



</div>





</div>






</div>


</div>


</section>


)

}









function AreaCard({
state,
cities,
open,
onToggle,
}:{
state:string;
cities:string[];
open:boolean;
onToggle:()=>void;
}){


return (

<div
className="
relative

group

rounded-2xl

border

border-slate-200

bg-white

shadow-md

transition

hover:-translate-y-1

hover:border-brand-accent/40

hover:shadow-xl
"
>





<button

onClick={onToggle}

className="
flex

w-full

items-center

justify-between

p-4

text-left
"

>




<div>


<h3
className="
text-base

font-black

text-brand-primary
"
>
{state}
</h3>




<p
className="
mt-1

text-[10px]

font-bold

uppercase

tracking-[0.2em]

text-brand-accent
"
>
Dumpster Rentals
</p>



</div>





<div
className="
flex

h-8

w-8

items-center

justify-center

rounded-full

bg-slate-100
"
>


<ChevronDown

size={18}

className={`
text-brand-accent

transition-transform

duration-300

${open ? "rotate-180" : ""}
`}

/>


</div>




</button>








{
open && (

<div
className="
border-t

border-slate-100

bg-slate-50/50

p-4
"
>


<div
className="
grid

gap-2

sm:grid-cols-2
"
>



{
cities.map((city)=>(


<div
key={city}

className="
flex

items-center

gap-2

rounded-lg

bg-white

px-3

py-2

text-sm

font-semibold

text-slate-600

shadow-sm
"
>


<MapPin

size={14}

className="text-brand-accent"

/>



{city}



</div>


))
}



</div>


</div>


)

}



</div>

)

}