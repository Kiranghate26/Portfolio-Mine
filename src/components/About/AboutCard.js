import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey hello Everyone, I am <span className="purple">Kiran Ghate </span>
            from <span className="purple"> Nandura, India.</span>
            <br />
            I am software developer.
            <br />
            I have completed engineering in computer science and engineering
            <br />
            <br />
            Apart from coding, I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> macrom 
            </li>
            <li className="about-activity">
              <ImPointRight /> Handicraft
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kiran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
