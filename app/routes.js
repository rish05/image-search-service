module.exports = app => {
    const tagImage = require("./controllers/tag.image.controller");
  
    var router = require("express").Router();
    // Upload image with tag
    router.get("/find-image-by-tag",tagImage.findImageBlobByTag);
    router.get("/find-image-url-by-tag", tagImage.findImageUrlByTag);
    
  
    app.use("/api/tag", router);
    app.use((err, req, res, next) => {
      response={};
      if (
        err.message &&
        err.message.toString().indexOf('Error while validating request') !== -1
      ) {
        response.error = err.message;
        response.statusCode = 422;
        response.statusMsg = 'Unprocessable Entity';
      }
      else{
        response.error = err.message;
        response.statusCode = 500;
        response.statusMsg = 'Internal Server Error!!';
      }
    
      res.status(response.statusCode).send(response);
    });
  };