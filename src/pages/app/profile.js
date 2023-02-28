import { CheckAuth } from "@/components/checkAuth";
import DynamicHead from "@/components/DynamicHead";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileInfos from "@/components/ProfileInfos";

export default function profile() {
  return (
    <>
      <DynamicHead title="Meu perfil" />
      <CheckAuth>
        <Navbar />
        <ProfileInfos />
        <Footer />
      </CheckAuth>
    </>
  );
}
