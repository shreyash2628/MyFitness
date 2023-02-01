import React from "react";
import Stack from "@mui/material/Stack";
import { Button } from "@material-tailwind/react";

function FitnessQuote() {
  return (
    <div className="">
      <Stack className="">
        <h1 className=" text-8xl text-red-500	">BUILD</h1>
        <h1 className=" text-6xl text-white mt-2">Your Body With Us</h1>
        <h4 className=" text-lg text-white mt-2 italic ">
          -Check out the most personalised exercise for you{" "}
        </h4>

        <button className="border-radius rounded-sm mt-8 text-2xl  bg-red-500 hover:bg-red-600  px-8 py-2 text-white font-serif">
          Explore with us >>>
        </button>
      </Stack>
    </div>
  );
}

export default FitnessQuote;
