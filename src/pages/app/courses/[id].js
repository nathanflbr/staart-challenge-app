import { CheckAuth } from "@/components/checkAuth";
import Footer from "@/components/Footer";
import ModulesCard from "@/components/ModulesCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { displayTime, getDate, changeDisplayLevel } from "@/utils";
import {
  MdBarChart,
  MdOutlineAccessTime,
  MdOutlineCalendarToday,
  MdOutlinePersonPin,
} from "react-icons/md";
import DynamicHead from "@/components/DynamicHead";

function Course({ courses, lessons }) {
  return (
    <>
      <DynamicHead title={courses.title} />
      <CheckAuth>
        <div>
          <Navbar />
          <section className="home">
            <div className="container">
              <div className="home__headline__box">
                <div className="home__headline">
                  <div>
                    <h1>{courses.title}</h1>
                    <p>{courses.description}</p>
                  </div>
                  <div className="home__tags">
                    {courses.tags.map((tag) => {
                      return <span key={tag}>{tag}</span>;
                    })}
                  </div>
                </div>
                <div className="home__headline__background">
                  <Image
                    src={courses.medias.thumb}
                    alt="Logo Tekpta"
                    fill={true}
                    quality={100}
                  ></Image>
                </div>
              </div>
            </div>
          </section>
          <section className="container coursePage">
            <div className="courseModules">
              <ModulesCard lessions={lessons.modules} />
            </div>
            <div className="courseInfos">
              <div className="courseDetails">
                <div className="courseDetail__info">
                  <div className="courseDetail__icon">
                    <MdBarChart size={16} />
                  </div>
                  <div className="courseDetail__text">
                    <span>Nível</span>
                    <p>{changeDisplayLevel(courses.level)}</p>
                  </div>
                </div>
                <div className="courseDetail__info">
                  <div className="courseDetail__icon">
                    <MdOutlinePersonPin size={16} />
                  </div>
                  <div className="courseDetail__text">
                    <span>Seu instrutor</span>
                    <p>{courses.instructor}</p>
                  </div>
                </div>
                <div className="courseDetail__info">
                  <div className="courseDetail__icon">
                    <MdOutlineAccessTime size={16} />
                  </div>
                  <div className="courseDetail__text">
                    <span>Carga horária</span>
                    <p>{displayTime(courses.duration)}</p>
                  </div>
                </div>
                <div className="courseDetail__info">
                  <div className="courseDetail__icon">
                    <MdOutlineCalendarToday size={16} />
                  </div>
                  <div className="courseDetail__text">
                    <span>Atualizado em</span>
                    <p>{getDate(courses.courseUpdatedAt.$date)}</p>
                  </div>
                </div>
              </div>
              <div className="courseHelp">
                <div className="courseHelp__card">
                  <div className="courseHelp__image">
                    <Image
                      src="/student-help-card.png"
                      alt="Logo Tekpta"
                      fill={true}
                      quality={100}
                    ></Image>
                  </div>
                  <div className="courseHelp__text">
                    <h5>Precisa de ajuda?</h5>
                    <p>
                      Receba ajuda personalizada de um instrutor especializado
                    </p>
                  </div>
                </div>
                <div className="courseHelp__card">
                  <div className="courseHelp__image">
                    <Image
                      src="/student-forum-card.png"
                      alt="Logo Tekpta"
                      fill={true}
                      quality={100}
                    ></Image>
                  </div>
                  <div className="courseHelp__text">
                    <h5>Fórum de Alunos</h5>
                    <p>
                      Conecte-se com outros alunos e compartilhe conhecimentos
                      no nosso fórum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </CheckAuth>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const url = params.id;
  const resCourses = await fetch(
    `https://frontend-project.staart.com/courses/${url}`
  );
  const resLessons = await fetch(
    `https://frontend-project.staart.com/lessons/${url}`
  );
  const courses = await resCourses.json();
  const lessons = await resLessons.json();

  return { props: { courses, lessons } };
}

export default Course;
