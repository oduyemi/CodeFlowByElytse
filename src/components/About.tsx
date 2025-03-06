import React from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";

export const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Marilyn Martha",
      role: "Product Manager",
      image: "/images/marilyn.jpg",
      linkedin: "https://www.linkedin.com/in/marilyn-martha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      desc1: "Marilyn has been leading the company for 10 years with great expertise.",
      desc2: "She is passionate about creating innovative solutions for clients.",
    },
    {
      name: "Ibukun",
      role: "Branding Specialist/Product Manager",
      image: "/images/ibukun.png",
      linkedin: "https://www.linkedin.com/in/olumorin-ibukun-680b191a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      desc1: "As a product Manager I’m Highly proficient in utilizing Microsoft Excel for data analysis, reporting, and project management.  Experienced in effectively leveraging various product management software tools to streamline workflows, track progress, and drive successful product launches.",
      desc2: "",
    },
    {
      name: "Motun",
      role: "Software Developer",
      image: "/images/motun.png",
      linkedin: "https://www.linkedin.com/in/motunmarteen/",
      desc1: "As a Full-Stack Developer with expertise in FastAPI, Node.js, and the MERN stack, I specialize in building scalable, secure, and high-performance applications, ensuring seamless backend architecture and intuitive user experiences. With a strong foundation in blockchain and AI, I leverage emerging technologies to develop innovative solutions, integrating decentralized systems and intelligent automation to drive efficiency and user engagement.",
      desc2: "I have an unconventional approach to problem-solving, often breaking down complex technical challenges into creative, modular solutions that enhance both functionality and maintainability. I thrive in fast-paced environments, balancing deep focus on coding with bursts of brainstorming, where I explore unique ideas that push the boundaries of conventional tech solutions.",
    },
    {
      name: "Tosin",
      role: "Application Developer",
      image: "/images/tosin.png",
      linkedin: "https://www.linkedin.com/in/oluwatosin-atere-829a58205",
      desc1: "As an application developer, I specialize in building intuitive and scalable solutions, with a strong focus on front-end development, seamless user experiences, and efficient system integrations. My expertise spans software development, product management, and strategic problem-solving, enabling me to bridge technical execution with business objectives effectively.",
      desc2: "I have a meticulous approach to problem-solving, preferring structured yet adaptable strategies that ensure both efficiency and long-term sustainability. I thrive in dynamic environments, balancing analytical thinking with creativity to deliver solutions that are both functional and forward-thinking.",
    },
    {
      name: "Yemi",
      role: "Software Developer",
      image: "/images/yemi.png",
      linkedin: "https://www.linkedin.com/in/opeyemi-oduyemi-bba776124/",
      desc1: "Turning ideas into real-life product is my calling. I am a seasoned and aproachable fullstack engineer, and I am passionate about crafting digital products that enhance everyday life, not just endure it. With my extensive experience in software development using industry-level languages and frameworks, I have had the privilege of working on diverse projects spanning various industries such as Tourism, Education, and E-Commerce, Procurement.",
      desc2: "My approach to problem-solving is rooted in an intense research-driven process, where I diligently investigate every aspect of the challenge at hand. This enables me to develop practical solutions that transform business innovations into reality through the power of development.",
    },
  ];

  const settings = {
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box className="unslate_co--section" id="about-section">
      <Box className="container">
        <Box className="section-heading-wrap text-center mb-5">
          <Typography variant="h2" className="heading-h2 divider">
            <span className="gsap-reveal">About Us</span>
          </Typography>
          <span className="gsap-reveal">
            <img src="/images/divider.png" alt="divider" width="76" />
          </span>
        </Box>

        {/* Centering the slider */}
        <Box 
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box style={{ width: "100%", position: "relative", left: "14%" }}>
            <Slider {...settings} className="mx-auto">
              {teamMembers.map((member, index) => (
                <Box 
                  maxWidth="xl" 
                  className="mx-auto"  
                  key={index} 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <Box 
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "10px",
                      width: "100%",
                    }}
                  >
                    <Box 
                      style={{
                        flex: 1,
                        paddingRight: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          width: "100%",
                          maxWidth: "400px",
                          height: "auto",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    <Box
                      style={{
                        flex: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography variant="h4" className="gsap-reveal text-light" style={{ marginBottom: "10px" }}>
                        {member.name}
                      </Typography>
                      <Typography variant="h6" className="gsap-reveal" style={{ marginBottom: "10px" }}>
                        {member.role}
                      </Typography>
                      <Typography variant="body1" className="gsap-reveal" style={{ marginBottom: "10px" }}>
                        {member.desc1}
                      </Typography>
                      <Typography variant="body1" className="gsap-reveal" style={{ marginBottom: "15px" }}>
                        {member.desc2}
                      </Typography>
                      <Button
                        variant="contained"
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gsap-reveal"
                        style={{ alignSelf: "flex-start", backgroundColor: "red" }}
                      >
                        Connect on LinkedIn
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
