import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Assuming form submission is successful
    setIsFormSubmitted(true);
    setErrorMessage("");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "black", color: "white" }}>
      <div className="container">
        <div className="section-heading-wrap text-center mb-5">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "white" }}>
            Get In Touch
          </Typography>
          <Box sx={{ width: "60px", height: "3px", backgroundColor: "#222", mx: "auto" }} />
        </div>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Box mb={3}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  value={formData.name}
                  onChange={handleInputChange}
                  sx={{ input: { color: "white" }, label: { color: "white" }, borderColor: "white" }}
                />
              </Box>
              <Box mb={3}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  value={formData.email}
                  onChange={handleInputChange}
                  sx={{ input: { color: "white" }, label: { color: "white" }, borderColor: "white" }}
                />
              </Box>
              <Box mb={3}>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  value={formData.message}
                  onChange={handleInputChange}
                  sx={{ input: { color: "white" }, label: { color: "white" }, borderColor: "white" }}
                />
              </Box>
              <Box display="flex" justifyContent="center" mb={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ px: 4, backgroundColor: "red", color: "white", "&:hover": { backgroundColor: "#f0f0f0" } }}
                >
                  Send Message
                </Button>
              </Box>

              {/* Error or Success Message */}
              {errorMessage && (
                <Typography color="error" align="center" sx={{ mb: 2 }}>
                  {errorMessage}
                </Typography>
              )}
              {isFormSubmitted && (
                <Typography color="success" align="center">
                  Your message was sent, thank you!
                </Typography>
              )}
            </form>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "white" }}>
                Contact Info
              </Typography>
              <Box mb={2}>
                <Typography variant="body1" sx={{ fontWeight: 500, color: "white" }}>
                  Email:
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  <a href="mailto:info@unslate.co" style={{ color: "red" }}>codeflowelytse@gmail.com</a>
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="body1" sx={{ fontWeight: 500, color: "white" }}>
                  Phone:
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  <a href="tel:+123456789012" style={{ color:"red" }}>+234 702 632 8160</a>
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="body1" sx={{ fontWeight: 500, color: "white" }}>
                  Location:
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Lagos, Nigeria.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
