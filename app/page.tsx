import Image from "next/image";
import Navbar from "./components/nav/Navbar";
import GridContainer from "./components/defaults/GridContainer";
import GridPage from "./(grid)/games/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <GridPage />
    </main>
  );
}
