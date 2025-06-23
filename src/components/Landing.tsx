"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function Landing({ initialState }: { initialState?: string }) {
  const [show, setShow] = useState(initialState ? true : false);
  const [activeSection, setActiveSection] = useState<string | null>(initialState || null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useGSAP(() => {
    gsap.from(".section-content", {
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    });
  }, [activeSection]);

  const menuItems = [{ id: "contacts", label: "contacts" }];

  const sectionContent: any = {
    contacts: {
      title: "contacts",
      text: (
        <>
          Email:{" "}
          <a className="underline" href="mailto:fightforyourinsomnia@gmail.com">
            fightforyourinsomnia@gmail.com
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span className="mb-60 mt-20 text-[0.7rem] italic leading-tight">
            Copyright © 2025 Insomnia Events. All rights reserved.
            <br />
            <br />
            Designed by Elia Orsini and Rino Bellandi.
          </span>
        </>
      ),
    },
  };

  return (
    <div className="h-dvh overflow-clip">
      {/* HEADER */}
      <div
        className={`pointer-events-none absolute left-0 right-0 top-0 z-50 flex flex-col p-4 ${show ? "opacity-0 sm:opacity-100" : "opacity-100"} transition-opacity duration-[1800ms]`}
      >
        <Image
          src="/insomnia-header-image.png"
          unoptimized
          height={180}
          width={180}
          alt="insomnia"
        />
      </div>

      {/* SOCIALS */}
      <div className="absolute bottom-0 left-0 z-30 flex flex-row gap-x-8 p-5">
        <a target="_blank" href="https://www.facebook.com/InsomniaPageOfficial">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
        </a>
        <a target="_blank" href="https://www.instagram.com/insomnia.01">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
        </a>
        <a href="https://open.spotify.com/user/e1ex6sgsk9ocg117lon5jfx9n?si=QEVdTBm9QECsK6X7ORDcRQ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-spotify"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
          </svg>
        </a>
      </div>

      <Transition
        show={show}
        enter="transition-opacity duration-2000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-2000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute z-10">
          <Transition
            show={!activeSection}
            enter="transition-opacity duration-00"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-00"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed right-0 mb-20 w-screen p-4 text-left md:w-[35vw] md:p-10">
              {menuItems.map((item: any) => (
                <button
                  key={item.id}
                  className="mt-3.5 block text-left text-2xl hover:underline"
                  onClick={() => toggleSection(item.id)}
                >
                  {item.label}
                </button>
              ))}

              <p className="relative z-10 mt-7 text-[1.3rem] font-light">
                IN$0MN1A nasce come un modo per esprimersi artisticamente attraverso eventi e
                progetti musicali. <br />
                Il suono di <b>IN$0MN1A</b> è basato sull’Hip-Hop, la Trap e la Bass Music con una
                curatissima selezione musicale. <br />
                La nostra comunicazione cerca di unire due scene, quella hip-hop e quella
                elettronica, utilizzando grafiche scure ma accattivanti e rivisitando l’arte
                classica con la modernità dell’estetica informatica.
              </p>
            </div>
          </Transition>

          {!!activeSection && (
            <div className="section-content">
              <div className="fixed right-0 z-0 h-screen w-screen p-4 md:w-[40vw] md:p-10">
                <p className="mb-6 text-right text-2xl font-black xl:mb-10">
                  {sectionContent[activeSection].title}
                </p>

                <p className="text-sm sm:text-[15px] xl:text-base">
                  {sectionContent[activeSection].text}
                </p>

                <button
                  className="border-1 fixed bottom-16 rounded-xl border border-white bg-black px-2 py-1 text-base font-semibold text-white transition-colors duration-500 hover:border-black hover:bg-white hover:text-black md:text-xl"
                  onClick={() => setActiveSection(null)}
                >
                  go back
                </button>
              </div>

              {sectionContent[activeSection].images && (
                <div className="scrollable no-scrollbar fixed right-[40vw] top-0 mr-3 flex h-screen w-[150px] flex-col space-y-2 overflow-y-scroll py-2 opacity-0 xl:opacity-100">
                  {sectionContent[activeSection].images.map((imgObj: any) => (
                    <div key={Math.random()} className="relative flex w-full flex-col">
                      <Image
                        height={0}
                        width={150}
                        className="h-auto"
                        objectFit="contain"
                        src={imgObj.src}
                        alt=""
                      />
                      {imgObj.alt && <p className="font-base text-center text-xs">{imgObj.alt}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </Transition>

      <div
        className={`fixed left-1/2 top-0 z-0 mx-auto h-screen w-screen -translate-x-1/2 object-cover transition duration-2000 ease-in-out xl:min-h-screen ${
          show ? "scale-[1.3] opacity-40 sm:scale-[1] md:-translate-x-3/4 md:opacity-100" : ""
        }`}
      >
        <video
          className="mx-auto h-screen w-auto"
          src="https://file.garden/Z9sYHRgsSlYoORrC/bot2.mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
        />
      </div>

      <button
        className={`fixed bottom-16 right-6 z-10 flex h-12 w-12 max-w-xl rotate-[270deg] rounded-full border p-0 px-2 font-semibold transition-colors duration-500 hover:cursor-cell xl:bottom-12 xl:right-14 xl:h-16 xl:w-16 ${
          show
            ? "border-white bg-white text-black hover:border-black hover:bg-white hover:text-black"
            : "border-white text-white hover:border-white hover:bg-black hover:text-white"
        }`}
        onClick={() => setShow(!show)}
        aria-label={show ? "Close menu" : "Open menu"}
      >
        <svg
          className={`transition-transform duration-2000 ease-in-out ${show ? "-rotate-90" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          width="100%"
          height="100%"
        >
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      </button>
    </div>
  );
}
