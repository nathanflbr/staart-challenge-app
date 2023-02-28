import Image from "next/image";
import Link from "next/link";

export default function CardCourse({ data }) {
  return (
    <div>
      <div className="container cardCourses__grid">
        {data.map((data) => {
          return (
            <Link
              key={data.pathID}
              href={{ pathname: `/app/courses/${data.id}` }}
            >
              <div className="cardCourses">
                <div className="cardCourses__headline">
                  <div className="cardCourses__image">
                    <Image
                      src={
                        data.medias.thumb
                          ? data.medias.thumb
                          : "/default-bg-journey.png"
                      }
                      alt="Logo Tekpta"
                      fill
                      quality={100}
                    ></Image>
                  </div>
                  <div className="trails__card__text">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
