export default function Services() {
  return (
    <div className="services">
      <h2>
        <span>Services</span> I Provide
      </h2>
      <div className="box-container">
        <Box>
          <span className="icon">{"</>"}</span>
          <h3>Web Development</h3>
          <p>I create fast, responsive websites that work smoothly on any...</p>
          <a href="#">Learn more</a>
        </Box>
        <Box>
          <span className="icon">📱</span>
          <h3>App Frontend Engineering</h3>
          <p>Using modern frameworks and technologies to bring your...</p>
          <a href="#">Learn more</a>
        </Box>
        <Box>
          <span className="icon">🎨</span>
          <h3>Application Design</h3>
          <p>I create fast, responsive websites that work smoothly on any...</p>
          <a href="#">Learn more</a>
        </Box>
      </div>
    </div>
  );
}

function Box({ children }) {
  return <div className="Box">{children}</div>;
}
