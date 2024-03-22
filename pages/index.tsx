import Link from "next/link";
import React from "react";
import Banner from "../sections/Banner/Banner";
import Scene from "../sections/Scene/Scene";
import Message from "../sections/Message/Message";
import Carousel from "../sections/Carousel/Carousel";

const IndexPage = () => (
  <>
    <Scene />
    <Banner />
    <Message />
    <Carousel />
  </>
);

export default IndexPage;
