import todoContext from "./../../context/TodoContext";
import { useContext } from "react";
function Header(props) {
  let { title } = props;
  let context = useContext(todoContext);
  let { language, setLanguage } = context;
  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <strong
            className={`navbar-brand d-flex ${
              language == "persian" ? "flex-row-reverse" : ""
            } align-items-center`}
          >
            {title}
          </strong>
          <button
            className="btn btn-info"
            onClick={() => {
              if (language == "english") {
                setLanguage("persian");
              } else {
                setLanguage("english");
              }
            }}
          >
            {language == "english"
              ? "تغییر زبان به فارسی"
              : "Chengh language to english"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
