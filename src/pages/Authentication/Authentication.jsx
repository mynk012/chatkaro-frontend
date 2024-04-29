import { Card, Grid } from "@mui/material";
import React from 'react'
import Login from "./Login";
import Register from "./Register";

const Authentication = () => {
  return (
    <div className="">   
      <Grid container>        
        <Grid className="h-screen overflow-hidden" item xs={7}>      {/* we have 12 grid by default */}
          <img
            className="h-full w-full"
            src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png"
            alt=""
          />
        </Grid>
        <Grid item xs={5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center">talkSmart social web-site</h1>
                <p className="text-center text-sm w-[70%]">
                  Connecting Lives, Sharing Stories: Your Social World, Your Way
                </p>
              </div>

              {/* <Login/> */}
              <Register/>
            </Card>
          </div>

        </Grid>
      </Grid>
    
    </div>
  )
}

export default Authentication
