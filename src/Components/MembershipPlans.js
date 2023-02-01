import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Banner from "../assets/images/banner.png";
import beginnerLogo from "../assets/icons/beginnerLogo.jpg";
import intermediateLogo from "../assets/icons/intermediateLogo.jpg";
import expertLogo from "../assets/icons/expertLogo.jpg";
// import Button from '@mui/material/Button';

function MembershipPlans() {
  return (
    <div className=" flex flex-col mt-20 ">
      <div className="flex flex-row justify-center mt-8 ">
        <h1 className=" text-black m-10 font-bold lg:text-6xl sm:text-lg">SUBSCRIPTION </h1>
        <h1 className="mx-2  text-red-500 m-10 font-bold lg:text-6xl md:text-2xl sm:text-lg"> PLANS </h1>
      </div>

      <div className="flex flex-row justify-center">
     
        <div className="w-72 shadow-inner bg-white h-96 border-b-4  drop-shadow-2xl m-8    hover:bg-white  transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-400">
          <img className="h-48 w-full" src={beginnerLogo} />

          <div className="flex flex-col">
            <h1 className="text-4xl text-red-500">3 MONTHS</h1>
            <h1 className="text-lg mt-2 font-bold">Rs.3000/- Only</h1>
            <button className="mt-8 border-2 py-2 text-xl font-bold mx-4 bg-green-500">
              BUY
            </button>
          </div>
        </div>

        <div className="w-72 shadow-inner bg-white h-96 border-b-4  drop-shadow-2xl m-8    hover:bg-white  transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-400">
          <img className="h-48 w-full" src={intermediateLogo} />

          <div className="flex flex-col">
            <h1 className="text-4xl text-red-500">6 MONTHS</h1>
            <h1 className="text-lg mt-2 font-bold">Rs.6000/- Only</h1>
            <button className="mt-8 border-2 py-2 text-xl font-bold mx-4 bg-green-500">
              BUY
            </button>
          </div>
        </div>


        <div className="w-72 shadow-inner bg-white h-96 border-b-4  drop-shadow-2xl m-8    hover:bg-white  transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-400">
          <img className="h-48 w-full" src={expertLogo} />

          <div className="flex flex-col">
            <h1 className="text-4xl text-red-500">12 MONTHS</h1>
            <h1 className="text-lg mt-2 font-bold">Rs.12,000/- Only</h1>
            <button className="mt-8 border-2 py-2 text-xl font-bold mx-4 bg-green-500">
              BUY
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default MembershipPlans;
