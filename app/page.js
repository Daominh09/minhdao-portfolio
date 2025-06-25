'use client'
import Head from "next/head";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Project from "./components/Project"
import Publication from "./components/Publication";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Project />
      <Publication />
      <Contact />
      <Footer />
    </>
  );
}
