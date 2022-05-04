const express = require("express");
const router = express.Router();
const {Location,Traveller,Trip} = require("../models/");

router.get("/", (req, res) => {
    Trip.findAll({
      include: [Location, Traveller]
    })
      .then(dbTrips => {
        res.json(dbTrips);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.get("/:id", (req, res) => {
    Trip.findByPk(req.params.id,{
      include: [Location, Traveller]
    })
      .then(dbTrip => {
        res.json(dbTrip);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.post("/", (req, res) => {
    Trip.create(req.body)
      .then(newTrip => {
        res.json(newTrip);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.put("/:id", (req, res) => {
    Trip.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedTrip => {
      res.json(updatedTrip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });

  router.delete("/:id", (req, res) => {
    Trip.destroy({
      where: {
        id: req.params.id
      }
    }).then(delTrip => {
      res.json(delTrip);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;