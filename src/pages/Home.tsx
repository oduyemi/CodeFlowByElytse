import { Box } from "@mui/material";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";



const Home = () => {
  return (
    <Box>
      <Hero />
      <Portfolio />
      <About />
      <Services />
      {/* <Skills /> */}
      <Contact />
    </Box>
  )
}

export default Home;