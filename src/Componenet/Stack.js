import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import cpp from "../images/c++.png";
import python from "../images/python.png";
import git from "../images/git.png";

export default function Stack() {
  return (
    <div className="stack">
      <p className="section-label">-My Tech Stack</p>
      <h3>
        <span>Exploring the stack</span> Behind My Code
      </h3>
      <div className="stack-container">
        <StackBox>
          <img src={html} alt="HTML5" className="stack-icon" />
          <h4>HTML5</h4>
          <p>80%</p>
        </StackBox>
        <StackBox>
          <img src={css} alt="CSS3" className="stack-icon" />
          <h4>CSS3</h4>
          <p>55%</p>
        </StackBox>
        <StackBox>
          <img src={js} alt="JavaScript" className="stack-icon" />
          <h4>JavaScript</h4>
          <p>80%</p>
        </StackBox>
        <StackBox>
          <img src={react} alt="React" className="stack-icon" />
          <h4>React</h4>
          <p>30%</p>
        </StackBox>
        <StackBox>
          <img src={cpp} alt="C++" className="stack-icon" />
          <h4>C++</h4>
          <p>90%</p>
        </StackBox>
        <StackBox>
          <img src={git} alt="Git" className="stack-icon" />
          <h4>Git</h4>
          <p>65%</p>
        </StackBox>
        <StackBox>
          <img src={python} alt="Git" className="stack-icon" />
          <h4>Python</h4>
          <p>55%</p>
        </StackBox>
      </div>
    </div>
  );
}

function StackBox({ children }) {
  return <div className="stack-box">{children}</div>;
}
