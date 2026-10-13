import { useEffect, useRef, useState } from "react";
import "./index.css";
import "./style.css"

const vehicles = [
  {
    name: "Sedan",
    count: "(6 Cars)",
    image:
      "https://stackbros.in/bookinga/landing/assets/images/category/cab/seadan.svg",
  },
  {
    name: "Micro",
    count: "(8 Cars)",
    image:
      "https://stackbros.in/bookinga/landing/assets/images/category/cab/micro.svg",
  },
  {
    name: "CUV",
    count: "(4 Cars)",
    image:
      "https://stackbros.in/bookinga/landing/assets/images/category/cab/suv-2.svg",
  },
  {
    name: "SUV",
    count: "(5 Cars)",
    image:
      "https://stackbros.in/bookinga/landing/assets/images/category/cab/suv.svg",
  },
  {
    name: "Pick up",
    count: "(3 Pickup Truck)",
    image:
      "https://stackbros.in/bookinga/landing/assets/images/category/cab/pickup.svg",
  },
  {
    name: "Coupe",
    count: "(9 Cars)",
    image:
      "https://stackbros.in/bookinga/landing/assets/images/category/cab/coupe.svg",
  },
];

const features = [
  {
    icon: "fa-bolt",
    color: "purple",
    title: "Advance Booking",
    text: "Happiness prosperous impression had conviction For every delay in they Extremity now.",
  },
  {
    icon: "fa-leaf",
    color: "green",
    title: "Economical Trip",
    text: "Extremity now strangers contained breakfast him discourse additions Sincerity.",
  },
  {
    icon: "fa-futbol",
    color: "yellow",
    title: "Secure and Safer",
    text: "Perpetual extremity now strangers contained breakfast him discourse additions.",
  },
  {
    icon: "fa-car",
    color: "red",
    title: "Vehicle Options",
    text: "The Prosperous impression had conviction For every delay in they Extremity now.",
  },
  {
    icon: "fa-wifi",
    color: "orange",
    title: "Cab Entertainment",
    text: "Extremity now strangers contained breakfast him discourse additions Sincerity.",
  },
  {
    icon: "fa-wheelchair",
    color: "blue",
    title: "Polite Driver",
    text: "Perpetual extremity now strangers contained breakfast him discourse additions.",
  },
];

const faqs = [
  {
    question: "How Does it Work?",
    answer:
      "Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
  },
  {
    question: "What are monthly tracked users?",
    answer:
      "What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.",
  },
  {
    question: "What if I go with my prepaid monthly",
    answer:
      "Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
  },
  {
    question: "What's the difference between cabs and taxi",
    answer:
      "What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. At the moment, we only accept Credit/Debit cards and Paypal payments. Paypal is the easiest way to make payments online. While checking out your order. Be sure to fill in correct details for fast & hassle-free payment processing.",
  },
  {
    question: "How can I check the fare for my Booking ride?",
    answer:
      "Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
  },
  {
    question: "Do and Don'ts - Tips for a Safe Trip",
    answer:
      "Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
  },
];

