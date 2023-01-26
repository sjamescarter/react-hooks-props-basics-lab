import React from "react";
import user from "../data/user";
import Links from "./Links"

function bioExists(props) {
  if(props.bio === "") {
    return false;
  } else if(props.bio === undefined){
    return false;
  } else {
    return true;
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      { bioExists(props) ? <p>{props.bio}</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default About;
