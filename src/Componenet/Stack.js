export default function Stack() {
  return (
    <div className="stack">
      <p className="section-label">-My Tech Stack</p>
      <h3>
        <span>Exploring the stack</span> Behind My Code
      </h3>
      <div className="stack-container">
        <StackBox>
          <img src="/images/html.png" alt="HTML5" className="stack-icon" />
          <h4>HTML5</h4>
          <p>80%</p>
        </StackBox>
        <StackBox>
          <img src="/images/css.png" alt="CSS3" className="stack-icon" />
          <h4>CSS3</h4>
          <p>55%</p>
        </StackBox>
        <StackBox>
          <img src="/images/js.png" alt="JavaScript" className="stack-icon" />
          <h4>JavaScript</h4>
          <p>80%</p>
        </StackBox>
        <StackBox>
          <img src="/images/react.png" alt="React" className="stack-icon" />
          <h4>React</h4>
          <p>30%</p>
        </StackBox>
        <StackBox>
          <img src="/images/c++.png" alt="C++" className="stack-icon" />
          <h4>C++</h4>
          <p>90%</p>
        </StackBox>
        <StackBox>
          <img src="/images/github.png" alt="Git" className="stack-icon" />
          <h4>Git</h4>
          <p>65%</p>
        </StackBox>
        <StackBox>
          <img src="/images/python.png" alt="Git" className="stack-icon" />
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
