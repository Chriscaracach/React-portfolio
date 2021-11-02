import React, { Component } from "react";
// import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <img alt={projects.title} src={projectImage} />

            <h5 style={{ textAlign: "center" }}>{projects.title}</h5>

            <p style={{ textAlign: "center" }}>{projects.category}</p>

            <a href={projects.urlGithub} style={{ textAlign: "center" }}>
              <img
                src="images/portfolio/github.png"
                alt={projects.urlGithub}
                style={{
                  color: "black",
                  width: "40%",
                }}
              />
            </a>
            <a href={projects.url} style={{ textAlign: "center" }}>
              <img
                src="images/portfolio/link.svg"
                alt={projects.url}
                style={{
                  color: "black",
                  width: "30%",
                }}
              />
            </a>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Éstos son algunos de mis trabajos</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
