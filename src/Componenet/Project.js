export default function Project() {
  return (
    <div className="project">
      <p>-Portfolio</p>
      <p>
        My Latest <span>Project</span>
      </p>
      <a href="https://github.com/Muhammad-Furqan667">View my GitHub</a>
      <div className="PBox">
        <ProjectBox>
          <img src="/images/Bankists1.png" alt="Bankist images" />
          <div className="purpose">
            <p>App Design</p>
            <p>Html CSS JS</p>
          </div>
          <h4>Bankist Application</h4>
        </ProjectBox>
        <ProjectBox>
          <img src="/images/Bankists2.png" alt="Bankist images" />
          <div className="purpose">
            <p>App Design</p>
            <p>Html CSS JS</p>
          </div>
          <h4>Bankist Application</h4>
        </ProjectBox>
        <ProjectBox>
          <img src="/images/Travellist.PNG" alt="Travel-list" />
          <div className="purpose">
            <p>App Design</p>
            <p>React.js</p>
          </div>
          <h4>Travel Lis</h4>
        </ProjectBox>
        <ProjectBox>
          <img src="/images/curExch.png" alt="Travel-list" />
          <div className="purpose">
            <p>App Design</p>
            <p>JavaScript</p>
            <p>API integration</p>
          </div>
          <h4>Travel Lis</h4>
        </ProjectBox>
      </div>
    </div>
  );
}
function ProjectBox({ children }) {
  return <div className="ProjectBox">{children}</div>;
}
