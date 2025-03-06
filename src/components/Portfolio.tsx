import React, { useState } from "react";
import { Container, Grid, Typography, Chip, Card, CardMedia, CardContent } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const portfolioItems = [
  { id: 1, title: "Sanlam Nigeria", categories: ["fintech", "software"], imageUrl: "/images/portfolio/sanlam.png", linkUrl: "https://ams.fbninsurance.co/" },
  { id: 2, title: "LinkOrg VoIP UK", categories: ["e-commerce", "voip", "branding"], imageUrl: "images/portfolio/linkorgvoip.png", linkUrl: "https://linkorgvoip.com/" },
  { id: 3, title: "Musical Empire LTD", categories: ["e-commerce", "entertainment"], imageUrl: "images/portfolio/empire.png", linkUrl: "https://musicalempire.com.ng/" },
  { id: 4, title: "Rufaddas Medical", categories: ["health", "web"], imageUrl: "images/portfolio/rufaddas.png", linkUrl: "https://rufaddasmedicalsupplies.com/" },
  { id: 5, title: "Wall Street Pepe", categories: ["crypto", "web"], imageUrl: "images/portfolio/wepe.png", linkUrl: "https://www.wepeclaimportal.com/" },
  { id: 6, title: "Abraham Cole", categories: ["web", "portfolio"], imageUrl: "images/portfolio/abecole.png", linkUrl: "https://abrahamcole.vercel.app/" },
  { id: 7, title: "UrBizEdge LTD", categories: ["education", "e-learning"], imageUrl: "images/portfolio/urbizedge.png", linkUrl: "https://urbizedge.com/" },
  { id: 8, title: "OmatKleen LTD", categories: ["web", "branding"], imageUrl: "images/portfolio/omatkleen.png", linkUrl: "https://omatkleencleaningservices.com/" },
  { id: 9, title: "Locale", categories: ["web", "geo"], imageUrl: "images/portfolio/locale.png", linkUrl: "https://locale-eta.vercel.app/" },
];

const categories = ["All", ...new Set(portfolioItems.flatMap((item) => item.categories))];

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.categories.includes(selectedCategory));

  return (
    <Container className="my-5" id="portfolio-section">
      <Typography variant="h4" className="text-dark mb-4">Portfolio</Typography>
      <div className="d-flex flex-wrap mb-4">
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            onClick={() => setSelectedCategory(category)}
            color={selectedCategory === category ? "primary" : "default"}
            className="m-1"
          />
        ))}
      </div>
      <Grid container spacing={4}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
                <CardMedia component="img" image={item.imageUrl} alt={item.title} className="img-fluid" />
              </a>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <div className="d-flex flex-wrap">
                  {item.categories.map((category) => (
                    <Chip key={category} label={category} size="small" className="m-1" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
