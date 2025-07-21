import GridContainer from "../components/defaults/GridContainer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid h-screen grid-cols-12">
      <GridContainer cols={12}>
        <div className="bg-red-300 col-span-2">sidebar</div>
        <div className="bg-blue-400 col-span-10">
          this is the rest {children}
        </div>
      </GridContainer>
    </main>
  );
}
