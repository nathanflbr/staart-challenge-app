import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="mainFooter">
            <div className="mainFooter__copy">
              <Image
                src="/logotekapta.svg"
                alt="Logo Tekpta"
                width={162}
                height={42}
              ></Image>
              <p>
                acreditamos que a educação é uma ferramenta poderosa para
                transformar vidas e construir um futuro melhor.
              </p>
            </div>
            <div className="mainFooter_items">
              <ul>
                <p>Aprendizado</p>
                <li>Trilhas</li>
                <li>Cursos</li>
              </ul>
              <ul>
                <p>Suporte</p>
                <li>Email</li>
                <li>Discord</li>
                <li>Fórum</li>
              </ul>
              <ul>
                <p>Privacidade</p>
                <li>Termos de uso</li>
                <li>Politica de Privacidade</li>
                <li>Dúvidas frequentes</li>
              </ul>
            </div>
          </div>
          <div className="subFooter">
            <div className="gradient__line"></div>
            <div className="subFooter__infos">
              <div className="subFooter__copy">
                <p>2023 © Todos os direitos reservados. Tekapta.</p>
              </div>
              <div className="subFooter__social">
                <ul>
                  <li>
                    <Image
                      src="/icons/socials/instagram-logo.svg"
                      alt="Logo Tekpta"
                      width={24}
                      height={24}
                    ></Image>
                  </li>
                  <li>
                    <Image
                      src="/icons/socials/facebook-logo.svg"
                      alt="Logo Tekpta"
                      width={24}
                      height={24}
                    ></Image>
                  </li>
                  <li>
                    <Image
                      src="/icons/socials/twitter-logo.svg"
                      alt="Logo Tekpta"
                      width={24}
                      height={24}
                    ></Image>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
