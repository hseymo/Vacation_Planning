const express = require("express");
const router = express.Router();
const {Location,Traveller,Trip} = require("../models/");

router.get("/", (req, res) => {
    Location.findAll({
      include:[Trip]
    })
      .then(dbLocations => {
        res.json(dbLocations);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.get("/:id", (req, res) => {
    Location.findByPk(req.params.id,{
      include:[Trip]
    })
      .then(dbLocation => {
        res.json(dbLocation);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.post("/", (req, res) => {
    Location.create(req.body)
      .then(newLocation => {
        res.json(newLocation);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.put("/:id", (req, res) => {
    Location.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedLocation => {
      res.json(updatedLocation);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });

  router.delete("/:id", (req, res) => {
    Location.destroy({
      where: {
        id: req.params.id
      }
    }).then(delLocation => {
      res.json(delLocation);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;