import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import resetPassword from "@/firebase/auth/resetPassword";
import Link from "next/link";
import DynamicHead from "@/components/DynamicHead";

export default function Home() {
  const [email, setEmail] = useState("");
  const [initLogin, setInitLogin] = useState(false);

  const notify = (type, message) => {
    if (type === "error") {
      toast.error(message, {
        position: "bottom-center",
      });
    }

    if (type === "success") {
      toast.success(message, {
        position: "bottom-center",
      });
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const emailMessage = document.getElementById("email-message");
    emailMessage.innerHTML = "";
    if (email === "") {
      emailMessage.innerHTML =
        "Preencha um email válido, o campo email não pode estar vazio";
    }
    setInitLogin(true);

    if (email) {
      const { result, error } = await resetPassword(email);
      if (result) {
        notify(
          "success",
          "Enviamos um email com um instruções detalhadas para que possa redefinir sua senha"
        );
      }
      if (error) {
        setInitLogin(false);
        if (error.code === "auth/invalid-email") {
          notify(
            "error",
            "Usuário inexistente, por favor verifique a digitação e tente novamente"
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
      <DynamicHead title="Esqueci minha senha" />
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
            <h1>Recuperação de senha</h1>
            <p>Preencha seu email abaixo e recupere sua senha</p>
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
                <button disabled={initLogin}>
                  {initLogin ? (
                    <span className="loader-form"></span>
                  ) : (
                    "Enviar email"
                  )}
                </button>
              </div>
            </div>
          </form>
          <div className="auth__options">
            <div className="auth__options__register">
              <Link href={"/login"}>
                <p>Voltar</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="banner">
          <Image
            src="/login-background.png"
            alt="Imagem de uma moça segurando um laptop com sua mão direita e com a sua mãe esquerda segurando o seu óculos, de fundo textos referenciando a como a Tekapta te ajudo no seu ensino"
            fill={true}
            quality={100}
          ></Image>
        </div>
      </main>
    </>
  );
}
