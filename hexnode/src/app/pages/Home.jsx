import Achievements from "../../components/layout/Achievements";
import FeedBack from "../../components/layout/Feedback";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import HeroSection from "../../components/layout/HeroSection";
import KioskLayout from "../../components/layout/KioskLayout";
import KioskMode from "../../components/layout/KioskMode";
import PlatForms from "../../components/layout/PlatForms";
import SignUp from "../../components/layout/SignUp";


export default function Home() {
  return (
    <>
      <header >
        <Header />
      </header>

      <main className="overflow-hidden">
        <section className=' bg-blue' >
          <HeroSection />
        </section>
        <section>
          <Achievements />
        </section>

        <section>
          <KioskLayout />
        </section>

        <section>
          <KioskMode />
        </section>

        <section>
          <FeedBack />
        </section>

        <section>
          <PlatForms />
        </section>

        <section>
          <SignUp />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

