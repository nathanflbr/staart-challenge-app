import Image from "next/image";
import Navbar from "@/components/Navbar";
import CardTrails from "@/components/CardTrails";
import Footer from "@/components/Footer";
import DynamicHead from "@/components/DynamicHead";
import { CheckAuth } from "@/components/checkAuth";

function App({ data }) {
  return (
    <>
      <DynamicHead title="Home" />
      <CheckAuth>
        <Navbar />
        <main>
          <section className="home">
            <div className="container">
              <div className="home__headline__box">
                <div className="home__headline">
                  <h1>Seja bem-vindo(a)!</h1>
                  <p>
                    Comece sua jornada de programação com nossa plataforma de
                    ensino online e alcance seus objetivos de aprendizagem!
                  </p>
                </div>
                <div className="home__headline__background">
                  <Image
                    src="/home-bg.png"
                    alt="Logo Tekpta"
                    fill={true}
                    quality={100}
                  ></Image>
                </div>
              </div>
            </div>
          </section>
          <CardTrails data={data} />
        </main>
        <Footer />
      </CheckAuth>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://frontend-project.staart.com/journeys");
  const data = await res.json();
  return { props: { data } };
}

export default App;
