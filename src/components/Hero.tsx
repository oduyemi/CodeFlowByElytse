import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Container } from "@mui/material";
import "../assets/Hero.css";

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { image: "images/marilyn.jpg", title: "CodeFlowByElytse", subtitle: "We are CodeFlowByElytsers\nWe build dreams" },
    { image: "images/ibukun.png", title: "Innovate & Create", subtitle: "Transforming ideas into reality" },
    { image: "images/motun.png", title: "Tech for the Future", subtitle: "Empowering with technology" },
    { image: "images/tosin.png", title: "Bridging the Digital Gap", subtitle: "Connecting ideas, people, and technology" },
    { image: "images/yemi.png", title: "Future-Ready Solutions", subtitle: "Innovating for a smarter tomorrow" }
  ];

  return (
    <Box id="home-section" className="cover-v1 jarallax overlay">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{ position: "relative", height: "100vh", backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <Container sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", color: "white" }}>
              <Typography variant="h2" className="heading gsap-reveal-hero">{slide.title}</Typography>
              <Typography variant="h5" className="subheading gsap-reveal-hero" sx={{ mt: 2 }}>{slide.subtitle}</Typography>
            </Container>
          </Box>
        ))}
      </Slider>

      {/* Scroll link */}
      <a href="#portfolio-section" className="mouse-wrap smoothscroll">
        <span className="mouse">
          <span className="scroll"></span>
        </span>
        <span className="mouse-label">Scroll</span>
      </a>
    </Box>
  );
};

