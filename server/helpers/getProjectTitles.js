// import {REACT_APP_SERVER, REACT_APP_SERVER_PORT} from "@env";
const axios = require("axios").default;


const getProjectTitles = () => {
  const host = "http://localhost";
  const port = 8000;


  const projectsRoute =
  host +
    ":" +
    port +
    "/projects";

  const titleArray = [];
  console.log(projectsRoute);

  axios
    .get(projectsRoute)
    .then((response) => {
      const projectsList = [...response.data];
      console.log("projectsList",projectsList);
      return projectsList;
    })
    .then((response) => {
      response.forEach((item) => {
        console.log(item);
        titleArray.push(item.title);
      });
      console.log(titleArray);
      return titleArray;
    })
    .catch((error) => {
      if (error.response) {
        alert(`Error! ${error.message}`);
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log(error);
      }
    });
};

getProjectTitles();

module.exports = { getProjectTitles };
