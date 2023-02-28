import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineFilterList } from "react-icons/md";
import { changeDisplayIcon } from "@/utils/index";

export default function CardTrails({ data, hr }) {
  const [journeys, setJourneys] = useState([...data]);

  const handleSelection = (filter) => {
    if (filter === "courses") {
      const sortCourses = [...data];
      sortCourses.sort((a, b) => a.coursesID.length - b.coursesID.length);
      sortCourses.reverse();

      setJourneys([...sortCourses]);
    }
    if (filter === "alphabet") {
      const sortAlphabet = [...data];
      sortAlphabet.sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      setJourneys([...sortAlphabet]);
    }

    if (filter === "default") {
      setJourneys([...data]);
    }
  };
  return (
    <section className="container trail">
      <div className="trail__head">
        <div>
          <h2>Trilhas de aprendizado</h2>
        </div>
        <div className="trail__filter" style={{ marginBottom: "32px" }}>
          <label htmlFor="filter">
            <MdOutlineFilterList size={24} />
          </label>
          <select
            id="filter"
            onChange={(e) => {
              handleSelection(e.target.value);
            }}
          >
            <option value="courses">Cursos</option>
            <option value="alphabet">Alfabética</option>
            <option value="default" selected>
              Padrão
            </option>
          </select>
        </div>
      </div>
      <div className="trails">
        {journeys.map((data) => {
          return (
            <Link
              key={data.pathID}
              href={{ pathname: `/app/journeys/${data.pathID}` }}
            >
              <div className="trails__card">
                <div className="trails__card__headline">
                  <div className="trails__card__icon">
                    <Image
                      src={`/icons/trails/` + changeDisplayIcon(data.pathID)}
                      alt="Logo Tekpta"
                      height={64}
                      width={64}
                      quality={100}
                    ></Image>
                  </div>
                  <div className="trails__card__text">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                </div>
                <div className="trails__card__infos">
                  <div className="trails__card__infos__box">
                    <Image
                      src="/icons/trails/school.svg"
                      alt="Logo Tekpta"
                      height={24}
                      width={24}
                      quality={100}
                    ></Image>
                    <p>{data.coursesID.length} Cursos</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
