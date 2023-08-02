const {downloadFile} = require("cypress-downloadfile/lib/addPlugin");

module.exports = (on, config) => {
    //Configuration du plugin ICI
    on("task", { downloadFile });
  }