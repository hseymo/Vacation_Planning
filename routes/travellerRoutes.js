const express = require("express");
const router = express.Router();
const {Location,Traveller,Trip} = require("../models/");

router.get("/", (req, res) => {
    Traveller.findAll({
      include: [Trip]
    })
      .then(dbTravellers => {
        res.json(dbTravellers);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.get("/:id", (req, res) => {
    Traveller.findByPk(req.params.id,{
      include: [Trip]
    })
      .then(dbTraveller => {
        res.json(dbTraveller);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.post("/", (req, res) => {
    Traveller.create(req.body)
      .then(newTraveller => {
        res.json(newTraveller);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.put("/:id", (req, res) => {
    Traveller.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(updatedTraveller => {
      res.json(updatedTraveller);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });

  router.delete("/:id", (req, res) => {
    Traveller.destroy({
      where: {
        id: req.params.id
      }
    }).then(delTraveller => {
      res.json(delTraveller);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
  });
  
  module.exports = router;