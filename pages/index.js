import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";
import { CourseItem } from "../components/CourseItem";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [visibleSection, setVisibleSection] = useState();
  const [scrolling, setScrolling] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formResult, setFormResult] = useState(null);

  // Handle Scroll Functions
  const handleResize = () => {
    if (window.innerWidth < 1024) {
    } else {
      setNavbarOpen(false);
    }
  };

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  const scrollTo = (ele) => {
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Creation Section Refs
  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const certificationsRef = useRef(null);
  const myExperienceRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef = useRef(null);

  const formRef = useRef(null);

  useEffect(() => {
    const sectionRefs = [
      { section: "home", ref: homeRef, id: 1 },
      { section: "about", ref: aboutRef, id: 2 },
      { section: "certifications", ref: certificationsRef, id: 3 },
      { section: "my-experience", ref: myExperienceRef, id: 4 },
      { section: "courses", ref: coursesRef, id: 5 },
      { section: "contact", ref: contactRef, id: 6 },
    ];

    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition >= offsetTop && scrollPosition <= offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
        // console.log(visibleSection);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolling(window.pageYOffset > 110)
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const renderThemeChanger = () => {
    if (!mounted) return null;

    if (currentTheme === "dark") {
      return (
        <svg
          className="w-6 h-6 transition-all duration-150 ease-in-out dark:flex dark:text-mid dark:group-hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          className="w-6 h-6 transition-all duration-150 ease-in-out flex text-mid group-hover:text-darker"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    }
  };

  return (
    <div className="bg-white dark:bg-darker transition-all duration-150 ease-in-out">
      <Head>
        <title>Ben Weston | AWS Cloud Certified SysOps Administrator</title>
        <meta
          name="description"
          content="The portfolio of AWS Cloud Certified SysOps Administrator, Ben Weston"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`relative w-full bg-opacity-0 min-h-screen transition-all duration-150 ease-in-out ${
          navbarOpen ? "overflow-hidden" : "overflow-auto"
        }`}
      >
        {/* Full-screen Menu */}
        <div
          className={`fixed w-full z-50 h-screen pt-24 bg-white dark:bg-darker bg-opacity-100 transform delay-100 transition-all duration-150 ${
            navbarOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="container relative mx-auto w-full">
            <nav className="block ml-auto w-full">
              <ul className="z-50 flex flex-col items-start gap-y-2 w-full">
                <li className="z-50 block list-none lg:inline-block">
                  <button
                    href="#"
                    className={`mobile-link nav-base w-full py-1 ${
                      visibleSection === "home"
                        ? "nav-selected"
                        : "nav-unselected"
                    }`}
                    onClick={() => {
                      setNavbarOpen(false);
                      scrollTo(homeRef.current);
                    }}
                  >
                    Home
                  </button>
                </li>
                <li className="z-50 block list-none lg:inline-block">
                  <button
                    href="#"
                    className={`mobile-link nav-base w-full py-1 ${
                      visibleSection === "about"
                        ? "nav-selected"
                        : "nav-unselected"
                    }`}
                    onClick={() => {
                      setNavbarOpen(false);
                      scrollTo(aboutRef.current);
                    }}
                  >
                    About
                  </button>
                </li>
                <li className="z-50 block list-none lg:inline-block">
                  <button
                    href="#"
                    className={`mobile-link nav-base w-full py-1 ${
                      visibleSection === "certifications"
                        ? "nav-selected"
                        : "nav-unselected"
                    }`}
                    onClick={() => {
                      setNavbarOpen(false);
                      scrollTo(certificationsRef.current);
                    }}
                  >
                    Certifications
                  </button>
                </li>
                <li className="z-50 block list-none lg:inline-block">
                  <button
                    href="#"
                    className={`mobile-link nav-base w-full py-1 ${
                      visibleSection === "my-experience"
                        ? "nav-selected"
                        : "nav-unselected"
                    }`}
                    onClick={() => {
                      setNavbarOpen(false);
                      scrollTo(myExperienceRef.current);
                    }}
                  >
                    Experience
                  </button>
                </li>
                <li className="z-50 block list-none lg:inline-block">
                  <button
                    href="#"
                    className={`mobile-link nav-base w-full py-1 ${
                      visibleSection === "contact"
                        ? "nav-selected"
                        : "nav-unselected"
                    }`}
                    onClick={() => {
                      setNavbarOpen(false);
                      scrollTo(contactRef.current);
                    }}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Header and Nav */}
        <header
          className={`header top-0 mx-auto flex items-center z-50 fixed w-full transition-all duration-150 h-20 ${
            scrolling && !navbarOpen
              ? "dark:bg-darker bg-white bg-opacity-95"
              : "bg-transparent"
          }`}
          ref={headerRef}
        >
          {/* Logo and Nav container */}
          <div className="container relative flex items-center h-full mx-auto gap-x-2 sm:gap-x-4 md:gap-x-6">
            {/* Logo */}
            <div className="flex items-center">
              <p className="text-2.5xl font-light font-display dark:text-white text-darker mb-0 transition-all duration-150 ease-in-out">
                ben<span className="text-brandAlt font-extrabold">weston</span>
              </p>
            </div>
            {/* Navigation */}
            <nav className="block ml-auto h-20">
              <ul className="z-50 flex items-center h-full gap-x-2">
                <li className="h-full z-50 hidden list-none lg:flex">
                  <button
                    href="#"
                    className={`nav-base px-3 ${
                      visibleSection === "home"
                        ? "nav-selected"
                        : "nav-unselected"
                    }`}
                    onClick={() => {
                      scrollTo(homeRef.current);
                    }}
                  >
                    Home
                  </button>
                </li>
                <li className="h-full z-50 hidden list-none lg:flex">
                  <button
                    href="#"
                    className={`nav-base px-3 ${
                      visibleSection === "about"
                        ? "nav-selected"
                        : "nav-unselected"
                    }`}
                    onClick={() => {
                      scrollTo(aboutRef.current);
                    }}
                  >
                    About
                  </button>
                </li>
                <li className="h-full z-50 hidden list-none lg:flex">
                  <button
                    href="#"
                    className={`nav-base px-3 ${
                      visibleSection === "certifications"
                        ? "nav-selected"
                        : "nav-unselected"
                    }`}
                    onClick={() => {
                      scrollTo(certificationsRef.current);
                    }}
                  >
                    Certifications
                  </button>
                </li>
                <li className="h-full z-50 hidden list-none lg:flex">
                  <button
                    href="#"
                    className={`nav-base px-3 ${
                      visibleSection === "my-experience"
                        ? "nav-selected"
                        : "nav-unselected"
                    }`}
                    onClick={() => {
                      scrollTo(myExperienceRef.current);
                    }}
                  >
                    Experience
                  </button>
                </li>
                <li className="h-full z-50 hidden list-none lg:flex">
                  <button
                    href="#"
                    className={`nav-base px-3 ${
                      visibleSection === "courses"
                        ? "nav-selected"
                        : "nav-unselected"
                    }`}
                    onClick={() => {
                      scrollTo(coursesRef.current);
                    }}
                  >
                    Courses
                  </button>
                </li>
                <li className="h-full z-50 hidden list-none lg:flex">
                  <button
                    href="#"
                    className={`nav-base px-3 ${
                      visibleSection === "contact"
                        ? "nav-selected"
                        : "nav-unselected"
                    }`}
                    onClick={() => {
                      scrollTo(contactRef.current);
                    }}
                  >
                    Contact
                  </button>
                </li>

                <li className="h-full z-50 flex items-center list-none lg:hidden group">
                  <button
                    className={`relative w-6 h-10 flex items-center ${
                      navbarOpen
                        ? "text-dark dark:text-white"
                        : "text-mid group-hover:text-dark dark:group-hover:text-white"
                    } focus:outline-none`}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                      <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarOpen ? "rotate-45" : "-translate-y-1.5"
                        }`}
                      ></span>
                      <span
                        aria-hidden="true"
                        className={`block absolute  h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarOpen ? "opacity-0" : "opacity-100"
                        }`}
                      ></span>
                      <span
                        aria-hidden="true"
                        className={`block absolute  h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                          navbarOpen ? "-rotate-45" : "translate-y-1.5"
                        }`}
                      ></span>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
            {/* Theme Switch */}
            <div className="flex h-full items-center">
              <button
                className="flex items-center justify-center w-6 h-10 transition-all duration-150 ease-in rounded-sm focus:outline-none group bg-transparent outline-none"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                }}
              >
                {renderThemeChanger()}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <main
          className={`flex-col flex h-screen relative w-full overflow-hidden`}
          id="home"
          ref={homeRef}
        >
          {/* Main */}
          <div className="container relative flex flex-col items-start justify-center flex-grow mx-auto md:px-20 section z-20 overflow-hidden">
            <div className="w-full flex flex-col">
              <h1 className="hero-header">
                ben
                <span className="hero-header-emphasis">weston</span>
              </h1>
              <h2 className="hero-subheader">
                Cloud &nbsp;·&nbsp; Container &nbsp;·&nbsp; Linux Enthusiast
              </h2>

              <div className="flex flex-row gap-y-3 md:gap-y-0 gap-x-4 md:gap-x-8 items-center mx-auto mt-4">
                <button
                  className="btn-sm sm:btn-lg btn-brand group"
                  onClick={() => {
                    scrollTo(myExperienceRef.current);
                  }}
                >
                  See my experience
                </button>

                <button
                  className="btn-sm sm:btn-lg btn-outline group"
                  onClick={() => {
                    scrollTo(contactRef.current);
                  }}
                >
                  Get in touch
                </button>
              </div>
            </div>
          </div>

          {/* Fade */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-mid/20 to-transparent z-10"></div>

          {/* Bottom Left Rectangle */}
          <div className="absolute top-1/2 -left-48 transform -translate-y-1/2 w-96 h-96">
            <img
              src="/rectangle-ornament.svg"
              alt="An SVG of an eye"
              className="animate-spin-19s"
            />
          </div>

          {/* Top Right Rectangle */}
          <div className="absolute -top-72 -right-48 transform w-144 h-144">
            <img
              src="/rectangle-ornament.svg"
              alt="An SVG of an eye"
              className="animate-spin-19s"
            />
          </div>

          {/* Upper Left Rectangle */}
          <div className="absolute top-1/3 left-1/3 transform -translate-y-1/2 -translate-x-1/2 w-72 h-72">
            <img
              src="/rectangle-ornament.svg"
              alt="An SVG of an eye"
              className="animate-spin-17s"
            />
          </div>

          {/* Upper Right Rectangle */}
          <div className="absolute bottom-1/4 right-1/4 transform translate-y-1/2 translate-x-1/2 w-48 h-48">
            <img
              src="/rectangle-ornament.svg"
              alt="An SVG of an eye"
              className="animate-spin-17s"
            />
          </div>
        </main>

        {/* About */}
        <section
          className="relative flex flex-col w-full md:px-20 py-28 section"
          id="about"
          ref={aboutRef}
        >
          <div className="absolute right-0 top-0 w-2/5 h-full bg-[url('/rectangle-ornament.svg')] bg-cover bg-left bg-no-repeat"></div>

          <div className="container mx-auto flex flex-col-reverse items-center w-full md:flex-row gap-x-6">
            <div className="flex flex-col w-full md:w-1/2">
              <h3 className="section-header">
                about<span className="section-header-emphasis">me</span>
              </h3>
              <p className="section-subheader">
                Cloud · Container · Linux Enthusiast
              </p>
              <p>
                Hello! I'm Ben and I'm a professional cloud engineer with more
                than 14 years of experience in IT. I'm originally from London,
                but in winter 2021 I relocated to the beautiful Cotswolds in
                central-southwest England.
              </p>
              <p>
                I've been involved in computers in one way or another since I
                bought my first as a child; a Sinclair ZX Spectrum+. But it was
                in October 2008 after spending ~10yrs building gaming PCs that I
                got my big break as a Technical Support Engineer for a pioneer
                in the Open Access STEM publishing scene: BioMed Central.{" "}
              </p>
              <p>
                I'm a voracious learner, earning multiple IT certifications and
                I have completed over 30 courses. I have significant experience
                working with cross-disciplined teams spanning multiple countries
                and time zones for multi-million Dollar business-critical
                projects.
              </p>
            </div>
            <div className="flex items-center w-full h-full mb-4 md:w-1/2 md:mb-0">
              <div className="block relative w-full md:w-3/5 ml-auto">
                <Image
                  src="/profile-picture.png"
                  width={741}
                  height={841}
                  layout="responsive"
                  alt={"Ben Weston headshot"}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section
          className="flex flex-col w-full md:px-20 py-28 section"
          id="certifications"
          ref={certificationsRef}
        >
          <article className="container mx-auto">
            <h3 className="section-header">
              my
              <span className="section-header-emphasis">certifications</span>
            </h3>
            <p className="section-subheader">Certifications I have achieved</p>

            {/* certifications icons */}
            <article className="relative grid grid-cols-3 md:grid-cols-5 gap-12">
              <Image
                src="/icons/linux-badge.png"
                width={500}
                height={474}
                layout="responsive"
              />
              <Image
                src="/icons/cje-badge.png"
                width={400}
                height={400}
                layout="responsive"
              />
              <Image
                src="/icons/terraform.png"
                width={340}
                height={340}
                layout="responsive"
              />
              <Image
                src="/icons/aws-cloud.png"
                width={300}
                height={300}
                layout="responsive"
              />

              <Image
                src="/icons/aws-sysops.png"
                width={300}
                height={300}
                layout="responsive"
              />
            </article>
          </article>
        </section>

        {/* Experience */}
        <section
          className="flex flex-col w-full md:px-20 py-28 section bg-light/10 dark:bg-darker"
          id="my-experience"
          ref={myExperienceRef}
        >
          <article className="container mx-auto">
            {/* Experience header */}
            <h3 className="section-header">
              my<span className="section-header-emphasis">experience</span>
            </h3>
            <p className="section-subheader">Certifications I have achieved</p>

            <div className="flex flex-col md:flex-row gap-x-12">
              <article className="flex flex-col w-full items-start mb-8">
                {/* Springer Nature */}
                <div className="w-full flex flex-col">
                  <h4 className="text-2xl">Springer Nature</h4>
                  <p>
                    Full-time · 8 yrs 4 mos · London, England, United Kingdom
                  </p>
                </div>

                {/* Role 1 */}
                <div className="w-full flex items-center">
                  <div className="connector-container">
                    <div className="connector-line">
                      <div className="connector-bullet"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1 flex-1">
                    <p className="mb-0 font-bold text-lg text-dark dark:text-white">
                      DevOps Engineer
                    </p>
                    <p className="mb-0 text-sm text-mid dark:text-light font-condensed uppercase tracking-wide">
                      Apr 2019 - Present · 3 yrs 5 mos
                    </p>
                    <p className="mb-0">
                      Provides operations & software development lifecycle
                      support for deployments on AWS.
                    </p>
                    <p className="mb-8">
                      Reduced ongoing costs significantly using AWS Trusted
                      Advisor.
                    </p>
                  </div>
                </div>

                {/* Role 2 */}
                <div className="w-full flex items-center">
                  <div className="connector-container">
                    <div className="connector-line">
                      <div className="connector-bullet"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1 flex-1">
                    <p className="mb-0 font-bold text-lg text-dark dark:text-white">
                      Senior Platform Support Engineer
                    </p>
                    <p className="mb-0 text-sm text-mid dark:text-light font-condensed uppercase tracking-wide">
                      Mar 2016 - Apr 2019 · 3 yrs 2 mos
                    </p>
                    <p className="mb-0">
                      Managed two staff providing application, infrastructure &
                      development support services.{" "}
                    </p>
                    <p className="mb-8">
                      Created self-service portal providing thousands of staff
                      access to services using Jira Service Desk
                    </p>
                  </div>
                </div>

                {/* Role 3 */}
                <div className="w-full flex items-center">
                  <div className="connector-container">
                    <div className="connector-line">
                      <div className="connector-bullet"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1 flex-1">
                    <p className="mb-0 font-bold text-lg text-dark dark:text-white">
                      Head of Service Delivery and Workflow Support
                    </p>
                    <p className="mb-0 text-sm text-mid dark:text-light font-condensed uppercase tracking-wide">
                      May 2014 - Mar 2016 · 1 yr 11 mos
                    </p>
                    <p className="mb-0">
                      Managed ~14 staff providing software development &
                      technical support services.
                    </p>
                    <p className="mb-0">
                      Shipped major software releases ~48 times in 2 years by
                      implementing release planning.
                    </p>
                  </div>
                </div>
              </article>

              <article className="flex flex-col w-full items-start">
                {/* BioMed Central */}
                <div className="w-full flex flex-col">
                  <h4 className="text-2xl">BioMed Central</h4>
                  <p>Full-time · 7 yrs · London, England, United Kingdom</p>
                </div>

                {/* Role 1 */}
                <div className="w-full flex items-center">
                  <div className="connector-container">
                    <div className="connector-line">
                      <div className="connector-bullet"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1 flex-1">
                    <p className="mb-0 font-bold text-lg text-dark dark:text-white">
                      Technical Lead
                    </p>
                    <p className="mb-0 text-sm text-mid dark:text-light font-condensed uppercase tracking-wide">
                      Oct 2012 - May 2014 · 1 yr 8 mos
                    </p>
                    <p className="mb-8">
                      Managed two staff providing 1st line technical support
                      services Received BioMed Central Staff Excellence Award in
                      IT at 2013 conference.
                    </p>
                  </div>
                </div>

                {/* Role 2 */}
                <div className="w-full flex items-center">
                  <div className="connector-container">
                    <div className="connector-line">
                      <div className="connector-bullet"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1 flex-1">
                    <p className="mb-0 font-bold text-lg text-dark dark:text-white">
                      Technical Support Engineer
                    </p>
                    <p className="mb-0 text-sm text-mid dark:text-light font-condensed uppercase tracking-wide">
                      Oct 2008 - Oct 2012 · 4 yrs 1 mo
                    </p>
                    <p className="mb-8">
                      Provided technical support services to ~250 members of
                      staff Created incident management system.
                    </p>
                  </div>
                </div>

                {/* Role 3 */}
                <div className="w-full flex items-center">
                  <div className="connector-container">
                    <div className="connector-line">
                      <div className="connector-bullet"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1 flex-1">
                    <p className="mb-0 font-bold text-lg text-dark dark:text-white">
                      Customer Services Senior Executive
                    </p>
                    <p className="mb-0 text-sm text-mid dark:text-light font-condensed uppercase tracking-wide">
                      Jun 2007 - Oct 2008 · 1 yr 5 mos
                    </p>
                    <p className="mb-0">
                      Provided support to website users & institutional
                      subscription holders via telephone & email using
                      Salesforce
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </article>
        </section>

        {/* Courses */}
        <section
          className="flex flex-col w-full md:px-20 py-28 section bg-light/10 dark:bg-darker"
          id="courses"
          ref={coursesRef}
        >
          <article className="container mx-auto">
            <h3 className="section-header">
              <span className="section-header-emphasis">courses</span>
            </h3>
            <p className="section-subheader">Courses I have completed</p>

            {/* certifications icons */}
            <article className="relative grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-4">
              <div className="flex flex-col bg-light-200 gap-y-4">
                <p className="font-bold mb-0 text-dark dark:text-white">
                  Digital Cloud Training
                </p>
                <div className="flex flex-col border border-light/40 dark:border-dark rounded-sm">
                  <CourseItem
                    courseTitle={"AWS Certified SysOps Administrator Associate"}
                    link={
                      "https://twitter.com/bweston26918/status/1390297506718777345"
                    }
                  />
                  <CourseItem
                    courseTitle={"AWS Networking Masterclass"}
                    link={
                      "https://twitter.com/bweston26918/status/1374390692923863055"
                    }
                  />
                  <CourseItem
                    courseTitle={
                      "AWS Identity Management with AWS IAM, SSO & Federation"
                    }
                    link={
                      "https://twitter.com/bweston26918/status/1374390692923863055"
                    }
                  />
                </div>
                <p className="font-bold mb-0 text-dark dark:text-white">
                  A Cloud Guru
                </p>
                <div className="flex flex-col border border-light/40 dark:border-dark rounded-sm">
                  <CourseItem
                    courseTitle={"Docker Certified Associate (DCA)"}
                    link={"https://verify.acloud.guru/A5AB4DFD8AEB"}
                  />
                  <CourseItem
                    courseTitle={"Learn Docker by Doing"}
                    link={"https://verify.acloud.guru/2941C0E9C4E7"}
                  />
                  <CourseItem
                    courseTitle={"Docker - Deep Dive"}
                    link={"https://verify.acloud.guru/E7806789D28A"}
                  />
                  <CourseItem
                    courseTitle={"Docker Quick Start"}
                    link={"https://verify.acloud.guru/E9CEC367D78E"}
                  />
                  <CourseItem
                    courseTitle={"Introduction to Containers and Docker"}
                    link={"https://verify.acloud.guru/E9CEC367D78E"}
                  />
                  <CourseItem
                    courseTitle={
                      "Beginner’s Guide to Containers and Orchestration"
                    }
                    link={"https://verify.acloud.guru/97F3FB97FF3D"}
                  />
                  <CourseItem
                    courseTitle={"Essential Container Concepts"}
                    link={"https://verify.acloud.guru/AF5EAFB5E096"}
                  />
                  <CourseItem
                    courseTitle={"Certified Jenkins Engineer (2020)"}
                    link={"https://verify.acloud.guru/360D9B6937F0"}
                  />
                  <CourseItem
                    courseTitle={"Certified Jenkins Engineer"}
                    link={"https://verify.acloud.guru/D5C3BE707EE1"}
                  />
                  <CourseItem
                    courseTitle={"Jenkins Pipelines"}
                    link={"https://verify.acloud.guru/BF6477837344"}
                  />
                  <CourseItem
                    courseTitle={"Jenkins Administration"}
                    link={"https://verify.acloud.guru/A1F1C4A8ED49"}
                  />
                  <CourseItem
                    courseTitle={"Learn Jenkins by Doing"}
                    link={"https://verify.acloud.guru/D5D2A3B57D6B"}
                  />
                  <CourseItem
                    courseTitle={"Jenkins Fundamentals"}
                    link={"https://verify.acloud.guru/27C7E3E5C37A"}
                  />
                  <CourseItem
                    courseTitle={"Jenkins Quick Start"}
                    link={"https://verify.acloud.guru/27C7E3E5C37A"}
                  />
                  <CourseItem
                    courseTitle={"HashiCorp Certified Terraform Associate"}
                    link={"https://verify.acloud.guru/E7A1DD435D75"}
                  />
                  <CourseItem
                    courseTitle={"Introduction to Cloud Computing"}
                    link={"https://verify.acloud.guru/DE923BC180FD"}
                  />
                  <CourseItem
                    courseTitle={
                      "LPIC-1: System Administrator – Exam 102 (v5 Objectives)"
                    }
                    link={null}
                  />
                  <CourseItem
                    courseTitle={
                      "LPIC-1: System Administrator Exam 101 (v5 Objectives)"
                    }
                    link={null}
                  />
                  <CourseItem
                    courseTitle={"LPI Linux Essentials Certification"}
                    link={null}
                  />
                </div>
              </div>
              <div className="flex flex-col bg-light-200 gap-y-4">
                <p className="font-bold mb-0 text-dark dark:text-white">
                  Cloud Academy
                </p>
                <div className="flex flex-col border border-light/40 dark:border-dark rounded-sm">
                  <CourseItem
                    courseTitle={
                      "Docker Certified Associate (DCA) Exam Preparation"
                    }
                    link={
                      "https://certificates.cloudacademy.com/ae531bed852d520dfc9a0f7b993c07cda8b44c6f.pdf"
                    }
                  />
                  <CourseItem
                    courseTitle={"Linux Server Professional - LPIC-102"}
                    link={null}
                  />
                  <CourseItem
                    courseTitle={"Linux Server Professional - LPIC-101"}
                    link={null}
                  />
                </div>

                <p className="font-bold mb-0 text-dark dark:text-white">
                  Udemy
                </p>
                <div className="flex flex-col border border-light/40 dark:border-dark rounded-sm">
                  <CourseItem
                    courseTitle={
                      "HashiCorp Certified: Terraform Associate 2021"
                    }
                    link={
                      "https://www.udemy.com/certificate/UC-9b68140c-23cd-4e5d-b1ce-24924e1a13a0/"
                    }
                  />
                  <CourseItem
                    courseTitle={
                      "Terraform for AWS - Beginner to Expert 2020 (0.12)"
                    }
                    link={
                      "https://www.udemy.com/certificate/UC-64825cb8-29f2-42e4-8261-dbba845ebe0e/"
                    }
                  />
                  <CourseItem
                    courseTitle={
                      "HashiCorp Certified: Terraform Associate Prep Course 2020"
                    }
                    link={
                      "https://www.udemy.com/certificate/UC-271c1b53-fdb7-467e-b6bf-4e92ee58d0b1/"
                    }
                  />

                  <CourseItem
                    courseTitle={"Building Cloud Infrastructure with Terraform"}
                    link={
                      "https://www.udemy.com/certificate/UC-bd3cdf69-395a-462e-a18e-1f3ae3d7b17e/"
                    }
                  />

                  <CourseItem
                    courseTitle={
                      "Learning Linux Essentials: Taking your first steps in Linux"
                    }
                    link={
                      "https://www.udemy.com/certificate/UC-547e766d-a9b8-4eaf-ab0d-0e2164307cb5/"
                    }
                  />

                  <CourseItem
                    courseTitle={
                      "LPI Linux Essentials (010-160) Complete Course and Exams"
                    }
                    link={
                      "https://www.udemy.com/certificate/UC-090554a3-85b8-4bf3-be7e-69fa0db28a15/"
                    }
                  />
                </div>

                <p className="font-bold mb-0 text-dark dark:text-white">
                  CloudBees University
                </p>
                <div className="flex flex-col border border-light/40 dark:border-dark rounded-sm">
                  <CourseItem
                    courseTitle={"Jenkins Level 1: Pipeline Essentials"}
                    link={"https://verify.skilljar.com/c/68sd9ofzfz2s"}
                  />
                  <CourseItem
                    courseTitle={"Jenkins Level 1: Administration"}
                    link={"https://verify.skilljar.com/c/hxhc7co88z6q"}
                  />
                  <CourseItem
                    courseTitle={"Jenkins: Essentials	Link"}
                    link={"https://verify.skilljar.com/c/uwaeg32f5dpk"}
                  />
                </div>

                <p className="font-bold mb-0 text-dark dark:text-white">edX</p>
                <div className="flex flex-col border border-light/40 dark:border-dark rounded-sm">
                  <CourseItem
                    courseTitle={"Introduction to Linux (LFS101x)	"}
                    link={
                      "https://courses.edx.org/certificates/d353b70e423541ea8a27a229c4358539"
                    }
                  />
                </div>

                <p className="font-bold mb-0 text-dark dark:text-white">
                  Global Knowledge
                </p>
                <div className="flex flex-col border border-light/40 dark:border-dark rounded-sm">
                  <CourseItem
                    courseTitle={"Systems Operations on AWS"}
                    link={
                      "https://twitter.com/bweston26918/status/1285844570115313664/photo/1"
                    }
                  />
                </div>
              </div>
            </article>
          </article>
        </section>

        {/* Contact */}
        <section
          className="flex flex-col w-full md:px-20 py-28 section bg-light/10 dark:bg-darker justify-center items-start section"
          id="contact"
          ref={contactRef}
        >
          <article className="flex flex-col container mx-auto">
            {/* Header */}
            <h3 className="section-header">
              <span className="section-header-emphasis">contact</span>
            </h3>
            <p className="section-subheader">
              Email me at bweston26918@gmail.com or message me below:
            </p>

            <div className="w-full max-w-2xl h-48">
              {!formResult ? (
                <form
                  ref={formRef}
                  method="POST"
                  className="flex flex-col items-start"
                >
                  <input
                    type="hidden"
                    name="subject"
                    value="New message received via benweston.me.uk"
                  ></input>
                  <input
                    type="hidden"
                    name="access_key"
                    value="98270c80-4eec-4d0b-a2c1-8387a68a86bb"
                  />
                  <div className="grid gap-6 sm:grid-cols-2 w-full">
                    <div className="relative z-0">
                      <input
                        type="text"
                        name="name"
                        className="peer block w-full appearance-none border-0 border-b border-mid bg-transparent py-2.5 px-0 text-base text-dark dark:text-white focus:border-brand focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-base dark:text-white text-mid font-medium duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand peer-focus:dark:text-brand">
                        Your name
                      </label>
                    </div>
                    <div className="relative z-0">
                      <input
                        type="text"
                        name="email"
                        className="peer block w-full appearance-none border-0 border-b border-mid bg-transparent py-2.5 px-0 text-base text-dark dark:text-white focus:border-brand focus:outline-none focus:ring-0"
                        placeholder=" "
                      />
                      <label className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-base dark:text-white text-mid font-medium duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand peer-focus:dark:text-brand">
                        Your email
                      </label>
                    </div>
                    <div className="relative z-0 col-span-2">
                      <textarea
                        name="message"
                        rows="5"
                        className="peer block w-full appearance-none border-0 border-b border-mid bg-transparent py-2.5 px-0 text-base text-dark dark:text-white focus:border-brand focus:outline-none focus:ring-0"
                        placeholder=" "
                      ></textarea>
                      <label className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 transform text-base dark:text-white text-mid font-medium duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-brand peer-focus:dark:text-brand">
                        Your message
                      </label>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      const formData = new FormData(formRef.current);
                      e.preventDefault();
                      var object = {};
                      formData.forEach((value, key) => {
                        object[key] = value;
                      });
                      var json = JSON.stringify(object);
                      setFormResult("Sorry, we are loading at the moment");

                      fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                        },
                        body: json,
                      })
                        .then(async (response) => {
                          let json = await response.json();
                          if (response.status == 200) {
                            setFormResult(json.message);
                          } else {
                            console.log(response);
                            setFormResult(json.message);
                          }
                        })
                        .catch((error) => {
                          console.log(error);
                          setFormResult("Oops! Something went wrong!");
                        });
                    }}
                    href={`mailto:ben@benweston.com`}
                    className="mt-4 btn-brand btn-md group"
                  >
                    Send
                  </button>
                </form>
              ) : formResult == "Email sent successfully!" ? (
                <p>
                  Thank you for your message. I'll get back to you as soon as I
                  can.
                </p>
              ) : (
                <p>{formResult}</p>
              )}
            </div>
          </article>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-darker justify-center flex-col flex w-full px-0 py-8 section">
          <div className="container w-full mx-auto flex items-center">
            {/* Text */}
            <div className="flex items-center">
              <p className="text-2.5xl font-light font-display dark:text-white text-darker mb-0 transition-all duration-150 ease-in-out">
                ben<span className="text-brandAlt font-extrabold">weston</span>
              </p>
            </div>
            <p className="w-auto mb-0 ml-auto">&copy; 2022 benweston.me.uk</p>
          </div>
        </footer>

        {/* Fixed Container */}
      </div>
    </div>
  );
}
