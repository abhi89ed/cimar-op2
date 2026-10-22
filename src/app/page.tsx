import { CareTeam } from "@/components/sections/CareTeam";
import { ClinicTour } from "@/components/sections/ClinicTour";
import { Directors } from "@/components/sections/Directors";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Locations } from "@/components/sections/Locations";
import { News } from "@/components/sections/News";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { Specialties } from "@/components/sections/Specialties";
import { Stories } from "@/components/sections/Stories";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Highlights />
      <Partners />
      <Specialties />
      <Directors />
      <CareTeam />
      <ClinicTour />
      <Stories />
      <News />
      <Locations />
    </>
  );
}
