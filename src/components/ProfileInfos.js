import Image from "next/image";
import Link from "next/link";
import {
  MdArrowBackIos,
  MdOutlineFileDownload,
  MdOutlineMilitaryTech,
  MdOutlineShare,
} from "react-icons/md";
import { useAuthContext } from "@/context/AuthContext";

export default function ProfileInfos() {
  const { user } = useAuthContext();
  return (
    <>
      <section className="container">
        <div className="headerProfile">
          <div className="headerProfile__headline">
            <div className="headerProfile__backButton">
              <Link href="/app">
                <button>
                  <MdArrowBackIos size={24} /> Voltar
                </button>
              </Link>
            </div>
            <div className="headerProfile__infos">
              <div className="headerProfile__avatar">
                <Image
                  src="/avatar-default.png"
                  alt="Logo Tekpta"
                  height={82}
                  width={82}
                  quality={100}
                ></Image>
              </div>
              <div className="headerProfile__about">
                <h1>{user.email}</h1>
                <span>
                  <MdOutlineMilitaryTech size={24} color="#F86424" /> Assinatura
                  Premium
                </span>
              </div>
            </div>
          </div>
          <div className="headerProfile__bgImage">
            <Image
              src="/bg-profile.png"
              alt="Logo Tekpta"
              fill={true}
              quality={100}
            ></Image>
          </div>
        </div>
        <div className="headerProfile__grid">
          <div className="headerProfile__gridLeft">
            <div className="profileInfos">
              <div>
                <h2>Informações Pessoais</h2>
              </div>
              <div className="profileInfos__email">
                <span>Email:</span>
                <p>{user.email}</p>
              </div>

              {/*               <div className="profileInfos__button">
                <button>Editar Informações</button>
              </div> */}
            </div>
            <div className="insignias">
              <h3>Insígnias</h3>
              <div className="insignias__list">
                <div className="insignia__image">
                  <Image
                    src="/insignias/one.png"
                    alt="Logo Tekpta"
                    fill={true}
                    quality={100}
                  ></Image>
                </div>
                <div className="insignia__image">
                  <Image
                    src="/insignias/two.png"
                    alt="Logo Tekpta"
                    fill={true}
                    quality={100}
                  ></Image>
                </div>
                <div className="insignia__image">
                  <Image
                    src="/insignias/three.png"
                    alt="Logo Tekpta"
                    fill={true}
                    quality={100}
                  ></Image>
                </div>
                <div className="insignia__image">
                  <Image
                    src="/insignias/four.png"
                    alt="Logo Tekpta"
                    fill={true}
                    quality={100}
                  ></Image>
                </div>
                <div className="insignia__image">
                  <Image
                    src="/insignias/five.png"
                    alt="Logo Tekpta"
                    fill={true}
                    quality={100}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="headerProfile__gridRight">
            <div className="accountLevel">
              <div className="level__badge">
                <div className="level__badgeImage">
                  <p>79</p>
                  <Image
                    src="/level-bg.svg"
                    alt="Logo Tekpta"
                    fill={true}
                    quality={100}
                  ></Image>
                </div>
                <div className="level__badgeText">
                  <p>Nível da conta</p>
                </div>
              </div>
              <div className="level__text">
                <p>
                  Aprenda e evolua: aumente seu nível na plataforma através da
                  gamificação
                </p>
              </div>
            </div>
            <div className="accountCertificates">
              <h3>Certificados Emitidos</h3>
              <div className="certificate__card">
                <div className="certificate__headline">
                  <div className="certificate__image">
                    <Image
                      src="/react-certificate.svg"
                      alt="Logo Tekpta"
                      fill={true}
                      quality={100}
                    ></Image>
                  </div>
                  <h4>React do Básico ao Avançado</h4>
                  <p>
                    Dominando o React do básico ao avançado em um único curso
                  </p>
                </div>
                <div className="certificate__actions">
                  <div>
                    <button>
                      <MdOutlineShare size={24} color="#F86424" /> Compartilhar
                    </button>
                  </div>
                  <div>
                    <button>
                      <MdOutlineFileDownload size={24} color="#F86424" />{" "}
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
