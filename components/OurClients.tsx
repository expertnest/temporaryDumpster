// components/OurClients.tsx

"use client";

import Image from "next/image";

const clients = [
  {
    name: "Client One",
    logo: "/client_1.webp",
  },
  {
    name: "Client Two",
    logo: "/client_2.webp",
  },
  {
    name: "Client Three",
    logo: "/client_3.webp",
  },
  {
    name: "Client Four",
    logo: "/client_4.webp",
  },
  {
    name: "Client Five",
    logo: "/client_5.webp",
  },
];

export default function OurClients() {
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

      lg:py-8
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
            Our Clients
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
              Industry Leaders
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

            text-slate-600

            sm:text-base
            "
          >
            Businesses across construction, commercial, and residential
            industries trust Temporary Dumpsters for dependable waste
            solutions.
          </p>




        </div>









        {/* CLIENT LOGOS */}



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






          <div
            className="
            grid

            grid-cols-2

            gap-5

            sm:grid-cols-3

            lg:grid-cols-5
            "
          >




            {clients.map((client) => (



              <div
                key={client.name}

                className="
                group

                relative

                flex

                h-28

                items-center

                justify-center

                overflow-hidden

                rounded-2xl

                border

                border-slate-200

                bg-slate-50

                p-5

                transition-all

                duration-300

                hover:-translate-y-1

                hover:border-brand-accent/40

                hover:bg-white

                hover:shadow-xl
                "
              >





                {/* SHINE EFFECT */}



                <div
                  className="
                  pointer-events-none

                  absolute

                  inset-0

                  translate-x-[-120%]

                  bg-gradient-to-r

                  from-transparent

                  via-white/70

                  to-transparent

                  transition-transform

                  duration-700

                  group-hover:translate-x-[120%]
                  "
                />







                <Image
                  src={client.logo}

                  alt={client.name}

                  width={220}

                  height={110}

                  className="
                  relative

                  max-h-16

                  w-auto

                  object-contain

                  transition-transform

                  duration-300

                  group-hover:scale-110
                  "
                />





              </div>




            ))}




          </div>







        </div>







      </div>







    </section>
  );
}