function App() {
  const [tripType, setTripType] = useState("oneway");
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");

  const [pickupOpen, setPickupOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const pickupRef = useRef(null);
  const dropRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        pickupRef.current &&
        !pickupRef.current.contains(event.target)
      ) {
        setPickupOpen(false);
      }

      if (
        dropRef.current &&
        !dropRef.current.contains(event.target)
      ) {
        setDropOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const featureIconClasses = {
    purple: "bg-[#eee9ff] text-[#7357d8]",
    green: "bg-[#e8f8ef] text-[#22a45d]",
    yellow: "bg-[#fff6d9] text-[#e5ad00]",
    red: "bg-[#ffe9e8] text-[#e44a42]",
    orange: "bg-[#fff0e3] text-[#ef8734]",
    blue: "bg-[#e6f7f9] text-[#17a2b8]",
  };

  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif] text-[#0b0b12]">
   
      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <header
        className={`relative z-[9999] w-full bg-white ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div
          className="
            nav-container
            mx-auto flex h-[88px] w-full max-w-[1100px]
            items-center
            px-0
          
            max-[991px]:h-[65px]
            max-[991px]:w-[calc(100%-45px)]
            max-[991px]:max-w-none
            max-[991px]:px-0
            max-[600px]:w-[calc(100%-24px)]
          "
        >

          {/* ================= LOGO ================= */}

          <div className="flex items-center">
            <img
              src="https://stackbros.in/bookinga/landing/assets/images/logo.svg"
              alt="Booking"
              className="
                block h-[80px] w-[120px] object-contain

                max-[991px]:h-[65px]
                max-[991px]:w-[120px]
              "
            />
            {/* HAMBURGER */}
<button
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  className="
    hidden h-[42px] w-[42px]
    items-center justify-center
    border-0
    bg-transparent
    text-[22px]
    text-[#202124]
    max-[991px]:flex
  "
>
  <i
    className={
      menuOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars"
    }
  />
</button>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <nav
            className=" main-nav
              ml-2 hidden items-center gap-3 whitespace-nowrap
              min-[992px]:flex
            "
          >

            {/* LISTINGS */}

            <div className="group relative flex h-full items-center">
              <button
                type="button"
                className="
                  flex items-center gap-2
                  border-0 bg-transparent
                  px-2 py-2
                  text-[16px] font-semibold
                  text-[#2e3344]
                  transition
                  hover:text-[#4c4ed3]
                "
              >
                Listings
                <i className="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div
                className="
                  absolute left-0 top-[calc(100%+5px)]
                  z-[99999]
                  hidden min-w-[210px]
                  rounded-[8px]
                  border border-[#eee]
                  bg-white
                  py-2
                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  group-hover:block
                "
              >
                {[
                  "Hotel",
                  "Flight",
                  "Tour",
                  "Cab",
                  "Directory",
                  "Add Listing",
                  "Hero",
                  "Booking Confirmed",
                  "Compare Location",
                  "Offer Details",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="
                      mx-2 ml-4 block
                      w-[calc(100%-30px)]
                      rounded-[6px]
                      px-3 py-[5px]
                      text-[16px] ! font-semibold
                      text-[#6e6d6d]
                      transition
                      hover:bg-[rgb(208,208,240)]
                      hover:text-[#4c4ed3]
                    "
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* PAGES */}

            <div className="group relative flex h-full items-center">
              <button
                type="button"
                className="
                  flex items-center gap-2
                  border-0 bg-transparent
                  px-2 py-2
                  text-[16px] font-semibold
                  text-[#2e3344]
                  transition
                  hover:text-[#4c4ed3]
                "
              >
                Pages
                <i className="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div
                className="
                  absolute left-0 top-[calc(100%+5px)]
                  z-[99999]
                  hidden min-w-[210px]
                  rounded-[8px]
                  border border-[#eee]
                  bg-white
                  py-2
                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  group-hover:block
                "
              >
                {[
                  "About",
                  "Contact",
                  "Contact 2",
                  "Our Team",
                  "Authentication",
                  "Blog",
                  "Pricing",
                  "FAQs",
                  "Error 404",
                  "Coming Soon",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="
                      mx-2 ml-4 block
                      w-[calc(100%-30px)]
                      rounded-[6px]
                      px-3 py-[5px]
                      text-[16px] font-semibold
                      text-[#6e6d6d]
                      transition
                      hover:bg-[rgb(208,208,240)]
                      hover:text-[#4c4ed3]
                    "
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* ACCOUNTS */}

            <div className="group relative flex h-full items-center">
              <button
                type="button"
                className="
                  flex items-center gap-2
                  border-0 bg-transparent
                  px-2 py-2
                  text-[16px] font-semibold
                  text-[#2e3344]
                  transition
                  hover:text-[#4c4ed3]
                "
              >
                Accounts
                <i className="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div
                className="
                  absolute left-0 top-[calc(100%+5px)]
                  z-[99999]
                  hidden min-w-[210px]
                  rounded-[8px]
                  border border-[#eee]
                  bg-white
                  py-2
                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                  group-hover:block
                "
              >
                {[
                  "User Profile",
                  "Agent Dashboard",
                  "Master Admin",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="
                      mx-2 ml-4 block
                      w-[calc(100%-30px)]
                      rounded-[6px]
                      px-3 py-[5px]
                      text-[16px] font-semibold
                      text-[#6e6d6d]
                      transition
                      hover:bg-[rgb(208,208,240)]
                      hover:text-[#4c4ed3]
                    "
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* ================= BOOKING TYPES ================= */}
          <div className="ml-auto flex items-center gap-5 min-[992px]:translate-x-[20px]">
          <div
            className="booking-types
              ml-auto hidden items-center gap-[10px]
              whitespace-nowrap
              min-[992px]:flex
              min-[992px]:translate-x-[10px]
            "
          >
            {/* HOTEL */}

            <a
              href="#"
              className="
                flex items-center gap-[6px]
                rounded-[6px]
                px-[10px] py-2
                text-[16px] font-semibold
                text-[#2e3344]
                transition
                hover:bg-[rgb(230,227,255)]
                hover:text-[#4c4ed3]
              "
            >
              <i className="fa-solid fa-hotel text-[15px]" />
              Hotel
            </a>

            {/* FLIGHT */}

            <a
              href="#"
              className="
                flex items-center gap-[6px]
                rounded-[6px]
                px-[10px] py-2
                text-[16px] font-semibold
                text-[#2e3344]
                transition
                hover:bg-[rgb(230,227,255)]
                hover:text-[#4c4ed3]
              "
            >
              <i className="fa-solid fa-plane text-[15px]" />
              Flight
            </a>

            {/* TOUR */}

            <a
              href="#"
              className="
                flex items-center gap-[6px]
                rounded-[6px]
                px-[10px] py-2
                text-[16px] font-semibold
                text-[#2e3344]
                transition
                hover:bg-[rgb(230,227,255)]
                hover:text-[#4c4ed3]
              "
            >
              <i className="fa-solid fa-earth-americas text-[15px]" />
              Tour
            </a>

            {/* CAB ACTIVE */}

            <a
              href="#"
              className="
                flex items-center gap-[6px]
                rounded-[11px]
                bg-[rgb(230,227,255)]
                px-[10px] py-2
                text-[16px] font-semibold
                text-[#7476e7]
                transition
                hover:bg-[rgb(230,227,255)]
                hover:text-[#4c4ed3]
              "
            >
              <i className="fa-solid fa-car text-[15px]" />
              Cab
            </a>
          </div>

          {/* ================= MOBILE CATEGORY ================= */}

          <div
            className="
              group relative ml-auto
              min-[992px]:hidden
            "
          >
            <span
              className="
                cursor-pointer pb-1
                text-[15px] font-medium
                text-[#2e3344]
              "
            >
              Category ▾
            </span>

            <div
              className="
                absolute right-0 top-full
                z-[9999]
                hidden min-w-[140px]
                rounded-[6px]
                bg-white py-2
                shadow-[0_5px_15px_rgba(0,0,0,0.12)]
                group-hover:flex
                group-hover:flex-col
              "
            >
              <a
                href="#"
                className="
                  mx-2 flex items-center gap-2
                  rounded-[4px]
                  px-[14px] py-2
                  text-[16px] text-[#333]
                  hover:bg-[#eef0ff]
                  hover:text-[#4c4ed3]
                "
              >
                <i className="fa-solid fa-hotel" />
                Hotel
              </a>

              <a
                href="#"
                className="
                  mx-2 flex items-center gap-2
                  rounded-[4px]
                  px-[14px] py-2
                  text-[14px] text-[#333]
                  hover:bg-[#eef0ff]
                  hover:text-[#4c4ed3]
                "
              >
                <i className="fa-solid fa-plane" />
                Flight
              </a>

              <a
                href="#"
                className="
                  mx-2 flex items-center gap-2
                  rounded-[4px]
                  px-[14px] py-2
                  text-[14px] text-[#333]
                  hover:bg-[#eef0ff]
                  hover:text-[#4c4ed3]
                "
              >
                <i className="fa-solid fa-globe" />
                Tour
              </a>

              <a
                href="#"
                className="
                  mx-2 flex items-center gap-2
                  rounded-[4px]
                  px-[14px] py-2
                  text-[14px] text-[#333]
                  hover:bg-[#eef0ff]
                  hover:text-[#4c4ed3]
                "
              >
                <i className="fa-solid fa-car" />
                Cab
              </a>
            </div>
          </div>

          {/* ================= HEADER ACTIONS ================= */}

          <div
            className="
              nav-actions
              min-[992px]:translate-x-[10px]
              flex items-center gap-5
              
            "
          >

            {/* NOTIFICATION */}

            <button
              type="button"
              className="
                relative flex h-[42px] w-[42px]
                items-center justify-center
                rounded-[8px]
                border-0
                bg-[#f5f5f7]
                text-[#202124]
                transition
                hover:bg-[#e5e5e7]
                max-[600px]:hidden
              "
            >
              <i className="fa-regular fa-bell text-[16px]" />

              <span
                className="
                  absolute right-[2px] top-[1px]
                  h-[10px] w-[10px]
                  animate-pulse
                  rounded-full
                  bg-[#da3b32]
                "
              />
            </button>

            {/* AVATAR */}

            <button
              type="button"
              className="
                h-[42px] w-[42px]
                overflow-hidden
                rounded-[8px]
                border-0
                bg-transparent
                p-0
              "
            >
              <img
                src="https://stackbros.in/bookinga/landing/assets/images/avatar/01.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </button>
          </div>
        </div>
        </div>
      {menuOpen && (
  <div
    className="
      absolute left-[10px] right-[10px] top-[67px]
      z-[1000]
      flex w-full flex-col items-start
      rounded-[10px]
      bg-white
      p-4
      shadow-[0_10px_35px_rgba(0,0,0,0.1)]
      min-[992px]:hidden
    "
  >

    {/* LISTINGS */}
    <details className="w-full">
      <summary
        className="
          cursor-pointer
          list-none
          py-2
          font-['DM_Sans']
          leading-normal
          text-[16px] font-semibold
          text-[#2e3344]
          hover:text-[#4c4ed3]
        "
      >
        Listings
      </summary>

      <div className="pb-2 pl-4">
        {[
          "Hotel",
          "Flight",
          "Tour",
          "Cab",
          "Directory",
          "Add Listing",
          "Hero",
          "Booking Confirmed",
          "Compare Location",
          "Offer Details",
        ].map((item) => (
          <a
  key={item}
  href="#"
  className="
    block
    w-[calc(100%-10px)]
    rounded-[6px]
    px-3
    py-[6px]
    text-[16px] font-semibold
    text-[#6e6d6d]
    transition
    hover:bg-[rgb(208,208,240)]
    hover:text-[#4c4ed3]
  "
>
  {item}
</a>
        ))}
      </div>
    </details>

    {/* PAGES */}
    <details className="w-full">
      <summary
        className="
          cursor-pointer
          list-none
          py-2
          font-['DM_Sans']
          leading-normal
          text-[16px] font-semibold
          text-[#2e3344]
          hover:text-[#4c4ed3]
        "
      >
        Pages
      </summary>

      <div className="pb-2 pl-4">
        {[
          "About",
          "Contact",
          "Contact 2",
          "Our Team",
          "Authentication",
          "Blog",
          "Pricing",
          "FAQs",
          "Error 404",
          "Coming Soon",
        ].map((item) => (
         <a
  key={item}
  href="#"
  className="
    block
    w-[calc(100%-10px)]
    rounded-[6px]
    px-3
    py-[6px]
    text-[16px] font-semibold
    text-[#6e6d6d]
    transition
    hover:bg-[rgb(208,208,240)]
    hover:text-[#4c4ed3]
  "
>
  {item}
</a>
        ))}
      </div>
    </details>

    {/* ACCOUNTS */}
    <details className="w-full">
      <summary
        className="
          cursor-pointer
          list-none
          py-2
          font-['DM_Sans']
          text-[16px] font-semibold
          leading-normal
          text-[#2e3344]
          hover:text-[#4c4ed3]
        "
      >
        Accounts
      </summary>

      <div className="pb-2 pl-4">
        {[
          "User Profile",
          "Agent Dashboard",
          "Master Admin",
        ].map((item) => (
          <a
  key={item}
  href="#"
  className="
    block
    w-[calc(100%-10px)] 
    rounded-[6px]
    px-3
    py-[6px]
    text-[16px] font-semibold
    text-[#6e6d6d]
    transition
    hover:bg-[rgb(208,208,240)]
    hover:text-[#4c4ed3]
  "
>
  {item}
</a>
        ))}
      </div>
    </details>

  </div>
)} 
</header>

      {/* ========================================================= */}
      {/* MAIN */}
      {/* ========================================================= */}

      <main id="home">

        {/* ================= HERO ================= */}

<section
  className="
    relative mx-auto
    mt-[40px] mb-[100px]
    h-[520px] w-full max-w-[1100px]
    rounded-[18px]

    max-[991px]:mt-[15px]
    max-[991px]:mb-[45px]
    max-[991px]:h-[670px]
    max-[991px]:w-[calc(100%-5px)]
    max-[991px]:max-w-none

    max-[600px]:w-[calc(100%-24px)]
    max-[600px]:mx-auto
    max-[600px]:mt-[15px]
    max-[600px]:mb-[25px]
    max-[991px]:translate-x-0
    translate-x-[5px]
  "
>
  {/* HERO IMAGE — booking card se alag */}
  <div
    className="
      absolute right-[-20px] top-0
      h-full w-[83%]
      rounded-[18px]
      bg-cover bg-[75%_center]
      bg-[url('https://stackbros.in/bookinga/landing/assets/images/bg/03.jpg')]
      translate-x-[-15px]

      max-[991px]:right-0
      max-[991px]:translate-x-0
      max-[991px]:h-[450px]
      max-[991px]:w-[calc(100%-30px)]
      max-[991px]:left-1/2
      max-[991px]:-translate-x-1/2

      max-[600px]:h-[430px]
      max-[600px]:w-[calc(100%-24px)]
      max-[600px]:rounded-[14px]
    "
  />

  {/* BOOKING CARD  */}
  <div
    className="
      absolute left-[10px] top-1/2
      z-[5] w-[450px]
      -translate-y-1/2
      rounded-[18px] bg-white p-6
      shadow-[0_15px_40px_rgba(0,0,0,0.10)]

      max-[991px]:left-1/2
      max-[991px]:top-[225px]
      max-[991px]:w-[calc(100%-30px)]
      max-[991px]:max-w-[460px]
      max-[991px]:-translate-x-1/2
      max-[991px]:-translate-y-0
      max-[991px]:p-[24px]

      max-[600px]:top-[215px]
      max-[600px]:w-[320px]
      max-[600px]:max-w-[calc(100%-30px)]
      max-[600px]:rounded-[14px]
      max-[600px]:p-[14px]
    "
  >
    <h1 className="mb-[14px] text-[22px] font-extrabold">
      Book Your Online Cab
    </h1>

    <div className="mb-[25px] h-px bg-[#e7e7e7]" />

    {/* TRIP TYPE */}
    <div className="mb-[28px] flex items-center gap-[25px]">
      <label className="flex items-center gap-[9px] text-[16px] text-[#303039]">
        <input
          type="radio"
          checked={tripType === "oneway"}
          onChange={() => setTripType("oneway")}
          className="h-[18px] w-[18px] accent-[#4c4ed3]"
        />
        One Way
      </label>

      <label className="flex items-center gap-[9px] text-[16px] text-[#303039]">
        <input
          type="radio"
          checked={tripType === "roundtrip"}
          onChange={() => setTripType("roundtrip")}
          className="h-[18px] w-[18px] accent-[#4c4ed3]"
        />
        Round Trip
      </label>
    </div>

    {/* LOCATION SEARCH */}
    <div
      className="
        grid grid-cols-[1fr_55px_1fr]
        items-center gap-0
        max-[600px]:grid-cols-1
        max-[600px]:gap-[10px]
      "
    >
      {/* PICKUP */}
      <div className="relative min-w-0" ref={pickupRef}>
        <label
          className="
            relative z-[2] ml-[15px] -mb-px
            block w-max bg-white px-[3px]
            text-[13px] text-[#777983]
          "
        >
          Pickup Location
        </label>

        <div
          className="
            relative flex h-[50px] w-full
            cursor-text items-center
            rounded-[8px] border border-[#e1e1e5]
            bg-white transition
            hover:border-[#c7c7cd]
            focus-within:border-[#4c4ed3]
            focus-within:shadow-[0_0_0_3px_rgba(33,111,237,0.08)]
          "
          onClick={() => setPickupOpen(!pickupOpen)}
        >
          <i className="fa-solid fa-location-dot ml-[14px] mr-[10px] shrink-0 text-[15px] text-[#292a3f]" />

          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            placeholder="Enter pickup location"
            className="
              h-full w-full border-0 bg-transparent
              pr-[38px] text-[14px] text-[#202124]
              outline-none placeholder:text-[#999aa1]
            "
          />
        </div>

        {pickupOpen && (
          <div
            className="
              absolute left-0 right-0 top-[calc(100%+7px)]
              z-[10000] overflow-hidden rounded-[10px]
              border border-[#e5e5e8] bg-white
              shadow-[0_12px_35px_rgba(0,0,0,0.12)]
            "
          >
            <div
              className="
                flex min-h-[60px] cursor-pointer items-center
                gap-3 border-b border-[#eeeeef]
                px-[13px] py-[10px] transition
                hover:bg-[#f7f9fc]
              "
              onMouseDown={() => {
                setPickupLocation("Current Location");
                setPickupOpen(false);
              }}
            >
              <i className="fa-solid fa-location-crosshairs text-[#292a3f]" />
              <div>
                <strong className="block text-[13px] font-semibold text-[#222329]">
                  Current Location
                </strong>
                <small className="mt-[3px] block text-[11px] text-[#92939a]">
                  Use your current location
                </small>
              </div>
            </div>

            {pickupLocation && (
              <div
                className="
                  flex min-h-[60px] cursor-pointer items-center
                  gap-3 px-[13px] py-[10px] transition
                  hover:bg-[#f7f9fc]
                "
                onMouseDown={() => setPickupOpen(false)}
              >
                <i className="fa-solid fa-magnifying-glass text-[#292a3f]" />
                <div>
                  <strong className="block text-[13px] font-semibold text-[#222329]">
                    {pickupLocation}
                  </strong>
                  <small className="mt-[3px] block text-[11px] text-[#92939a]">
                    Use this location
                  </small>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* SWAP BUTTON */}
      <button
        type="button"
        className="
          mt-[23px] flex h-[38px] w-[38px] shrink-0
          translate-x-[10px] items-center justify-center
          rounded-full border border-[#dedee3] bg-white
          text-[#19192b] transition
          hover:rotate-180 hover:border-[#2a2a41]
          hover:bg-[#2a2a2a] hover:text-white
          max-[600px]:mx-auto max-[600px]:mt-0
          max-[600px]:rotate-90
        "
        onClick={() => {
          const oldPickup = pickupLocation;
          setPickupLocation(dropLocation);
          setDropLocation(oldPickup);
        }}
      >
        <i className="fa-solid fa-right-left text-[13px]" />
      </button>

      {/* DROP */}
      <div ref={dropRef} className="relative min-w-0">
        <label
          className="
            relative z-[2] ml-[15px] -mb-px
            block w-max bg-white px-[3px]
            text-[13px] text-[#777983]
            max-[600px]:-translate-y-[12px]
          "
        >
          Drop
        </label>

        <div
          className="
            relative flex h-[50px] w-full cursor-text
            items-center rounded-[8px]
            border border-[#e1e1e5] bg-white transition
            max-[600px]:-translate-y-[12px]
            hover:border-[#c7c7cd]
            focus-within:border-[#4c4ed3]
            focus-within:shadow-[0_0_0_3px_rgba(33,111,237,0.08)]
          "
        >
          <i className="fa-solid fa-location-dot ml-[14px] mr-[10px] shrink-0 text-[15px] text-[#292a3f]" />

          <input
            type="text"
            value={dropLocation}
            placeholder="Search location"
            autoComplete="off"
            onFocus={() => {
              setDropOpen(true);
              setPickupOpen(false);
            }}
            onChange={(e) => {
              setDropLocation(e.target.value);
              setDropOpen(true);
            }}
            className="
              h-full w-full border-0 bg-transparent
              pr-[38px] text-[14px] text-[#202124]
              outline-none placeholder:text-[#999aa1]
            "
          />
        </div>

        {dropOpen && (
          <div
            className="
              absolute left-0 right-0 top-[calc(100%+7px)]
              z-[10000] overflow-hidden rounded-[10px]
              border border-[#e5e5e8] bg-white
              shadow-[0_12px_35px_rgba(0,0,0,0.12)]
            "
          >
            <div
              className="
                flex min-h-[60px] cursor-pointer items-center
                gap-3 border-b border-[#eeeeef]
                px-[13px] py-[10px] transition
                hover:bg-[#f7f9fc]
              "
              onMouseDown={() => {
                setDropLocation("Current Location");
                setDropOpen(false);
              }}
            >
              <i className="fa-solid fa-location-crosshairs text-[#292a3f]" />
              <div>
                <strong className="block text-[13px] font-semibold text-[#222329]">
                  Use current location
                </strong>
                <small className="mt-[3px] block text-[11px] text-[#92939a]">
                  Detect your location
                </small>
              </div>
            </div>

            {dropLocation && (
              <div
                className="
                  flex min-h-[60px] cursor-pointer items-center
                  gap-3 px-[13px] py-[10px] transition
                  hover:bg-[#f7f9fc]
                "
                onMouseDown={() => setDropOpen(false)}
              >
                <i className="fa-solid fa-magnifying-glass text-[#292a3f]" />
                <div>
                  <strong className="block text-[13px] font-semibold text-[#222329]">
                    {dropLocation}
                  </strong>
                  <small className="mt-[3px] block text-[11px] text-[#92939a]">
                    Use this location
                  </small>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>

    {/* DATE + TIME */}
    <div
      className="
        mt-[22px] grid grid-cols-2 gap-[28px]
        max-[600px]:grid-cols-1 max-[600px]:gap-[15px]
      "
    >
      <div className="relative">
        <label
          className="
            relative z-[2] ml-[15px] -mb-px
            block w-max bg-white px-[3px]
            text-[13px] text-[#777983]
            max-[600px]:-translate-y-[12px]
          "
        >
          Pickup Date
        </label>
        <input
          type="date"
          className="
            h-[50px] w-full rounded-[11px]
            border border-[#d9d9de] bg-transparent
            px-[17px] text-[15px] text-[#555861]
            outline-none max-[600px]:-translate-y-[12px]
          "
        />
      </div>

      <div className="relative">
        <label
          className="
            relative z-[2] ml-[15px] -mb-px
            block w-max bg-white px-[3px]
            text-[13px] text-[#777983]
            max-[600px]:-translate-y-[12px]
          "
        >
          Pickup time
        </label>
        <input
          type="time"
          className="
            h-[50px] w-full rounded-[11px]
            border border-[#d9d9de] bg-transparent
            px-[17px] text-[15px] text-[#555861]
            outline-none max-[600px]:-translate-y-[12px]
          "
        />
      </div>
    </div>

    {/* RETURN DATE */}
    {tripType === "roundtrip" && (
      <div
        className="
          mt-5 grid grid-cols-2 gap-[28px]
          max-[600px]:grid-cols-1 max-[600px]:gap-[15px]
        "
      >
        <div className="relative">
          <label
            className="
              relative z-[2] ml-[15px] -mb-px
              block w-max bg-white px-[3px]
              text-[13px] text-[#777983]
            "
          >
            Return Date
          </label>
          <input
            type="date"
            className="
              h-[69px] w-full rounded-[11px]
              border border-[#d9d9de] bg-transparent
              px-[17px] text-[15px] text-[#555861]
              outline-none
            "
          />
        </div>

        <div className="relative">
          <label
            className="
              relative z-[2] ml-[15px] -mb-px
              block w-max bg-white px-[3px]
              text-[13px] text-[#777983]
            "
          >
            Return time
          </label>
          <input
            type="time"
            className="
              h-[69px] w-full rounded-[11px]
              border border-[#d9d9de] bg-transparent
              px-[17px] text-[15px] text-[#555861]
              outline-none
            "
          />
        </div>
      </div>
    )}

    {/* SEARCH */}
    <button
      type="button"
      className="
        mt-[25px] h-[49px] w-full rounded-[7px]
        border-0 bg-[#0b1226] text-[16px]
        font-bold text-white transition
        hover:bg-[#17244a]
      "
      onClick={() => alert("Cab search started!")}
    >
      Search Cabs
    </button>
  </div>
</section>


        {/* ========================================================= */}
        {/* VEHICLES */}
        {/* ========================================================= */}

        <section
          className="
            mx-auto
            mb-[100px]
            w-full
            max-w-[1100px]
            px-0
            translate-x-[10px]
            max-[991px]:translate-x-0
          "
        >
          <h2
            className="
              mb-[34px]
              text-center
              font-['Poppins',sans-serif]
              text-[40px]
              font-extrabold
              leading-tight
              [transform:scaleX(1.05)_scaleY(1.1)]
            "
          >
            Our Awesome Vehicles
          </h2>

          <div
            className="
              grid w-full
              grid-cols-6 gap-[20px]
              justify-items-center

              max-[991px]:grid-cols-3
              max-[991px]:gap-x-0  
              max-[991px]:gap-y-[30px]
              
              max-[600px]:grid-cols-2
              max-[600px]:gap-[14px]
            "
          >
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="
                  flex min-h-[265px] w-[165px]
                  max-[600px]:w-full
                  flex-col items-center justify-center
                  rounded-[16px]
                  bg-white
                  text-center
                  shadow-[0_10px_35px_rgba(24,28,48,0.08)]
                  transition
                  hover:-translate-y-[3px]

                  max-[991px]:w-[190px]
                  max-[991px]:min-h-[240px]

                  max-[600px]:w-[165px]
                  max-[600px]:min-h-[195px]
                  
                "
              >
                <div
                  className="
                    mb-[14px]
                    flex h-[96px] w-[96px]
                    items-center justify-center
                    rounded-full
                    bg-[#f5f5f5]
                    max-[600px]:h-[75px]
                    max-[600px]:w-[75px]
                  "
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="
                      h-[55px] w-[80px]
                      object-contain
                      max-[600px]:h-[45px]
                      max-[600px]:w-[62px]
                    "
                  />
                </div>

                <h3
                  className="
                    mb-[10px]
                    font-['Poppins',sans-serif]
                    text-[20px]
                    font-semibold
                    text-[#202124]
                    transition
                    hover:text-[#4c4ed3]
                    max-[600px]:text-[15px]
                  "
                >
                  {vehicle.name}
                </h3>

                <p
                  className="
                    text-[17px]
                    font-normal
                    text-[#888]
                    max-[600px]:text-[12px]
                  "
                >
                  {vehicle.count}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* WHY CHOOSE US */}
        {/* ========================================================= */}

       <section
  id="features"
  className="
    mx-auto
    mb-[180px]
    max-[991px]:mb-[50px]
    max-[600px]:mb-[40px]

    w-full
    max-w-[1100px]
    px-0
    translate-x-[10px]

    max-[991px]:w-[calc(100%-30px)]
    max-[991px]:max-w-none

    max-[600px]:w-[calc(100%-24px)]
  "
>
          <h2
            className="
              mb-[34px]
              text-center
              font-['Poppins',sans-serif]
              text-[42px]
              font-extrabold
              leading-tight
              [transform:scaleX(1.05)_scaleY(1.1)]
            "
          >
            Why Choose Us
          </h2>

          <div
            className="
              grid w-full
              grid-cols-3 
              gap-x-[20px]
              gap-y-[20px]
              max-[991px]:grid-cols-2
              max-[991px]:gap-[20px]
              max-[600px]:gap-[14px]
            "
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`
                  min-h-[180px] w-full
                  rounded-[13px]
                  bg-white
                  px-[27px] py-[25px]
                  shadow-[0_8px_35px_rgba(24,28,48,0.07)]
                  max-[991px]:min-h-[180px]
                  max-[600px]:min-h-[175px]
                  max-[600px]:px-4
                  max-[600px]:py-5
                `}
              >
                <div
                  className={`
                    mb-[22px]
                    flex h-[48px] w-[48px]
                    items-center justify-center
                    rounded-full
                    text-[18px]
                    ${featureIconClasses[feature.color]}
                    max-[600px]:mb-[15px]
                    max-[600px]:h-[42px]
                    max-[600px]:w-[42px]
                  `}
                >
                  <i
                    className={`fa-solid ${feature.icon}`}
                  />
                </div>

                <h3
                  className="
                    mb-[10px]
                    text-[22px]
                    font-extrabold
                    max-[600px]:text-[15px]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    max-w-[490px]
                    -translate-y-[7px]
                    text-[15px]
                    leading-[1.6]
                    text-[#6e6d6d]
                    max-[600px]:text-[12px]
                  "
                >
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* APP SECTION */}
        {/* ========================================================= */}

        <section
          className="
             relative
             mx-auto
             mb-[100px]
             flex
             h-[350px]
             w-full
             max-w-[1100px]
             items-center
             justify-between
             overflow-visible
             rounded-[8px]
             bg-[#f6f6f6]
             px-[55px]
             translate-x-[10px]
             max-[991px]:translate-x-0
             py-[35px]

             max-[991px]:h-auto 
             max-[991px]:w-[calc(100%-30px)] 
             max-[991px]:min-h-[350px]
             max-[991px]:px-[35px]
             max-[991px]:py-[40px]
             max-[991px]:items-start

             max-[600px]:w-[calc(100%-24px)]
             max-[600px]:min-h-[390px]
             max-[600px]:px-[22px]
             max-[600px]:py-[35px]
"
        >
          {/* DECORATIONS */}

          <div
            className="
              absolute inset-0
              z-[1]
              overflow-hidden
              rounded-[8px]
            "
          >
            <div
              className="
                absolute
                right-[250px]
                top-[-85px]
                h-[170px]
                w-[170px]
                rounded-full
                bg-[#f7c948]
              "
            />

            <div
              className="
                absolute
                bottom-[-70px]
                right-[35px]
                h-[175px]
                w-[175px]
                rounded-full
                bg-[#21a3b7]
              "
            />

            <div
              className="
                absolute
                bottom-[-30px]
                left-[1px]
                rotate-[8deg]
                text-[120px]
                leading-none
                text-[#5847d7]
              "
            >
              ✳
            </div>
          </div>

          {/* APP CONTENT */}

          <div className="relative z-[2] font-['Poppins',sans-serif]">
            <h2
              className="
                mb-[30px]
                max-w-[650px]
                text-[40px]
                font-black
                leading-[1.25]
                max-[600px]:text-[25px]
              "
            >
              Download our app and <br/> 
              access exclusive features
            </h2>

            <div
              className="
                mb-[20px]
                flex
                flex-wrap
                gap-x-[25px]
                gap-y-[10px]
                text-[16px]
                text-[#747579]
                translate-y-[5px]
                
              "
            >
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-[#22a45d]" />
                24/7 Customer Support
              </span>

              <span className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-[#22a45d]" />
                Ride Safely
              </span>

              <span className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-[#22a45d]" />
                Top Rated Driver - Partner
              </span>
            </div>

            <div className="flex translate-y-[10px] items-center gap-[10px]">
              <a
                href="#"
                className="block"
              >
                <img
                  src="https://stackbros.in/bookinga/landing/assets/images/element/google-play.svg"
                  alt="Google Play"
                  className="h-[50px] w-auto"
                />
              </a>

              <a
                href="#"
                className="block"
              >
                <img
                  src="https://stackbros.in/bookinga/landing/assets/images/element/app-store.svg"
                  alt="App Store"
                  className="h-[50px] w-auto"
                />
              </a>
            </div>
          </div>

          {/* PHONE */}

          <img
            src="https://stackbros.in/bookinga/landing/assets/images/element/01.png"
            className="
              absolute
              right-[90px]
              top-[-75px]
              z-[3]
              h-[420px]
              w-auto

              max-[991px]:hidden
            "
            alt="Mobile App"
          />
        </section>

        {/* ========================================================= */}
        {/* FAQ */}
        {/* ========================================================= */}

        <section
          className="
            mx-auto
            mb-[70px] max-[991px]:mb-[40px] max-[600px]:mb-[30px]
            w-[70%]
            max-w-[790px]
            translate-x-[10px]
            max-[991px]:translate-x-0
            max-[991px]:w-[85%]
            max-[600px]:w-[calc(100%-24px)]
          "
        >
          <h2
            className="
              mb-[35px]
              text-center
              font-['Poppins',sans-serif]
              text-[42px]
              font-extrabold
              [transform:scaleX(1.1)]

              max-[600px]:text-[28px]
            "
          >
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-[12px]">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[7px]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? -1 : index
                    )
                  }
                  className="
                    flex min-h-[49px]
                    w-full
                    items-center
                    justify-between
                    border-0
                    bg-[#f5f5f5]
                    px-[18px]
                    text-left
                    text-[17px]
                    font-bold
                    text-[#202027]

                    max-[600px]:text-[14px]
                  "
                >
                  <span>{faq.question}</span>

                  <i
                    className={`fa-solid ${
                      openFaq === index
                        ? "fa-minus"
                        : "fa-plus"
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div
                    className="
                      px-[15px]
                      pb-[4px]
                      pt-[17px]
                      text-[15px]
                      leading-[1.55]
                      text-[#6e6d6d]
                    "
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CLIENTS */}

        <section
          className="
            mx-auto
            mb-[60px]
            grid
            max-w-[1100px]
            translate-x-[10px]
            max-[991px]:translate-x-0
            grid-cols-6
            items-center
            justify-items-center
            gap-[25px]
            px-[30px]
            py-5 
            max-[991px]:grid-cols-3
            max-[600px]:grid-cols-2
            max-[600px]:gap-[15px]
          "
        >
          {[
            [
              "https://stackbros.in/bookinga/landing/assets/images/client/01.svg",
              "Product",
            ],
            [
              "https://stackbros.in/bookinga/landing/assets/images/client/02.svg",
              "Pinpoint",
            ],
            [
              "https://stackbros.in/bookinga/landing/assets/images/client/03.svg",
              "Wonderer",
            ],
            [
              "https://stackbros.in/bookinga/landing/assets/images/client/04.svg",
              "Voyage",
            ],
            [
              "https://stackbros.in/bookinga/landing/assets/images/client/05.svg",
              "Wayfarer",
            ],
            [
              "https://stackbros.in/bookinga/landing/assets/images/client/06.svg",
              "Truant",
            ],
          ].map(([src, alt]) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="
                block
                h-[50px]
                w-[140px]
                object-contain
                grayscale
                opacity-[0.95]
                transition
                hover:scale-105
                hover:grayscale-0
                hover:opacity-100
              "
            />
          ))}
        </section>
      </main>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer
        id="footer"
        className="
          bg-[#090811]
          px-[38px]
          pb-[25px]
          pt-[45px]
          text-[#b6b5bd]
          max-[600px]:px-[20px]
        "
      >

        {/* FOOTER COLUMNS */}

        <div
          className="
            mx-auto
            grid
            max-w-[1130px]  
            max-[991px]:translate-x-0
            max-[991px]:translate-y-0
            grid-cols-[1.5fr_repeat(4,1fr)]
            gap-[45px]
            max-[991px]:grid-cols-2
            max-[600px]:grid-cols-1
          "
        >

          {/* BRAND */}

          <div className="min-[992px]:-translate-y-2">
            <a
              href="#home"
              className="mb-[15px] block"
            >
              <img
                src="https://stackbros.in/bookinga/landing/assets/images/logo-light.svg"
                alt="Booking"
                className="h-auto w-[150px]"
              />
            </a>

            <p
              className="
                mb-[20px]
                mt-0
                max-w-[260px]
                text-[16px]
                leading-[1.6]
              "
            >
              Departure defective arranging rapturous did
              believe him all had supported.
            </p>

            <a
              href="tel:+1234568963"
              className="
                mb-[12px]
                block
                text-[16px]
              "
            >
              <i className="fa-solid fa-phone mr-2 w-[20px]" />
              +1234 568 963
            </a>

            <a
              href="mailto:example@gmail.com"
              className="
                mb-[12px]
                block
                text-[16px]
              "
            >
              <i className="fa-regular fa-envelope mr-2 w-[20px]" />
              example@gmail.com
            </a>
          </div>

          {/* PAGE */}

          <div className="flex flex-col gap-[13px]">
            <h3
              className="
                mb-[23px]
                text-[22px]
                font-black
                text-white
              "
            >
              Page
            </h3>

            <a
              href="#"
              className="translate-y-[-15px] text-[16px] hover:text-[#4c4ed3]"
            >
              About us
            </a>

            <a
              href="#"
              className="translate-y-[-15px] text-[16px] hover:text-[#4c4ed3]"
            >
              Contact us
            </a>

            <a
              href="#"
              className="translate-y-[-15px] text-[16px] hover:text-[#4c4ed3]"
            >
              News and Blog
            </a>

            <a
              href="#"
              className="translate-y-[-15px] text-[16px] hover:text-[#4c4ed3]"
            >
              Meet a Team
            </a>
          </div>

          {/* LINK */}

          <div className="flex flex-col gap-[13px]">
            <h3
              className="
                mb-[23px]
                text-[22px]
                font-black
                text-white
              "
            >
              Link
            </h3>

            {[
              "Sign up",
              "Sign in",
              "Privacy Policy",
              "Terms",
              "Cookie",
              "Support",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  translate-y-[-15px]
                  text-[16px]
                  hover:text-[#4c4ed3]
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* GLOBAL SITE */}

          <div className="flex flex-col gap-[13px]">
            <h3
              className="
                mb-[23px]
                text-[22px]
                font-black
                text-white
              "
            >
              Global Site
            </h3>

            {[
              "India",
              "California",
              "Indonesia",
              "Canada",
              "Malaysia",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  translate-y-[-15px]
                  text-[16px]
                  hover:text-[#4c4ed3]
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* BOOKING */}

          <div className="flex flex-col gap-[13px]">
            <h3
              className="
                mb-[23px]
                text-[22px]
                font-black
                text-white
              "
            >
              Booking
            </h3>

            <a
              href="#"
              className="
                translate-y-[-15px]
                text-[16px]
                hover:text-[#4c4ed3]
              "
            >
              <i className="fa-solid fa-building mr-2 w-[20px]" />
              Hotel
            </a>

            <a
              href="#"
              className="
                translate-y-[-15px]
                text-[16px]
                hover:text-[#4c4ed3]
              "
            >
              <i className="fa-solid fa-plane mr-2 w-[20px]" />
              Flight
            </a>

            <a
              href="#"
              className="
                translate-y-[-15px]
                text-[16px]
                hover:text-[#4c4ed3]
              "
            >
              <i className="fa-solid fa-globe-americas mr-2 w-[20px]" />
              Tour
            </a>

            <a
              href="#"
              className="
                translate-y-[-15px]
                text-[16px]
                hover:text-[#4c4ed3]
              "
            >
              <i className="fa-solid fa-car mr-2 w-[20px]" />
              Cabs
            </a>
          </div>
        </div>

        {/* TOP LINKS */}

        <div
          className="
            mx-auto
            mb-[45px]
            mt-[55px]
            max-w-[1130px]
            
            max-[991px]:translate-x-0
          "
        >
          <h3
            className="
              mb-[23px]
              text-[22px]
              font-black
              text-white
            "
          >
            Top Links
          </h3>

          <p
            className="
              text-[16px]
              leading-[2]
            "
          >
            Flights &nbsp; Hotels &nbsp; Tours &nbsp; Cabs
            &nbsp; About &nbsp; Contact us &nbsp; Blogs &nbsp;
            Services &nbsp; Detail page &nbsp; Policy &nbsp;
            Testimonials &nbsp; Newsletters &nbsp; Podcasts
            &nbsp; Protests &nbsp; NewsCyber &nbsp; Education
            &nbsp; Sports &nbsp; Tech and Auto &nbsp; Opinion
            &nbsp; Share Market
          </p>
        </div>

        {/* PAYMENT + SOCIAL */}

        <div
          className="
            mx-auto
            flex
            max-w-[1130px]
            items-end
            justify-between
            pb-[35px]

            max-[600px]:flex-col
            max-[600px]:items-start
            max-[600px]:gap-[30px]
          "
        >

          {/* PAYMENT */}

          <div className="max-[991px]:translate-x-0">
            <h3
              className="
                mb-[23px]
                text-[22px]
                font-black
                text-white
              "
            >
              Payment & Security
            </h3>

            <div className="mt-[14px] flex items-center gap-[10px]">
              <img
                src="https://stackbros.in/bookinga/landing/assets/images/element/paypal.svg"
                alt="PayPal"
                className="block h-[28px] w-[42px] object-contain"
              />

              <img
                src="https://stackbros.in/bookinga/landing/assets/images/element/visa.svg"
                alt="Visa"
                className="block h-[28px] w-[42px] object-contain"
              />

              <img
                src="https://stackbros.in/bookinga/landing/assets/images/element/mastercard.svg"
                alt="Mastercard"
                className="block h-[28px] w-[42px] object-contain"
              />

              <img
                src="https://stackbros.in/bookinga/landing/assets/images/element/expresscard.svg"
                alt="American Express"
                className="block h-[28px] w-[42px] object-contain"
              />
            </div>
          </div>

          {/* SOCIAL */}

          <div className="max-[991px]:translate-x-0">
            <h3
              className="
                mb-[23px]
                text-[22px]
                font-black
                text-white
              "
            >
              Follow us on
            </h3>

            <div className="flex justify-end gap-[10px]">
              <a
                href="#"
                className="
                  flex h-[35px] w-[35px]
                  items-center justify-center
                  rounded-[5px]
                  bg-[#3b5ba8]
                  text-white
                "
              >
                <i className="fa-brands fa-facebook-f" />
              </a>

              <a
                href="#"
                className="
                  flex h-[35px] w-[35px]
                  items-center justify-center
                  rounded-[5px]
                  bg-[#ca3c82]
                  text-white
                "
              >
                <i className="fa-brands fa-instagram" />
              </a>

              <a
                href="#"
                className="
                  flex h-[35px] w-[35px]
                  items-center justify-center
                  rounded-[5px]
                  bg-[#22a7d4]
                  text-white
                "
              >
                <i className="fa-brands fa-twitter" />
              </a>

              <a
                href="#"
                className="
                  flex h-[35px] w-[35px]
                  items-center justify-center
                  rounded-[5px]
                  bg-[#2486b7]
                  text-white
                "
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div
          className="
            mx-auto
            max-w-[1130px]
            max-[991px]:translate-x-0
            border-t border-[#27262e]
            pt-[20px]
            text-center
            text-[17px]
          "
        >
          <p>
            Copyrights ©2023 Booking. Build by StackBros.
          </p>

          <div className="mt-3 flex justify-center gap-5 flex-wrap">
            <a href="#" className="hover:text-[#4c4ed3]">
              Privacy policy
            </a>

            <a href="#" className="hover:text-[#4c4ed3]">
              Terms and conditions
            </a>

            <a href="#" className="hover:text-[#4c4ed3]">
              Refund policy
            </a>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP */}

      <a
        className="
          fixed
          bottom-[18px]
          right-[18px]
          z-[99]
          flex
          h-[44px]
          w-[44px]
          items-center
          justify-center
          rounded-[5px]
          bg-[#5540d5]
          text-[22px]
          text-white
        "
        href="#home"
      >
        ↑
      </a>
    </div>
  );
}

export default App;