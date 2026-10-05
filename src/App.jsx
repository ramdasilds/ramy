import { useState } from "react";

import {
  MessageCircle,
  Download,
  Mail,
  MapPin,
  Code2,
  Database,
  Globe,
  Server,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

import profileImage from "./assets/Ramdas_pic.jpeg";


function App() {
  /* ================================
     PROFILE CARD FLIP
  ================================= */

  const [flipped, setFlipped] = useState(false);


  /* ================================
     WHATSAPP
  ================================= */

  const whatsappNumber = "917080344938";

  const whatsappMessage = encodeURIComponent(
    "Hello Ramdas, I want to connect with you regarding learning and career guidance."
  );

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


  /* ================================
     SKILLS
  ================================= */

  const skills = [
    {
      icon: <Code2 size={25} />,
      name: "Python",
      description:
        "Programming, backend development and application logic.",
    },
    {
      icon: <Server size={25} />,
      name: "Django",
      description:
        "Web development, backend systems and REST APIs.",
    },
    {
      icon: <Globe size={25} />,
      name: "React",
      description:
        "Modern responsive frontend development.",
    },
    {
      icon: <Database size={25} />,
      name: "MySQL",
      description:
        "Database design, queries and data management.",
    },
  ];


  /* ================================
     PROJECTS
  ================================= */

  const projects = [
    {
      title: "Mentorazone",
      description:
        "A student mentorship platform connecting students with mentors for guidance, booking, communication and progress tracking.",
      tech: "Django • React • MySQL • REST API",
      link: "https://mentorazone.com",
    },

    {
      title: "BCA Hub",
      description:
        "A learning platform for BCA students providing notes, previous year papers, resources, projects and career guidance.",
      tech: "React • Vite • JavaScript",
      link: "#",
    },

    {
      title: "OneClick Assist",
      description:
        "A service marketplace concept designed to connect customers with nearby service providers.",
      tech: "Django • React • MySQL",
      link: "#",
    },
  ];


  /* ================================
     FLIP HANDLER
  ================================= */

  const handleProfileClick = () => {
    setFlipped((prev) => !prev);
  };


  return (
    <div className="app">


      {/* ==================================================
          NAVBAR
      ================================================== */}

      <nav className="navbar">

        <div className="nav-container">

          <a href="#home" className="logo">
            Ramdas<span>.</span>
          </a>


          <div className="nav-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="nav-whatsapp"
          >

            <MessageCircle size={18} />

            <span>
              WhatsApp
            </span>

          </a>

        </div>

      </nav>



      {/* ==================================================
          HERO
      ================================================== */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-container">


          {/* ================================
              HERO CONTENT
          ================================= */}

          <div className="hero-content">


            <div className="available">

              <span></span>

              Available for Student Guidance

            </div>


            <p className="small-title">
              HELLO, I'M RAMDAS 👋
            </p>


            <h1>

              Python Full Stack

              <span>
                {" "}Developer
              </span>

            </h1>


            <p className="hero-description">

              I build modern web applications using
              Python, Django, React and MySQL. I also
              explore AI and help students understand
              development, projects and career
              opportunities.

            </p>


            {/* ================================
                BUTTONS
            ================================= */}

            <div className="hero-buttons">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >

                <MessageCircle size={20} />

                Connect on WhatsApp

              </a>


              <a
                href="/resume.pdf"
                download
                className="btn-secondary"
              >

                <Download size={20} />

                Download Resume

              </a>

            </div>


            {/* ================================
                SOCIAL LINKS
            ================================= */}

            <div className="social-links">

              <a
                href="https://github.com/ramdasilds"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >

                <FontAwesomeIcon icon={faGithub} />

              </a>
              <a
                href="https://www.linkedin.com/in/ramdasilds-patel-292882373"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >

                <FontAwesomeIcon icon={faLinkedin} />

              </a>


              <a
                href="https://www.instagram.com/mentorazone"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />

              </a>
              <a
    href="https://www.facebook.com/profile.php?id=61593208703944"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <FontAwesomeIcon icon={faFacebook} />
  </a>
              <a
                href="mailto:info@mentorazone.com"
                aria-label="Email"
              >

                <Mail size={20} />

              </a>

            </div>

          </div>



          {/* ==================================================
              PROFILE IMAGE
          ================================================== */}

          <div className="hero-image-wrapper">

            <div className="image-glow"></div>


            {/* ================================
                PROFILE 3D CARD
            ================================= */}

            <div
              className={`profile-image-card ${
                flipped ? "is-flipped" : ""
              }`}
              onClick={handleProfileClick}
              role="button"
              tabIndex={0}
              aria-label="Flip profile card"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleProfileClick();
                }
              }}
            >

              <div className="profile-image-inner">


                {/* ================================
                    FRONT
                ================================= */}

                <div className="profile-image-front">

                  <img
                    src={profileImage}
                    alt="Ramdas - Python Full Stack Developer"
                    className="profile-image"
                  />

                  <div className="image-hint">
                    Hover / Tap
                  </div>

                </div>


                {/* ================================
                    BACK
                ================================= */}

                <div className="profile-image-back">

                  <div className="back-icon">
                    <Sparkles size={25} />
                  </div>


                  <span>
                    RAMDAS
                  </span>


                  <small>
                    Python Full Stack Developer
                  </small>


                  <div className="back-divider"></div>


                  <div className="back-skills">

                    Python
                    <span>•</span>

                    Django
                    <span>•</span>

                    React
                    <span>•</span>

                    AI

                  </div>


                  <p className="back-description">

                    Building modern web applications
                    and helping students grow in tech.

                  </p>

                </div>

              </div>

            </div>



            {/* ==================================================
                FLOATING SKILLS
            ================================================== */}

            <div className="floating-card card-python">
              🐍 Python
            </div>


            <div className="floating-card card-react">
              ⚛️ React
            </div>


            <div className="floating-card card-django">
              🚀 Django
            </div>


            <div className="floating-card card-ai">
              ✨ AI
            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          ABOUT
      ================================================== */}

      <section
        id="about"
        className="section about-section"
      >

        <div className="section-container">


          <div className="section-heading">

            <p>
              ABOUT ME
            </p>

            <h2>
              Building technology with purpose.
            </h2>

          </div>


          <div className="about-grid">


            <div className="about-text">

              <p>
                I'm a Python Full Stack Developer
                interested in building practical,
                scalable and user-friendly web
                applications.
              </p>


              <p>
                My primary technology stack includes
                Python, Django, Django REST Framework,
                React and MySQL.
              </p>


              <p>
                I also enjoy exploring AI and helping
                students understand programming,
                web development, projects and the
                journey toward becoming a developer.
              </p>

            </div>



            <div className="about-info">


              <div className="info-item">

                <MapPin size={22} />

                <div>

                  <small>
                    LOCATION
                  </small>

                  <strong>
                    India
                  </strong>

                </div>

              </div>



              <div className="info-item">

                <Code2 size={22} />

                <div>

                  <small>
                    ROLE
                  </small>

                  <strong>
                    Python Full Stack Developer
                  </strong>

                </div>

              </div>



              <div className="info-item">

                <Database size={22} />

                <div>

                  <small>
                    DATABASE
                  </small>

                  <strong>
                    MySQL
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          SKILLS
      ================================================== */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-container">


          <div className="section-heading center">

            <p>
              TECHNICAL SKILLS
            </p>

            <h2>
              My Technology Stack
            </h2>

          </div>



          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div
                className="skill-card"
                key={index}
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>


                <h3>
                  {skill.name}
                </h3>


                <p>
                  {skill.description}
                </p>

              </div>

            ))}

          </div>



          <div className="technology-list">

            <span>
              Python
            </span>

            <span>
              Django
            </span>

            <span>
              Django REST Framework
            </span>

            <span>
              React
            </span>

            <span>
              AI
            </span>

            <span>
              JavaScript
            </span>

            <span>
              HTML
            </span>

            <span>
              CSS
            </span>

            <span>
              MySQL
            </span>

            <span>
              REST API
            </span>

            <span>
              JWT
            </span>

            <span>
              Git
            </span>

            <span>
              GitHub
            </span>

          </div>

        </div>

      </section>



      {/* ==================================================
          PROJECTS
      ================================================== */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-container">


          <div className="section-heading">

            <p>
              MY WORK
            </p>

            <h2>
              Projects I've Built
            </h2>

          </div>



          <div className="projects-grid">

            {projects.map((project, index) => (

              <div
                className="project-card"
                key={index}
              >


                <div className="project-number">
                  0{index + 1}
                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                <div className="project-tech">
                  {project.tech}
                </div>


                <a
                  href={project.link}
                  target={
                    project.link.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    project.link.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                >

                  View Project

                  <ArrowUpRight size={18} />

                </a>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ==================================================
          STUDENT GUIDANCE / CONTACT
      ================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-container">

          <div className="contact-content">


            <p className="contact-label">
              FOR STUDENTS
            </p>


            <h2>

              Need help with your

              <span>
                {" "}development journey?
              </span>

            </h2>
            <p>

              If you're learning Python, Django,
              React, AI or Full Stack Development
              and need guidance, feel free to
              connect with me directly.

            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-large"
            >

              <MessageCircle size={24} />

              Chat with me on WhatsApp

            </a>

          </div>

        </div>

      </section>



      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer>

        <div className="footer-container">


          <div>

            <h3>
              Ramdas<span>.</span>
            </h3>

            <p>
              Python Full Stack Developer
            </p>

          </div>



          <div className="footer-social">


            <a
              href="https://github.com/ramdasilds"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >

              <FontAwesomeIcon icon={faGithub} />

            </a>


            <a
              href="https://www.linkedin.com/in/ramdasilds-patel-292882373"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >

              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
    href="https://www.facebook.com/profile.php?id=61593208703944"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <FontAwesomeIcon icon={faFacebook} />
  </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >

              <MessageCircle size={19} />

            </a>
            <a
              href="mailto:info@mentorazone.com"
              aria-label="Email"
            >

              <Mail size={19} />

            </a>

          </div>

        </div>


        <div className="copyright">

          © {new Date().getFullYear()} Ramdas.
          All rights reserved.

        </div>

      </footer>

    </div>
  );
}

export default App;