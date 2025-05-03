import Bankists2 from "../images/Bankists2.png";
import Bankists1 from "../images/Bankists1.png";
import Travellist from "../images/Travellist.PNG";
import curExch from "../images/curExch.png";
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
          <img src={Bankists1} alt="Bankist images" />
          <div className="purpose">
            <p>App Design</p>
            <p>Html CSS JS</p>
          </div>
          <h4>Bankist Application</h4>
        </ProjectBox>
        <ProjectBox>
          <img src={Bankists2} alt="Bankist images" />
          <div className="purpose">
            <p>App Design</p>
            <p>Html CSS JS</p>
          </div>
          <h4>Bankist Application</h4>
        </ProjectBox>
        <ProjectBox>
          <img src={Travellist} alt="Travel-list" />
          <div className="purpose">
            <p>App Design</p>
            <p>React.js</p>
          </div>
          <h4>Travel Lis</h4>
        </ProjectBox>
        <ProjectBox>
          <img src={curExch} alt="Travel-list" />
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
