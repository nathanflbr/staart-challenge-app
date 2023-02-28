import Navbar from "@/components/Navbar";
import CardTrails from "@/components/CardTrails";
import { CheckAuth } from "@/components/checkAuth";
import Footer from "@/components/Footer";
import DynamicHead from "@/components/DynamicHead";

function App({ data }) {
  return (
    <>
      <DynamicHead title="Lista de Trilhas" />
      <CheckAuth>
        <Navbar />
        <main>
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
