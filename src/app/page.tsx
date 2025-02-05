import Benefits from "@/components/globalcomponents/Benefits/Benefits";
import BrandDiffer from "@/components/globalcomponents/BrandDiffer/BrandDiffer";
import Hero from "@/components/globalcomponents/Hero/Hero";
import Idea from "@/components/globalcomponents/Idea/Idea";
import NewCeramic from "@/components/NewCeramic";




import React from "react";
import Popularproducts from "./popularproducts/page";
export default function Home() {
  return (
    <div>
      <Hero />
    <NewCeramic />
      <BrandDiffer />
      <Idea />
      <Popularproducts/>
      <Benefits />
    </div>
  );
}
