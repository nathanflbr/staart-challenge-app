import Navbar from "@/components/Navbar";
import { CheckAuth } from "@/components/checkAuth";
import Footer from "@/components/Footer";
import DynamicHead from "@/components/DynamicHead";
import CardCourse from "@/components/CardCourse";

function App({ data }) {
  return (
    <>
      <DynamicHead title="Lista de Trilhas" />
      <CheckAuth>
        <Navbar />
        <main>
          <CardCourse data={data} />
        </main>
        <Footer />
      </CheckAuth>
    </>
  );
}

export async function getServerSideProps() {
  const requestOptions = {
    body: JSON.stringify({
      listType: "COURSES",
    }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  };
  const res = await fetch(
    "https://frontend-project.staart.com/list-type",
    requestOptions
  );
  const data = await res.json();
  return { props: { data } };
}

export default App;
