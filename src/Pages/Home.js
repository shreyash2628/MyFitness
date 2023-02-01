import React from "react";
import Fitness from "../assets/images/fitness.png";
import Stack from "@mui/material/Stack";
import FitnessQuote from "../Components/FitnessQuote";

import Box from "@mui/material/Box";
import { Fullscreen } from "@mui/icons-material";
import SearchExercises from "../Components/SearchExercises";
import BodyParts from "../Components/BodyParts";
import Footer from "../Components/Footer";
import MembershipPlans from "../Components/MembershipPlans";

function Home() {
  return (
    <div>
      <Box className=" mt-2  mx-48 bg-black p-8 rounded-xl">
        <Stack direction="row" className="justify-end">
          <FitnessQuote />
          <img className="" src={Fitness} />
        </Stack>
      </Box>

      <MembershipPlans className="mt-"/>

      <BodyParts />

      <Footer />
    </div>
  );
}

export default Home;
