import Image from "next/image";
import { useState } from "react";
import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdLogout,
  MdMenu,
} from "react-icons/md";
import { RiBookOpenLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { SlGraduation } from "react-icons/sl";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import signOutAccount from "@/firebase/auth/signout";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user } = useAuthContext();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const router = useRouter();

  const handleSignOut = async (event) => {
    event.preventDefault();

    const { result, error } = await signOutAccount();

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push("/");
  };

  return (
    <>
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
            <div className="navbar__items">
              <ul>
                <Link href={"/app/journeys"}>
                  <li>
                    <SlGraduation color="white" />
                    <p>Trilhas de Aprendizado</p>
                  </li>
                </Link>
                <Link href={"/app/courses"}>
                  <li>
                    <RiBookOpenLine color="white" />
                    <p>Cursos</p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="navbar__account">
            <button
              className="navbar__account__buttonMobile"
              onClick={() => {
                setIsActiveMenu(!isActiveMenu);
              }}
            >
              <div className="navbar__hamburguerButton">
                {isActiveMenu ? (
                  <MdClose color="white" size={24} />
                ) : (
                  <MdMenu color="white" size={24} />
                )}
              </div>
            </button>
            <div className="navbar__accountAvatar">
              <button
                onClick={() => {
                  setIsActiveMenu(!isActiveMenu);
                }}
              >
                <div className="navbar__accountProfile">
                  <Image
                    src="/avatar-default.png"
                    width={180}
                    height={180}
                    alt="Avatar"
                  ></Image>
                  <p>{user?.email ? user.email : "Não logado"}</p>
                  <div>
                    {isActiveMenu ? (
                      <MdKeyboardArrowUp color="white" />
                    ) : (
                      <MdKeyboardArrowDown color="white" />
                    )}
                  </div>
                </div>
              </button>
              {isActiveMenu ? (
                <div className="navbar__submenu">
                  <ul>
                    <Link href={"/app/profile"}>
                      <li>
                        <FaRegUserCircle color="#F86424" size={24} />
                        <p>Meu Perfil</p>
                      </li>
                    </Link>
                    <button onClick={handleSignOut}>
                      <li>
                        <MdLogout color="#F86424" size={24} />
                        <p>Log-out</p>
                      </li>
                    </button>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="gradient__line"></div>
        {isActiveMenu ? (
          <div className="navbar__accountOptions">
            <ul>
              <li>
                <Link href={"/app/journeys"}>
                  <SlGraduation color="#F86424" size={24} />
                  <p>Trilhas de Aprendizado</p>
                </Link>
              </li>
              <li>
                <Link href={"/app/journeys"}>
                  <RiBookOpenLine color="#F86424" size={24} />
                  <p>Cursos</p>
                </Link>
              </li>
              <li>
                <Link href={"/app/profile"}>
                  <FaRegUserCircle color="#F86424" size={24} />
                  <p>Meu Perfil</p>
                </Link>
              </li>
              <li>
                <button onClick={handleSignOut}>
                  <MdLogout color="#F86424" size={24} />
                  <p>Log-out</p>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
    /*     <>
      <Nav>
        <Menu className="container">
          <Group>
            <Link href={"/app"}>
              <div>
                <Image
                  src="/logotekapta.svg"
                  alt="Logo Tekpta"
                  width={100}
                  height={30}
                ></Image>
              </div>
            </Link>
            <NavbarItems>
              <ul>
                <Link href={"/app/journeys"}>
                  <li>
                    <SlGraduation color="white" />
                    <p>Trilhas de Aprendizado</p>
                  </li>
                </Link>
                <li>
                  <RiBookOpenLine color="white" />
                  <p>Cursos</p>
                </li>
              </ul>
            </NavbarItems>
          </Group>
          <div className="navbar__account">
            <button
              className="navbar__account__buttonMobile"
              onClick={() => {
                setIsActiveMenu(!isActiveMenu);
              }}
            >
              <div className="navbar__hamburguerButton">
                {isActiveMenu ? (
                  <MdClose color="white" size={24} />
                ) : (
                  <MdMenu color="white" size={24} />
                )}
              </div>
            </button>
            <div className="navbar__accountAvatar">
              <button
                onClick={() => {
                  setIsActiveMenu(!isActiveMenu);
                }}
              >
                <div className="navbar__accountProfile">
                  <Image
                    src="/avatar-anna-fleus.png"
                    width={180}
                    height={180}
                    alt="Avatar"
                  ></Image>
                  <p>{user?.email ? user.email : "Não logado"}</p>
                  <div>
                    <MdKeyboardArrowDown color="white" />
                  </div>
                </div>
              </button>
              {isActiveMenu ? (
                <div className="navbar__submenu">
                  <ul>
                    <Link href={"/app/profile"}>
                      <li>
                        <FaRegUserCircle color="#F86424" size={24} />
                        <p>Meu Perfil</p>
                      </li>
                    </Link>
                    <button onClick={handleSignOut}>
                      <li>
                        <MdLogout color="#F86424" size={24} />
                        <p>Log-out</p>
                      </li>
                    </button>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Menu>
        <div className="navbar__line"></div>
        {isActiveMenu ? (
          <div className="navbar__accountOptions">
            <ul>
              <li>
                <Link href={"/app/journeys"}>
                  <SlGraduation color="#F86424" size={24} />
                  <p>Trilhas de Aprendizado</p>
                </Link>
              </li>
              <li>
                <RiBookOpenLine color="#F86424" size={24} />
                <p>Cursos</p>
              </li>
              <li>
                <Link href={"/app/profile"}>
                  <FaRegUserCircle color="#F86424" size={24} />
                  <p>Meu Perfil</p>
                </Link>
              </li>
              <li>
                <button onClick={handleSignOut}>
                  <MdLogout color="#F86424" size={24} />
                  <p>Log-out</p>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </Nav>
      <nav className={`${styles.navbar}`}></nav>
    </> */
  );
}
