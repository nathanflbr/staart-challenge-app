import { CheckAuth } from "@/components/checkAuth";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { displayTime, changeDisplayLevel } from "@/utils";
import { MdOutlineAccessTime, MdAirplay, MdTrendingUp } from "react-icons/md";
import DynamicHead from "@/components/DynamicHead";

function Journey({ journey, courses }) {
  return (
    <>
      <DynamicHead title={journey.title} />
      <CheckAuth>
        <div>
          <Navbar />
          <section className="home">
            <div className="container">
              <div className="home__headline__box">
                <div className="home__headline">
                  <div>
                    <h1>{journey.title}</h1>
                    <p>{journey.description}</p>
                  </div>
                  <div className="home__tags">
                    <span>{journey.group}</span>
                  </div>
                  <div className="home__headline__button headline__button__course">
                    <Link href={`/app/courses/${courses[0].id}`}>
                      <button>
                        <MdAirplay size={18}></MdAirplay> Começar esta jornada
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="home__headline__background">
                  <Image
                    src={
                      journey.medias.banner
                        ? journey.medias.banner
                        : "/default-bg-journey.png"
                    }
                    alt="Logo Tekpta"
                    fill={true}
                    quality={100}
                  ></Image>
                </div>
              </div>
            </div>
          </section>
          <section className="courses container">
            {courses.map((course) => {
              return (
                <Link key={course.id} href={`/app/courses/${course.id}`}>
                  <div className="courses__card">
                    <div className="coursesCard__thumb">
                      <Image
                        src={course.medias.thumb}
                        alt="Logo Tekpta"
                        fill={true}
                        quality={100}
                      ></Image>
                    </div>
                    <div className="coursesCard__infos">
                      <h2>{course.title}</h2>
                      <p>{course.description}</p>
                      <div className="coursesCard__instructor">
                        <span>{course.instructor}</span>
                      </div>
                      <div className="coursesCard__subinfos">
                        <span>
                          <MdTrendingUp size={16} />{" "}
                          {changeDisplayLevel(course.level)}
                        </span>
                        <span>
                          <MdOutlineAccessTime size={16} />{" "}
                          {displayTime(course.duration)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
          <Footer />
        </div>
      </CheckAuth>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const url = params.id;
  const resJourney = await fetch(
    `https://frontend-project.staart.com/journeys/${url}`
  );
  const resCourses = await fetch(
    `https://frontend-project.staart.com/journeys/${url}/courses`
  );
  const journey = await resJourney.json();
  const courses = await resCourses.json();
  return { props: { journey, courses } };
}

export default Journey;
