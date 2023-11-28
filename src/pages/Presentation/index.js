/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
// import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React, { useState } from "react";

function Presentation() {
  const [imageFile, setImageFile] = useState(null);

  // Function to handle drop of the image
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]; // Accept only the first file
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
    }
  };
  const onDragEnd = (result) => {
    // Placeholder function for drag end
    // Update as needed for your logic

  };

  const handleUpload = () => {
    // Simulate upload action (can be replaced with actual upload logic)
    setUploading(true);
    setTimeout(() => {
      // Simulating upload delay (2 seconds)
      setUploading(false);
      setImageFile(null); // Clear the image file after upload
    }, 2000);
  };

  const [uploading, setUploading] = useState(false);
  // Placeholder for FileDrop component
  const FileDrop = ({ onDrop }) => {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "2px dashed #c8c8c8",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          document.getElementById("fileInput").click();
        }}
      >
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            onDrop(e.target.files);
          }}
        />
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Drop image here</p>
        <p style={{ fontSize: "1rem" }}>or click to select</p>
      </div>
    );
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Want to check if an image is fake or not?{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Try our AI powered image verification tool to check if an image is real or manipulated.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Card>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {imageFile ? (
                  <>
                    <Draggable draggableId="image" index={0}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <img
                            src={URL.createObjectURL(imageFile)}
                            alt="Draggable Image"
                            style={{ width: '200px', height: '200px' }}
                          />
                        </div>
                      )}
                    </Draggable>
                    {uploading ? (
                      <p>Uploading...</p>
                    ) : (
                      <button onClick={handleUpload}>Upload</button>
                    )}
                  </>
                ) : (
                  <FileDrop onDrop={onDrop} />
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Card>

       
        <Information />
        
        {/* <Pages /> */}
        
        
        
        <Download />
        
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
