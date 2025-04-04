import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import ScrambleTextButton from "./ScrambleTextButton";
import ImageCycler from "./ImageCycler";

const images = [
  "images/prem_ball.png",
  "images/blueberries.png",
  "images/cactus.png",
  "images/computer.png",
  "images/cowboy_hat.png",
  "images/guitar.png",
  "images/pine_cone.png",
];

// TODO: Add more images
// TODO: Consider doing uniform images, like all my face, but different emotions or color?
// TODO: The cursor drag functionality doesn't work if I scroll down at all, need to fix that.

function App() {
  const [imagePositions, setImagePositions] = useState<any[]>([]); // Store image positions
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);

  // Function to handle mouse movements and cycle images
  const handleMouseMove = (e: MouseEvent) => {
    const { x, y } = e;
    // TODO: IF MOUSE LOWER AT CERTAIN POINT DO NOT CHECK ANYTHING
    // Calculate the distance from the last position
    const distance = Math.sqrt(
      Math.pow(x - lastMousePosition.current.x, 2) +
        Math.pow(y - lastMousePosition.current.y, 2)
    );

    // Update position if the mouse has moved sufficiently
    if (distance > 50) {
      // Adjust this value to control the distance threshold
      // Add a new image at the mouse position, cycling through images
      const newImage = {
        src: images[imageIndex.current % images.length],
        x: x - 150, // Offset to make the image appear underneath the mouse
        y: y - 150,
      };

      // Update the images positions
      setImagePositions((prevPositions) => {
        const updatedPositions = [...prevPositions, newImage];
        if (updatedPositions.length > 5) {
          updatedPositions.shift(); // Remove the oldest image if more than 5 are present
        }
        return updatedPositions;
      });

      lastMousePosition.current = { x, y };
      imageIndex.current++;
    }
  };

  // Set up event listener for mouse movement
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="buttons">
        <ScrambleTextButton
          text="WORK"
          onClick={() => scrollToSection("workscroll")}
        />
        <ScrambleTextButton
          text="PROJECTS"
          onClick={() => scrollToSection("projectsscroll")}
        />
        <ScrambleTextButton
          text="CONTACT"
          onClick={() => scrollToSection("contact")}
        />
      </div>
      <header className="App-header">
        <h1>HARPER</h1>
        <h1>AUSTIN</h1>
      </header>
      {/* Render images at the mouse position */}
      {imagePositions.map((position, index) => (
        <img
          key={index}
          src={position.src}
          alt={`image-${index}`}
          style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            pointerEvents: "none", // Ensures the images don't interfere with mouse events
            zIndex: -1, // Ensures the images appear on top of the content
            width: "20%", // Set image width to 10% of its original size
          }}
        />
      ))}
      <div className="content">
        <section id="about" className="about">
          <h2>student, developer, engineer, problem-solver, designer</h2>
        </section>
        <section id="workblurb" className="section">
          <ImageCycler />
          <h2>
            With experience developing, teaching, and marketing code solutions,
            I've gained a well-rounded expertise in all facets of computer
            science, from crafting innovative software to connecting tech with
            real-world needs.
          </h2>
        </section>
        <section id="workscroll"></section>
        <section id="work" className="section">
          <h3>Work Experience</h3>
          <p>
            <strong>TSG Hoffenheim x Brown Sports Network:</strong> Collaborated
            with Bundesliga football club TSG Hoffenheim to align business
            objectives and build relationships with U.S. sports industry
            stakeholders. Developed client proposals and conducted market
            research to identify potential clients for performance optimization,
            data analysis, and talent development consulting.{" "}
            <a
              href="https://www.linkedin.com/posts/brownsportsnetwork_this-week-we-commenced-our-work-on-our-commercial-activity-7308891185899548672-qLXw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENijysBAT2H066u-tXFBqUeXgfN_InInB0"
              target="_blank"
            >
              Learn more
            </a>
          </p>
          <p>
            <strong>Teaching Assistant:</strong> TA for Brown University's two
            largest CS courses with 300+ students, focusing on Java and Python
            programming. I run office hours and labs, teaching core concepts in
            program design, data structures, and algorithms. I assist with
            testing, debugging, and promote best practices in software
            development while contributing to course development.
          </p>
          <p>
            <strong>Youth 4 Youth FC:</strong> Software Engineering Internship
            where I developed a custom scheduling portal using React for a youth
            soccer program. The portal automates and streamlines scheduling,
            reducing manual entry and simplifying the process. I collaborated
            with program leaders, coaches, and parents to gather requirements
            and conduct initial testing, ensuring the portal met the needs of
            both the organization and its users.
          </p>
          <p>
            <strong>Outlier.AI</strong> Identified and resolved bugs in
            AI-generated code (Python, Java) to improve model effectiveness.
            Conducted comprehensive evaluations of LLMs' ability to call API
            tools (e.g., Google Maps, Google Search) to fulfill user requests.{" "}
          </p>
        </section>
        <section id="projectblurb" className="section">
          <h2>
            Crafting complex programs that blend the art of innovation with the
            science of AI, driven by an interest for impactful CS applications.
          </h2>
        </section>
        <section id="projectsscroll"></section>
        <section id="projects" className="section">
          <h3>Projects</h3>
          <p>
            <strong>Get Productive:</strong> iOS application with 500+ downloads
            and 15+ 5-star reviews. Game-ifies the productivity process and
            makes focus feel like a game. Developed entirely using Swift,
            including all artwork and graphics, and independently marketed to
            reach a wide audience.{" "}
            <a
              href="https://apps.apple.com/us/app/get-productive/id6499282666"
              target="_blank"
            >
              App Store
            </a>
          </p>
          <p>
            <strong>Code Librarian:</strong> Implemented three distinct methods
            to find books based on user input: (1) Natural language processing
            using spaCy to analyze book descriptions and themes, (2) Web
            scraping with Selenium to gather data from online sources, and (3)
            Readability score analysis to match books to reader preferences.
            Integrated the OpenAI API to generate personalized explanations for
            each recommendation, enhancing the user experience with insightful
            suggestions.{" "}
            <a
              href="https://github.com/harperaustin/CodeLibrarian"
              target="_blank"
            >
              GitHub
            </a>
          </p>
          <p>
            <strong>Go Solver:</strong> An intelligent agent for playing the
            game of Go. I developed a hybrid system combining three components:
            a predefined opening book for optimal early moves, a neural
            network-based value agent that identifies the most valuable mid-game
            strategies, and an alpha-beta pruning agent enhanced with a
            flood-fill evaluation heuristic.{" "}
            <a
              href="https://github.com/brown-cs410/final-project-go-engine-pt-2-harperaustin"
              target="_blank"
            >
              GitHub
            </a>
          </p>
          <p>
            <strong>Arduino Metronome:</strong> A customizable metronome built
            with C++ and Arduino hardware, featuring adjustable BPM, note
            collections, tempos, and start/stop functionality. User input is
            managed through physical buttons, with feedback displayed on an LCD
            screen. I designed and 3D printed a custom shell to house the
            components.{" "}
            <a
              href="https://github.com/harperaustin/TechRhythm"
              target="_blank"
            >
              GitHub
            </a>
          </p>
          <p>
            <strong>Shell:</strong> Custom Shell in C: A Unix-like shell built
            from scratch in C, featuring robust signal handling, job control,
            file redirection, and support for background and foreground
            processes. The shell efficiently parses and executes user commands,
            manages jobs, and handles built-in commands like cd, ln, rm, exit,
            jobs, fg, and bg. Designed to be modular with clear function
            separation for parsing, execution, and signal management.{" "}
            <a
              href="https://github.com/cs0330-fall2024/shell-2-harperaustin/tree/main"
              target="_blank"
            >
              GitHub
            </a>
          </p>
          <p>
            <strong>Guitar Edge Detection Visualizer:</strong> A Python program
            that dynamically visualizes guitar edges based on detected volume.
            Uses OpenCV's Hough Line Transform to detect edges by identifying
            points that form straight lines in a Canny edge-detected image. The
            visualization changes in real-time according to volume levels
            captured from the microphone, creating an interactive audio-visual
            experience.{" "}
            <a href="https://github.com/harperaustin/guitarvis" target="_blank">
              GitHub
            </a>
          </p>

          <p>
            <strong>Othello:</strong> A board game implemented in Java using
            JavaFX, supporting human vs. human gameplay and three levels of AI
            opponents based on the minimax algorithm. Features togglable
            deterministic and non-deterministic play modes, along with
            customizable board weights for strategic variation.{" "}
            <a
              href="https://github.com/brown-cs15-2023/othello-harperaustin"
              target="_blank"
            >
              GitHub
            </a>
          </p>
          <p>
            <strong>Terminal-Style Personal Website: </strong> Using javascript,
            HTML, and CSS, I developed a personal website with an interactive
            terminal that allows users to use commands to view different
            information about me experience.{" "}
            <a
              href="https://harperaustin.github.io/Personal-Website-Repo/"
              target="_blank"
            >
              Website
            </a>
          </p>
        </section>
        <section id="toolsskills" className="section">
          <div className="content">
            <div>
              <h3>Languages</h3>
              <p>
                Python, Java, C, C++, Javascript, Typescript, Swift, x86
                Assembly, HTML, CSS
              </p>
            </div>
            <div>
              <h3>Skills/Frameworks</h3>
              <p>
                React, Node, TensorFlow, PyTorch, NumPy, Matplotlib, JUnit,
                PyTest, Git
              </p>
            </div>
            <div>
              <h3>Misc</h3>
              <p>
                Autocad, 3D printing, woodworking, CNC, laser cutting, Arduino
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="section">
          <h3>Contact</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/harper-austin-523743276"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a href="https://github.com/harperaustin" target="_blank">
              GitHub
            </a>
          </p>
          <p>
            <a href="mailto:jharpaustin@gmail.com" target="_blank">
              Email Me
            </a>
          </p>
        </section>
      </div>{" "}
    </div>
  );
}

export default App;
