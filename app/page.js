import MainBanner from "./Components/MainBanner";
import SectionMain from "./Components/Sections/SectionMain";

export default function Home() {

  return (
    <main className="w-full h-full flex justify-center flex-col">
      <MainBanner />
      <SectionMain/>
    </main>
  );
}
