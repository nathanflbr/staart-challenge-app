import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineVpnKey } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import signIn from "@/firebase/auth/signin";
import toast, { Toaster } from "react-hot-toast";
import DynamicHead from "@/components/DynamicHead";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initLogin, setInitLogin] = useState(false);
  const router = useRouter();

  const notify = (type, message) => {
    if (type === "error") {
      toast.error(message, {
        position: "bottom-center",
      });
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const emailMessage = document.getElementById("email-message");
    const passwordMessage = document.getElementById("password-message");
    emailMessage.innerHTML = "";
    passwordMessage.innerHTML = "";
    if (email === "") {
      emailMessage.innerHTML = "O Campo email não pode estar vazio";
    }
    if (password === "") {
      passwordMessage.innerHTML = "O Campo senha não pode estar vazio";
    }
    if (password.length < 6) {
      passwordMessage.innerHTML =
        "Sua senha deve conter pelo menos 6 caracteres";
    }
    setInitLogin(true);

    if (email && password.length >= 6) {
      const { result, error } = await signIn(email, password);
      if (result) {
        return router.push("/app");
      }
      if (error) {
        setInitLogin(false);
        if (error.code === "auth/user-not-found") {
          notify(
            "error",
            "Houve um erro verifique suas credenciais e tente novamente"
          );
        } else {
          notify("error", "Houve um erro inesperado, tente novamente");
        }
      }
    }

    setInitLogin(false);
  };

  return (
    <>
      <DynamicHead title="Login" />
      <Toaster />
      <main className="login">
        <div className="auth">
          <div className="auth__logo">
            <Image
              src="/logotekapta.svg"
              alt="Logo Tekpta"
              width={100}
              height={100}
            ></Image>
          </div>
          <div className="auth__title">
            <h1>Login</h1>
            <p>
              Bem vindo(a) Faça login e acesse sua conta agora e continue seus
              estudos!
            </p>
          </div>
          <form
            onSubmit={(e) => {
              handleForm(e);
            }}
          >
            <div className="auth__inputs">
              <div className="auth__inputs-group">
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Insira seu email"
                />
                <p id="email-message"></p>
              </div>
              <div className="auth__inputs-group">
                <label htmlFor="password">Senha</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Insira sua senha"
                />
                <p id="password-message"></p>
              </div>
              <div className="auth__inputs-group">
                <button disabled={initLogin}>
                  {initLogin ? <span className="loader-form"></span> : "Entrar"}
                </button>
              </div>
            </div>
          </form>
          <div className="auth__options">
            <div className="auth__options__password">
              <Link href={"/forgot-password"}>
                <MdOutlineVpnKey color="#F86424" size={16} />
                <p>Esqueci minha senha</p>
              </Link>
            </div>
            <hr />
            <div className="auth__options__register">
              <p>
                Ainda não possui uma conta?{" "}
                <Link href="/register">
                  <span>Cadastre-se</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="banner">
          <Image
            src="/login-background.png"
            alt="Imagem de uma moça segurando um laptop com sua mão direita e com a sua mãe esquerda segurando o seu óculos, de fundo textos referenciando a como a Tekapta te ajudo no seu ensino"
            fill={true}
            priority
            quality={100}
          ></Image>
        </div>
      </main>
    </>
  );
}
