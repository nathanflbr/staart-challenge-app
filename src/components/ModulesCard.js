import { displayTime } from "@/utils";
import {
  MdFolderOpen,
  MdKeyboardArrowDown,
  MdOutlinePlayCircle,
  MdTimer,
} from "react-icons/md";

export default function ModulesCard(props) {
  return (
    <>
      {props.lessions.map((lession) => {
        return (
          <div key={lession.title} className="courseModule">
            <div className="courseModule__header courseModule__header--active">
              <div className="courseModule__title">
                <MdFolderOpen size={24} />
                <p>{lession.title}</p>
              </div>
              <div>
                <MdKeyboardArrowDown />
              </div>
            </div>
            {lession.lessons.map((lesson) => {
              return (
                <div key={lesson.id} className="courseModule__content">
                  <div className="courseModule__preview">
                    <div className="courseModule__image">
                      <MdOutlinePlayCircle size={32} />
                    </div>
                    <div className="courseModule__progress">
                      <div className="cousrModule__barDefault"></div>
                      <div className="cousrModule__barActive"></div>
                    </div>
                  </div>
                  <div className="courseModule__text">
                    <h5>{lesson.title}</h5>
                    <p>{lesson.description}</p>
                    <div className="courseModule__duration">
                      <MdTimer size={24} color="#F86424" />
                      <span>{displayTime(lesson.duration)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
