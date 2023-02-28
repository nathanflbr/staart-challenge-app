import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";
import { MdLogin, MdOutlineOfflineBolt } from "react-icons/md";
import DynamicHead from "@/components/DynamicHead";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <DynamicHead title="Comece sua carreira como programador" />
      <nav className="navbar">
        <div className="container navbar__menu">
          <div className="navbar__group">
            <Link href={"/app"}>
              <div className="navbar__logo">
                <Image
                  src="/logotekapta.svg"
                  alt="Logo Tekpta"
                  width={100}
                  height={30}
                ></Image>
              </div>
            </Link>
          </div>
          <div className="navbar__login">
            <Link href="/login">
              <button>
                <MdLogin size={18} /> Login
              </button>
            </Link>
          </div>
        </div>
        <div className="gradient__line"></div>
      </nav>
      <main className="">
        <section className="home">
          <div className="container">
            <div className="home__headline__box">
              <div className="home__headline">
                <h1>Comece sua carreira como programador</h1>
                <p>
                  Aprenda em seu próprio ritmo e avance através dos níveis de
                  certificação para provar suas habilidades.
                </p>
                <div className="home__headline__button headline__button__home">
                  <Link href={"/register"}>
                    <button>
                      <MdOutlineOfflineBolt size={18} /> Começar hoje
                    </button>
                  </Link>
                </div>
              </div>
              <div className="home__headline__background">
                <Image
                  src="/homepage-bg.png"
                  alt="Logo Tekpta"
                  fill={true}
                  quality={100}
                ></Image>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
