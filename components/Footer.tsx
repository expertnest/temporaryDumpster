"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
} from "lucide-react";



const serviceAreas = [
  {
    state: "Texas",
    cities: [
      "Arlington",
      "Austin",
      "Corpus Christi",
      "Dallas",
      "El Paso",
      "Fort Worth",
      "Houston",
      "Lubbock",
      "Plano",
      "San Antonio",
    ],
  },

  {
    state: "Arizona",
    cities: [
      "Chandler",
      "Mesa",
      "Phoenix",
      "Scottsdale",
      "Tucson",
    ],
  },


  {
    state: "Georgia",
    cities: [
      "Atlanta",
      "Augusta",
    ],
  },


  {
    state: "Florida",
    cities: [
      "Jacksonville",
      "Miami",
      "Orlando",
      "St. Petersburg",
      "Tampa",
    ],
  },


  {
    state: "Colorado",
    cities: [
      "Aurora",
      "Colorado Springs",
      "Denver",
    ],
  },


  {
    state: "North Carolina",
    cities: [
      "Charlotte",
      "Durham",
      "Greensboro",
      "Raleigh",
      "Winston-Salem",
    ],
  },


  {
    state: "Nevada",
    cities: [
      "Henderson",
      "Las Vegas",
      "Reno",
    ],
  },


  {
    state: "Other Locations",
    cities: [
      "Albuquerque, NM",
      "Baltimore, MD",
      "Boston, MA",
      "Chicago, IL",
      "Cincinnati, OH",
      "Cleveland, OH",
      "Detroit, MI",
      "Indianapolis, IN",
      "Kansas City, MO",
      "Nashville, TN",
      "New Orleans, LA",
      "New York, NY",
      "Oklahoma City, OK",
      "Philadelphia, PA",
      "Portland, OR",
      "Seattle, WA",
      "Washington, DC",
    ],
  },

];




const services = [
  "Residential Dumpster Rental",
  "Construction Dumpster Rental",
  "Yard Waste Dumpster Rental",
  "Concrete Dumpster Rental",
  "Roofing Dumpster Rental",
];



const resources = [
  "Weight Calculators",
  "FAQ",
  "Dumpster Sizes",
  "Blog",
];





export default function Footer(){


const [open,setOpen] = useState<string | null>(null);



return (

<footer
className="
relative
overflow-hidden
bg-brand-primary
text-white
"
>



{/* CTA */}


<div
className="
border-b
border-white/10
"
>


<div
className="
mx-auto
flex
max-w-[1400px]
flex-col
gap-6
px-5
py-10

sm:px-8

lg:flex-row
lg:items-center
lg:justify-between
lg:px-12
"
>


<div>


<p
className="
text-xs
font-black
uppercase
tracking-[0.3em]
text-brand-accent
"
>
Need A Dumpster?
</p>



<h2
className="
mt-2
text-3xl
font-black
"
>
Ready To Start Your Cleanup?
</h2>


</div>




<a
href="#"
className="
group

flex
items-center
justify-center
gap-3

rounded-xl

bg-brand-accent

px-7

py-4

font-black

shadow-xl

transition

hover:-translate-y-1
"
>

GET A QUOTE


<ArrowRight
size={18}
className="
transition
group-hover:translate-x-1
"
/>


</a>


</div>


</div>








{/* CONTENT */}


<div
className="
mx-auto

grid

max-w-[1400px]

gap-10

px-5

py-14

sm:px-8

lg:grid-cols-[1.6fr_1fr_1fr_1fr]

lg:px-12
"
>





{/* SERVICE AREAS */}


<div>


<h3
className="
mb-5

text-sm

font-black

uppercase

tracking-[0.25em]
"
>
Service Areas
</h3>




<div
className="
space-y-2
"
>


{
serviceAreas.map((item)=>(


<div
key={item.state}
className="
border-b
border-white/10
pb-2
"
>


<button
onClick={()=>setOpen(
open === item.state
? null
: item.state
)}
className="
flex

w-full

items-center

justify-between

py-2

text-left

text-sm

font-bold

text-white/80

transition

hover:text-brand-accent
"
>


{item.state}



<ChevronDown
size={16}
className={`
transition
${open===item.state
? "rotate-180"
:""
}
`}
/>


</button>




{
open===item.state && (

<div
className="
grid

grid-cols-2

gap-x-4

gap-y-2

pb-3

text-xs

font-medium

text-white/60
"
>

{
item.cities.map(city=>(

<a
key={city}
href="#"
className="
transition
hover:text-brand-accent
"
>
{city}
</a>

))
}


</div>

)

}


</div>


))
}


</div>





<a
href="#"
className="
mt-5

inline-flex

items-center

gap-2

text-sm

font-black

text-brand-accent
"
>
View All Service Areas

<ArrowRight size={16}/>

</a>


</div>









{/* SERVICES */}


<div>


<h3
className="
mb-5

text-sm

font-black

uppercase

tracking-[0.25em]
"
>
Services
</h3>


<ul
className="
space-y-3

text-sm

font-medium

text-white/70
"
>


{
services.map(service=>(

<li
key={service}
className="
transition
hover:text-brand-accent
"
>
{service}
</li>

))
}


</ul>


</div>








{/* RESOURCES */}


<div>


<h3
className="
mb-5

text-sm

font-black

uppercase

tracking-[0.25em]
"
>
Resources
</h3>



<ul
className="
space-y-3

text-sm

font-medium

text-white/70
"
>

{
resources.map(resource=>(

<li
key={resource}
className="
transition
hover:text-brand-accent
"
>
{resource}
</li>

))
}


</ul>


</div>








{/* CONTACT */}


<div>


<h3
className="
mb-5

text-sm

font-black

uppercase

tracking-[0.25em]
"
>
Contact
</h3>




<div
className="
space-y-5

text-sm

font-medium

text-white/70
"
>


<div
className="
flex

items-center

gap-3
"
>

<Phone
size={18}
className="text-brand-accent"
/>

1-800-513-4973

</div>




<div
className="
flex

items-center

gap-3
"
>

<Mail
size={18}
className="text-brand-accent"
/>

sales@temporarydumpster.com

</div>




<div
className="
flex

items-center

gap-3
"
>

<MapPin
size={18}
className="text-brand-accent"
/>

Nationwide Service

</div>



</div>



</div>






</div>








{/* COPYRIGHT */}


<div
className="
border-t
border-white/10
"
>


<div
className="
mx-auto

flex

max-w-[1400px]

flex-col

gap-4

px-5

py-6

text-xs

font-medium

text-white/50

sm:px-8

lg:flex-row

lg:justify-between

lg:px-12
"
>


<p>
©2026 Temporary Dumpster, Temporary Dumpster LLC, and TemporaryDumpster.com All Rights Reserved
</p>




<div
className="
flex

flex-wrap

gap-4
"
>

<a href="#">
Privacy Policy
</a>

<a href="#">
Terms and Conditions
</a>

<a href="#">
Terms for Operators
</a>


</div>


</div>


</div>



</footer>

)

}