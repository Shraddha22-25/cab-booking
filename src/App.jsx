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
   
  const [pickupTime, setPickupTime] = useState("");
  const [timeFocused, setTimeFocused] = useState(false);
  const pickupTimeRef = useRef(null);
  const pickupRef = useRef(null);
  const dropRef = useRef(null);
  const [categoryOpen, setCategoryOpen] = useState(false);

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
   
    
      {/* HEADER */}
  
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
      text-[16px] !font-normal
      text-[#0b1226]
      transition
      hover:text-[#4c4ed3]
    "
  >
    Listings
    <i className="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180" />
  </button>

  {/* MAIN DROPDOWN */}

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
    {/* HOTEL */}

    <div className="group/hotel relative">
      <a href="#" onClick={(e) => e.preventDefault()}
        className="dropdown-hover-link mx-2 ml-4 flex w-[calc(100%-30px)] items-center justify-between rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
        Hotel
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>
      <div className="invisible absolute left-full top-0 z-[99999] ml-1 min-w-[210px] rounded-[8px] border border-[#eee] bg-white py-2 opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover/hotel:visible group-hover/hotel:opacity-100">
        {[
          "Hotel Home",
          "Hotel Chain",
          "Hotel Resort",
          "Hotel Grid",
          "Hotel List",
          "Hotel Detail",
          "Room Detail",
          "Hotel Booking",
        ].map((item, index) => (
          <a key={`${item}-${index}`} href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
            {item}
          </a>
        ))}
      </div>
    </div>

    {/* FLIGHT */}

    <div className="group/flight relative">
      <a href="#" onClick={(e) => e.preventDefault()}
        className="dropdown-hover-link mx-2 ml-4 flex w-[calc(100%-30px)] items-center justify-between rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
        Flight
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>
      <div className="invisible absolute left-full top-0 z-[99999] ml-1 min-w-[210px] rounded-[8px] border border-[#eee] bg-white py-2 opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover/flight:visible group-hover/flight:opacity-100">
        {["Flight Home", "Flight List", "Flight Details", "Flight Booking"].map((item) => (
          <a key={item} href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
            {item}
          </a>
        ))}
      </div>
    </div>

    {/* TOUR */}

    <div className="group/tour relative">
      <a href="#" onClick={(e) => e.preventDefault()}
        className="dropdown-hover-link mx-2 ml-4 flex w-[calc(100%-30px)] items-center justify-between rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
        Tour
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>
      <div className="invisible absolute left-full top-0 z-[99999] ml-1 min-w-[210px] rounded-[8px] border border-[#eee] bg-white py-2 opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover/tour:visible group-hover/tour:opacity-100">
        {["Tour Home", "Tour Grid", "Tour Details", "Tour Booking"].map((item) => (
          <a key={item} href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
            {item}
          </a>
        ))}
      </div>
    </div>

    {/* CAB */}

    <div className="group/cab relative">
      <a href="#" onClick={(e) => e.preventDefault()}
        className="dropdown-hover-link mx-2 ml-4 flex w-[calc(100%-30px)] items-center justify-between rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
        Cab
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>
      <div className="invisible absolute left-full top-0 z-[99999] ml-1 min-w-[210px] rounded-[8px] border border-[#eee] bg-white py-2 opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover/cab:visible group-hover/cab:opacity-100">
        {["Cab Home", "Cab List", "Cab Details", "Cab Booking"].map((item) => (
          <a key={item} href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
            {item}
          </a>
        ))}
      </div>
    </div>

    {/* DIRECTORY */}

    <div className="group/directory relative">
      <a href="#" onClick={(e) => e.preventDefault()}
        className="dropdown-hover-link mx-2 ml-4 flex w-[calc(100%-30px)] items-center justify-between rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
        Directory
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>
      <div className="invisible absolute left-full top-0 z-[99999] ml-1 min-w-[210px] rounded-[8px] border border-[#eee] bg-white py-2 opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover/directory:visible group-hover/directory:opacity-100">
        {["Directory Home", "Directory Details"].map((item) => (
          <a key={item} href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
            {item}
          </a>
        ))}
      </div>
    </div>

    {/* ADD LISTING */}

    <div className="group/addlisting relative">
      <a href="#" onClick={(e) => e.preventDefault()}
        className="dropdown-hover-link mx-2 ml-4 flex w-[calc(100%-30px)] items-center justify-between rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
        Add Listing
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>
      <div className="invisible absolute left-full top-0 z-[99999] ml-1 min-w-[220px] rounded-[8px] border border-[#eee] bg-white py-2 opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover/addlisting:visible group-hover/addlisting:opacity-100">
        {["Join Us", "Add Listing", "Add Listing Minimal", "Listing Added"].map((item) => (
          <a key={item} href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
            {item}
          </a>
        ))}
      </div>
    </div>

    {/* HERO */}

    <div className="group/hero relative">
      <a href="#" onClick={(e) => e.preventDefault()}
        className="dropdown-hover-link mx-2 ml-4 flex w-[calc(100%-30px)] items-center justify-between rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
        Hero
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>
      <div className="invisible absolute left-full top-0 z-[99999] ml-1 min-w-[230px] rounded-[8px] border border-[#eee] bg-white py-2 opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover/hero:visible group-hover/hero:opacity-100">
        {["Hero Inline Form", "Hero Multiple Search", "Hero Image Gallery", "Hero Split"].map((item) => (
          <a key={item} href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
            {item}
          </a>
        ))}
      </div>
    </div>

    {/* OTHER LISTING PAGES */}

    {["Booking Confirmed", "Compare Location", "Offer Details"].map((item) => (
      <a key={item} href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
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
      text-[16px] !font-normal
      text-[#0b1226]
      transition
      hover:text-[#4c4ed3]
    "
  >
    Pages
    <i className="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180" />
  </button>

  {/* MAIN DROPDOWN */}

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

    {/* ABOUT */}

    <a href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
      About
    </a>

    {/* CONTACT */}

    <a href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
      Contact
    </a>

    <a href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
      Contact 2
    </a>

    {/* OUR TEAM */}

    <a href="#" className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]">
      Our Team
    </a>

    {/* AUTHENTICATION SUBMENU */}

    <div className="group/auth relative">
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="
          dropdown-hover-link
          mx-2 ml-4 flex w-[calc(100%-30px)]
          items-center justify-between
          rounded-[6px] px-3 py-[5px]
          text-[16px] font-extralight
          text-[#777983] transition
          hover:bg-[rgb(208,208,240)]
          hover:text-[#4c4ed3]
        "
      >
        Authentication
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>

      <div
        className="
          invisible absolute left-full top-0 z-[99999] ml-1
          min-w-[230px] rounded-[8px]
          border border-[#eee] bg-white py-2
          opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          transition-all duration-200
          group-hover/auth:visible
          group-hover/auth:opacity-100
        "
      >
        {[
          "Sign In",
          "Sign Out",
          "Forget Password",
          "Two Factor Authentication",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]"
          >
            {item}
          </a>
        ))}
      </div>
    </div>

    {/* BLOG SUBMENU */}

    <div className="group/blog relative">
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="
          dropdown-hover-link
          mx-2 ml-4 flex w-[calc(100%-30px)]
          items-center justify-between
          rounded-[6px] px-3 py-[5px]
          text-[16px] font-extralight
          text-[#777983] transition
          hover:bg-[rgb(208,208,240)]
          hover:text-[#4c4ed3]
        "
      >
        Blog
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>

      <div
        className="
          invisible absolute left-full top-0 z-[99999] ml-1
          min-w-[210px] rounded-[8px]
          border border-[#eee] bg-white py-2
          opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          transition-all duration-200
          group-hover/blog:visible
          group-hover/blog:opacity-100
        "
      >
        {["Blog", "Blog Details"].map((item) => (
          <a
            key={item}
            href="#"
            className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]"
          >
            {item}
          </a>
        ))}
      </div>
    </div>

    {/* HELP SUBMENU */}

    <div className="group/help relative">
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="
          dropdown-hover-link
          mx-2 ml-4 flex w-[calc(100%-30px)]
          items-center justify-between
          rounded-[6px] px-3 py-[5px]
          text-[16px] font-extralight
          text-[#777983] transition
          hover:bg-[rgb(208,208,240)]
          hover:text-[#4c4ed3]
        "
      >
        Help
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>

      <div
        className="
          invisible absolute left-full top-0 z-[99999] ml-1
          min-w-[230px] rounded-[8px]
          border border-[#eee] bg-white py-2
          opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          transition-all duration-200
          group-hover/help:visible
          group-hover/help:opacity-100
        "
      >
        {[
          "Help Center",
          "Help Detail",
          "Privacy Policy",
          "Terms of Services",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]"
          >
            {item}
          </a>
        ))}
      </div>
    </div>


    {/* OTHER PAGES */}

    {["Pricing", "FAQs", "Error 404", "Coming Soon"].map((item) => (
      <a
        key={item}
        href="#"
        className="dropdown-hover-link mx-2 ml-4 block w-[calc(100%-30px)] rounded-[6px] px-3 py-[5px] text-[16px] font-extralight text-[#777983] transition hover:bg-[rgb(208,208,240)] hover:text-[#4c4ed3]"
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
      text-[16px] !font-normal
      text-[#0b1226]
      transition
      hover:text-[#4c4ed3]
    "
  >
    Accounts
    <i className="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180" />
  </button>


  {/* MAIN DROPDOWN */}

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

    {/* USER PROFILE */}

    <div className="group/profile relative">
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="
          dropdown-hover-link
          mx-2 ml-4 flex w-[calc(100%-30px)]
          items-center justify-between
          rounded-[6px]
          px-3 py-[5px]
          text-[16px] font-extralight
          text-[#777983]
          transition
          hover:bg-[rgb(208,208,240)]
          hover:text-[#4c4ed3]
        "
      >
        User Profile
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>

      {/* USER PROFILE SUBMENU */}

      <div
        className="
          invisible absolute left-full top-0
          z-[99999] ml-1 min-w-[210px]
          rounded-[8px]
          border border-[#eee]
          bg-white py-2
          opacity-0
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          transition-all duration-200
          group-hover/profile:visible
          group-hover/profile:opacity-100
        "
      >
        {[
          "My Profile",
          "My Booking",
          "Travellers",
          "Payment Details",
          "Wishlist",
          "Settings",
          "Delete Profile",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="
              dropdown-hover-link
              mx-2 ml-4 block w-[calc(100%-30px)]
              rounded-[6px]
              px-3 py-[5px]
              text-[16px] font-extralight
              text-[#777983]
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


    {/* AGENT DASHBOARD */}

    <div className="group/agent relative">
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="
          dropdown-hover-link
          mx-2 ml-4 flex w-[calc(100%-30px)]
          items-center justify-between
          rounded-[6px]
          px-3 py-[5px]
          text-[16px] font-extralight
          text-[#777983]
          transition
          hover:bg-[rgb(208,208,240)]
          hover:text-[#4c4ed3]
        "
      >
        Agent Dashboard
        <i className="fa-solid fa-chevron-right text-[10px]" />
      </a>


      {/* AGENT DASHBOARD SUBMENU */}

      <div
        className="
          invisible absolute left-full top-0
          z-[99999] ml-1 min-w-[210px]
          rounded-[8px]
          border border-[#eee]
          bg-white py-2
          opacity-0
          shadow-[0_10px_30px_rgba(0,0,0,0.12)]
          transition-all duration-200
          group-hover/agent:visible
          group-hover/agent:opacity-100
        "
      >
        {[
          "Dashboard",
          "Listing",
          "Booking",
          "Activities",
          "Earning",
          "Reviews",
          "Settings",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="
              dropdown-hover-link
              mx-2 ml-4 block w-[calc(100%-30px)]
              rounded-[6px]
              px-3 py-[5px]
              text-[16px] font-extralight
              text-[#777983]
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

    {/* MASTER ADMIN */}

    <a
      href="#"
      className="
        dropdown-hover-link
        mx-2 ml-4 block w-[calc(100%-30px)]
        rounded-[6px]
        px-3 py-[5px]
        text-[16px] font-extralight
        text-[#777983]
        transition
        hover:bg-[rgb(208,208,240)]
        hover:text-[#4c4ed3]
      "
    >
      Master Admin
    </a>
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
                px-[10px] py-5
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
                px-[10px] py-5
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
                active
                flex items-center gap-[6px]
                rounded-[11px]
                bg-[rgb(230,227,255)]
                px-[10px] py-[5px]
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


<div className="relative ml-auto min-[992px]:hidden">
  <button
    type="button"
    onClick={() => setCategoryOpen((prev) => !prev)}
    aria-expanded={categoryOpen}
    className="cursor-pointer border-0 bg-transparent pb-1 text-[15px] font-bold text-[#2e3344]"
  >
    Category {categoryOpen ? "▴" : "▾"}
  </button>

  {categoryOpen && (
    <div className="absolute right-0 top-full z-[99999] flex min-w-[160px] flex-col rounded-[6px] bg-white py-2 shadow-[0_5px_15px_rgba(0,0,0,0.12)]">
      {[
        { name: "Hotel", icon: "fa-hotel" },
        { name: "Flight", icon: "fa-plane" },
        { name: "Tour", icon: "fa-globe" },
        { name: "Cab", icon: "fa-car" },
      ].map((item) => (
        <a
          key={item.name}
          href="#"
          onClick={() => setCategoryOpen(false)}
          className="mobile-category-link mx-2 flex items-center gap-2 rounded-[4px] px-[14px] py-2 text-[14px] font-semibold"
        >
          <i className={`fa-solid ${item.icon}`} />
          {item.name}
        </a>
      ))}
    </div>
  )}
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
                relative flex h-[40px] w-[40px]
                items-center justify-center
                rounded-[8px]
                border-0
                bg-[#f5f5f7]
                text-[#202124]
        
                hover:bg-[#e5e5e7]
                max-[600px]:hidden
                translate-x-[8px] max-[991px]:-translate-x-[4px]
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
                h-[40px] w-[40px]
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
    text-[16px] font-extralight
    text-[#777983]
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
    text-[16px] font-extralight
    text-[#777983]
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
    text-[16px] font-extralight
    text-[#777983]
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

      {/* MAIN */}
    
      <main id="home">


        {/* ================= HERO ================= */}

<section
  className="
    relative mx-auto
    mt-[40px] mb-[100px]
    h-[520px] w-full max-w-[1100px]
    rounded-[18px]

    max-[991px]:mt-[15px]
    max-[991px]:!mb-[10px]
    max-[991px]:h-[640px]
    max-[991px]:w-[calc(100%-5px)]
    max-[991px]:max-w-none

    max-[600px]:w-[calc(100%-24px)]
    max-[600px]:mx-auto
    max-[600px]:mt-[15px]
    max-[600px]:!mb-[10px]
    max-[991px]:translate-x-0
    min-[992px]:translate-x-[5px]
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

{/* BOOKING CARD */}


<div
  className="
    absolute left-[10px] top-1/2
    -translate-y-1/2
    min-[992px]:!top-[calc(50%+0px)]
    z-[5] w-[450px]
    rounded-[18px] bg-white p-6
    shadow-[0_15px_40px_rgba(0,0,0,0.10)]

max-[991px]:left-0
max-[991px]:right-0
max-[991px]:top-[225px]
max-[991px]:mx-auto
max-[991px]:w-[calc(100%-30px)]
max-[991px]:max-w-[460px]
max-[991px]:translate-x-0
max-[991px]:translate-y-0
max-[991px]:p-[18px]

max-[600px]:left-0
max-[600px]:right-0
max-[600px]: !top-[170px]
max-[600px]:mx-auto
max-[600px]:w-[calc(100%-30px)]
max-[600px]:!w-[350px]
max-[600px]:!max-w-none
max-[600px]:translate-x-0
max-[600px]:translate-y-0
max-[600px]:rounded-[12px]
max-[600px]:h-auto
max-[600px]:min-h-0
max-[600px]:px-[12px]
max-[600px]:pt-[12px]
max-[600px]:!h-fit
max-[600px]:!min-h-0
max-[600px]:!pb-0
max-[600px]:!h-auto
"
>

    {/* Heading */}

<h1 className="mb-[5px] text-[22px] font-extrabold max-[600px]:text-[19px]">
  Book Your Online Cab
</h1>

    <div className="mb-[25px] h-px bg-[#e7e7e7] max-[600px]:mb-[4px]" />

    {/* TRIP TYPE */}

    <div className="mb-[28px] flex items-center gap-[25px] max-[600px]:mb-[4px] max-[600px]:gap-[18px]">
      <label className="flex items-center gap-[9px] text-[16px] text-[#777983]">
        <input
          type="radio"
          checked={tripType === "oneway"}
          onChange={() => setTripType("oneway")}
          className="h-[18px] w-[18px] accent-[#4c4ed3]"
        />
        One Way
      </label>

      <label className="flex items-center gap-[9px] text-[16px] text-[#777983]">
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
    relative
    grid grid-cols-[1fr_30px_1fr]
    items-center gap-0
    max-[600px]:grid-cols-[1fr_30px_1fr]
    max-[600px]:gap-0
        
      "
    >
      {/* PICKUP */}

      <div className="relative min-w-0" ref={pickupRef}>
        <label
          className="
            relative z-[2] ml-[15px] -mb-px
            block w-max bg-white px-[3px]
            text-[13px] text-[#777983] 
            max-[600px]:-translate-y-[2px]
          "
        >
          Pickup Location
        </label>

        <div
          className="
            relative flex h-[50px] w-full
            cursor-text items-center
            rounded-[11px] border border-[#e1e1e5]
            bg-white 
            hover:border-[#c7c7cd]
            focus-within:border-[#4c4ed3]
            focus-within:shadow-[0_0_0_3px_rgba(33,111,237,0.08)]
             max-[600px]:-translate-y-[2px]
          "
          onClick={() => setPickupOpen(!pickupOpen)}
        >
          <i className=" ml-[14px] mr-[10px] shrink-0 text-[15px] text-[#292a3f]" />

          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            placeholder="Select location"
            className="
              h-full w-full border-0 bg-transparent
              pr-[8px] text-[14px] text-[#202124]
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
  onClick={() => window.location.reload()}
  className="
    relative z-[5]
  mx-auto flex h-[40px] w-[40px] shrink-0
  translate-x-[-5px] translate-y-[12px]
  items-center justify-center
  rounded-full border border-black
  bg-[#0b0b10] text-white
  transition-colors duration-300
  hover:bg-[#292a3f]
  max-[600px]:translate-x-[-5px]
  max-[600px]:translate-y-[-5px]
  "
>
  <i className="fa-solid fa-right-left text-[14px] text-white" />
</button>

      {/* DROP */}
      
      <div ref={dropRef} className="relative min-w-0">
        <label
          className="
            relative z-[2] ml-[15px] -mb-px
            block w-max bg-white px-[3px]
            text-[13px] text-[#777983]
            max-[600px]:-translate-y-[30px]
          "
        >
          Drop
        </label>

        <div
          className="
            relative flex h-[50px] w-full cursor-text
            items-center rounded-[8px]
            border border-[#e1e1e5] bg-white 
            max-[600px]:-translate-y-[12px]
            hover:border-[#c7c7cd]
            focus-within:border-[#4c4ed3]
            focus-within:shadow-[0_0_0_3px_rgba(33,111,237,0.08)]
            max-[600px]:-translate-y-[30px]
            
          "
        >
          <i className="ml-[14px] mr-[10px] shrink-0 text-[15px] text-[#292a3f]" />

          <input
            type="text"
            value={dropLocation}
            placeholder="Select location"
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
              pr-[8px] text-[14px] text-[#202124]
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
        max-[600px]:-translate-y-[40px]
      "
    >
      <div className="relative">
        <label
          className="
            relative z-[2] ml-[15px] -mb-px
            block w-max bg-white px-[3px]
            text-[13px] text-[#777983]
            max-[600px]:-translate-y-0
          "
        >
          Pickup Date
        </label>
        <input
          type="date"
          className="
            h-[50px] w-full rounded-[11px]
            border border-[#d9d9de] bg-transparent
            px-[17px] text-[15px] text-[#777983]
            outline-none max-[600px]:-translate-y-0
             hover:border-[#c7c7cd]
            focus-within:border-[#4c4ed3]
          "
        />
      </div>

      <div className="relative">
        <label
          className="
            relative z-[2] ml-[15px] -mb-px
            block w-max bg-white px-[3px]
            text-[13px] text-[#777983]
            max-[600px]:-translate-y-[3px]
          "
        >
          Pickup Time
        </label>
<input
  type="text"
  placeholder="Select Time"
  onFocus={(e) => {
    e.target.type = "time";
    e.target.showPicker?.();
  }}
  onBlur={(e) => {
    if (!e.target.value) {
      e.target.type = "text";
    }
  }}
  className="
    h-[50px] w-full rounded-[11px]
    border border-[#d9d9de] bg-transparent
    px-[17px] text-[15px] text-[#777983]
    placeholder:text-[#999aa1]
    outline-none max-[600px]:-translate-y-[3px]
    hover:border-[#c7c7cd]
    focus-within:border-[#4c4ed3]
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
          max-[600px]:-translate-y-[50px]
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
              h-[50px] w-full rounded-[11px]
              border border-[#d9d9de] bg-transparent
              px-[17px] text-[15px] text-[#555861]
              outline-none
              hover:border-[#c7c7cd]
              focus-within:border-[#4c4ed3]
            "
          />
        </div>

        <div className="relative">
          <label
            className="
              relative z-[2] ml-[15px] -mb-px
              block w-max bg-white px-[3px]
              text-[13px] text-[#777983]
              max-[600px]:-translate-y-[5px]
            "
          >
            Return Time
          </label>
          <input
  type="text"
  placeholder="Select Time"
  onFocus={(e) => {
    e.target.type = "time";
    e.target.showPicker?.();
  }}
  onBlur={(e) => {
    if (!e.target.value) {
      e.target.type = "text";
    }
  }}
  className="
    h-[50px] w-full rounded-[11px]
    border border-[#d9d9de] bg-transparent
    px-[17px] text-[15px] text-[#777983]
    placeholder:text-[#999aa1]
    outline-none max-[600px]:-translate-y-[5px]
    hover:border-[#c7c7cd]
    focus-within:border-[#4c4ed3]
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
        font-bold text-white 
        hover:bg-[#17244a]
        max-[600px]:-translate-y-[40px]
      "
      onClick={() => alert("Cab search started!")}
    >
      Search Cabs
    </button>
  </div>
</section>

{/* SPACE AFTER BOOKING CARD */}

<div
  className={`
    w-full
    max-[600px]:h-[0px]
    ${tripType === "roundtrip" ? "max-[600px]:h-[100px]" : ""}
  `}
/>
       
{/* VEHICLES */}

<section
  className="
    mx-auto
    mb-[100px]
    w-full
    max-w-[1100px]
    px-0
    translate-x-[10px]
    max-[991px]:translate-x-0
    max-[600px]:-mt-[30px]
    max-[991px]:-mt-[20px]
  "
>
  <h2
    className="
      mb-[34px]
      text-center
      font-['Poppins',sans-serif]
      text-[46px]
      font-bold
      leading-tight
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
          group cursor-pointer
          flex min-h-[265px] w-[165px]
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
              h-[90px] w-[80px]
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
            text-[20.5198px]
            font-bold
            text-[#202124]
            transition-colors
            group-hover:text-[#4c4ed3]
            group-active:text-[#4c4ed3]
            max-[600px]:text-[20px]
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

        {/* WHY CHOOSE US */}
       
       <section
  id="features"
  className="
    mx-auto
    mb-[180px]
    w-full
    max-w-[1100px]
    px-0
    translate-x-[10px]

    max-[991px]:translate-x-0
    max-[991px]:w-[calc(100%-30px)]
    max-[991px]:max-w-none
    max-[991px]:mb-[50px]

    max-[600px]:mb-[40px]
    max-[600px]:w-[calc(100%-24px)]
  "
>
  
<h2
  className="
    mb-[34px]
    text-center
    font-['Poppins',sans-serif]
    text-[46px]
    font-bold
    leading-tight
    min-[601px]:max-[991px]:!text-[42px]
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
                    flex h-[60px] w-[60px]
                    items-center justify-center
                    rounded-full
                    text-[20px]
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
                    text-[20.5198px]
                    font-bold
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
                    text-[#777983]
                    max-[600px]:text-[12px]
                  "
                >
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* APP SECTION */}
       
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
                text-[38.9158px]
                font-bold
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

        {/* FAQ */}
       
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
              text-[46px]
              font-bold
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
                    font-weight:700
                    font-bold
                    text-[#202027]

                    max-[600px]:text-[14px]
                  "
                >
           <span className="!font-black" style={{ fontWeight: 900 }}>
                {faq.question}
            </span>

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
                      text-[#777983]
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

      {/* FOOTER */}
      
      <footer
        id="footer"
        className="
          bg-[#0B0A12]
          px-[60px]
          pb-[5px]
          pt-[45px]
          text-[#747579]
          max-[600px]:px-[20px]
        "
      >

        {/* FOOTER COLUMNS */}

        <div
          className="
            mx-auto
            grid
            max-w-[1130px]
            grid-cols-[1.5fr_repeat(4,1fr)]
            gap-[45px]
            max-[991px]:grid-cols-2
            max-[991px]:gap-x-[24px]
            max-[991px]:gap-y-[30px]
            max-[600px]:grid-cols-2

          "
        >

          {/* BRAND */}

          <div className="min-[992px]:-translate-y-2 max-[991px]:col-span-2">
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
                max-[991px]:col-span-2
                min-[601px]:max-[991px]:whitespace-nowrap
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
              className="translate-y-[-15px] text-[16px] hover:!text-[#4c4ed3] transition-colors duration-200 hover:text-[#4c4ed3]"
            >
              About us
            </a>

            <a
              href="#"
              className="translate-y-[-15px] text-[16px] hover:!text-[#4c4ed3] transition-colors duration-200 hover:text-[#4c4ed3]"
            >
              Contact us
            </a>

            <a
              href="#"
              className="translate-y-[-15px] text-[16px] hover:!text-[#4c4ed3] transition-colors duration-200 hover:text-[#4c4ed3]"
            >
              News and Blog
            </a>

            <a
              href="#"
              className="translate-y-[-15px] text-[16px] hover:!text-[#4c4ed3] transition-colors duration-200 hover:text-[#4c4ed3]"
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
                  text-[16px] hover:!text-[#4c4ed3] transition-colors duration-200
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
                  text-[16px] hover:!text-[#4c4ed3] transition-colors duration-200
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
                text-[16px] hover:!text-[#4c4ed3] transition-colors duration-200
               
              "
            >
              <i className="fa-solid fa-building mr-2 w-[20px]" />
              Hotel
            </a>

            <a
              href="#"
              className="
                translate-y-[-15px]
                text-[16px] hover:!text-[#4c4ed3] transition-colors duration-200
              
              "
            >
              <i className="fa-solid fa-plane mr-2 w-[20px]" />
              Flight
            </a>

            <a
              href="#"
              className="
                translate-y-[-15px]
                text-[16px] hover:!text-[#4c4ed3] transition-colors duration-200
               
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
                hover:!text-[#4c4ed3] transition-colors duration-200
               
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

          <p className="text-[16px] leading-[2]">
    <span className="hover:text-[#4c4ed3]">Flights</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Hotels</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Tours</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Cabs</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">About</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Contact us</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Blogs</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Services</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Detail page</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Policy</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Testimonials</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Newsletters</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Podcasts</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Protests</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">NewsCyber</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Education</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Sports</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Tech and Auto</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Opinion</span>
    &nbsp;&nbsp; <span className="hover:text-[#4c4ed3]">Share Market</span>
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

              <div className="mt-[14px] flex -translate-y-[30px] items-center gap-[10px]">
              <img
                src="https://stackbros.in/bookinga/landing/assets/images/element/paypal.svg"
                alt="PayPal"
                className="block h-[70px] w-[80px] object-contain"
              />

              <img
                src="https://stackbros.in/bookinga/landing/assets/images/element/visa.svg"
                alt="Visa"
                className="block h-[30px] w-[48px] object-contain"
              />

              <img
                src="https://stackbros.in/bookinga/landing/assets/images/element/mastercard.svg"
                alt="Mastercard"
                className="block h-[30px] w-[48px] object-contain"
              />

              <img
                src="https://stackbros.in/bookinga/landing/assets/images/element/expresscard.svg"
                alt="American Express"
                className="block h-[30px] w-[48px] object-contain"
              
              />
            </div>
          </div>

          {/* SOCIAL */}

            <div className="-translate-y-[30px] flex justify-end gap-[10px]
            max-[600px]:translate-y-[-50px]
            max-[600px]:flex-col
            max-[600px]:items-start
            max-[600px]:justify-start
            max-[600px]:gap-[12px]">
            <h3
              className="
                mb-[23px]
                -translate-y-[40px]
                -translate-x-[-180px]
                text-[22px]
                font-black
                text-white
                max-[600px]:mb-0
                max-[600px]:translate-x-0
               max-[600px]:translate-y-0
               max-[600px]:text-left
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
            -translate-y-[50px]
            border-t border-[#27262e]
            pt-[20px]
            text-center
            text-[16px]
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