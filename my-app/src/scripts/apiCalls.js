import React from "react";
import { useState } from "react";

let bearerToken = "";

export async function getBearerToken() {
    const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_API_KEY}&client_secret=${process.env.REACT_APP_API_SECRET}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
      });

    const data = await response.json();
    // console.log("Response --> " + data["token_type"]);
    // console.log("Bearer Token --> " + data["access_token"]);
    bearerToken = data["access_token"];
    return  data["access_token"];
}

export async function search() {
    console.log("Bearer Token3 --> " + bearerToken);
}