import img from "../images/img.jpg";

export default function Home() {
  return (
    <>
      <div className="parent">
        <div className="home">
          <div className="homes">
            <div className="content">
              <p>Hello There!</p>
              <h1>
                I'm <span>Muhammad Furqan</span>,<br />
                Frontend React Developer
                <br />
                Based in Pakistan
              </h1>
              <p>
                I'm an experienced website developer with 1 year in the field,
                collaborating with various companies and startups
              </p>
            </div>
            <div className="image-container">
              <img src={img} alt="Furqan images" />
              <div className="overlay-text top">Frontend Developer</div>
              <div className="overlay-text bottom">UI/UX Engineer</div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/muhammad-furqan-b555362a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            View my LinkedIn
          </a>
          <button>Hire Me</button>
        </div>
      </div>
    </>
  );
}
