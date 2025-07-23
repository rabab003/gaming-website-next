import ButtonGradient from "@/app/components/nav/ButtonGradient";
import GridContainer from "../../components/defaults/GridContainer";
import Navbar from "../../components/nav/Navbar";
import SideBar from "../../components/nav/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid h-screen background">
      <ButtonGradient />
      <GridContainer cols={12}>
        <div className="bg-red-300 hidden lg:flex col-span-2">
          <SideBar />
        </div>
        <div className="bg-blue-400 lg:col-span-10 col-span-10">
          <Navbar /> {children}
        </div>
      </GridContainer>
    </main>
  );
}
