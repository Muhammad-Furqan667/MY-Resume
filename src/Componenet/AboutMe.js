export default function AboutMe() {
  return (
    <div className="about-me">
      <p className="section-label">-Education & Work</p>
      <h1>My Academic and Professional Journey</h1>
      <div className="journey-container">
        <Acedmic>
          <div className="journey-section">
            <div className="section-header">
              <span className="icon">🎓</span>
              <h2>Education</h2>
            </div>
            <div className="journey-entry">
              <p className="year">2010-2022</p>
              <h3>Tameer-millat high school khanpur</h3>
              <p className="description">Matric in Science</p>
            </div>
            <div className="journey-entry">
              <p className="year">2022-2024</p>
              <h3>Gourenment degree collage Tarnwa,khanpur</h3>
              <p className="description">FCS</p>
            </div>
            <div className="journey-entry">
              <p className="year">2024-2027</p>
              <h3>Paf-iast faschecshoule</h3>
              <p className="description">
                Bachelor in Computer Science (2nd semester)
              </p>
            </div>
          </div>
        </Acedmic>
        <Acedmic>
          <div className="journey-section">
            <div className="section-header">
              <span className="icon">💼</span>
              <h2>Work</h2>
            </div>
            <div className="journey-entry">
              <p className="year">2023-2024</p>
              <h3>Freelance Frontend Developer</h3>
              <p className="description">Self Employed</p>
            </div>
          </div>
        </Acedmic>
      </div>
    </div>
  );
}
function Acedmic({ children }) {
  return <div>{children}</div>;
}
