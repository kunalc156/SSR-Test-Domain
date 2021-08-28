const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const express = require("express");
const { renderToString } = require("react-dom/server");
const { createData, updateData } = require("./dbFunctions");

const router = express.Router();
const asyncFileRead = promisify(fs.readFile);

const hCardDefaultProps = {
  givenName: "Sam",
  surname: "Fairfax",
  email: "sam.fairfax@fairfaxmedia.com.au",
  phone: "0292822833",
  houseNumber: "100",
  street: "Harris Street",
  suburb: "Pyrmont",
  state: "NSW",
  postcode: "2009",
  country: "Australia",
};

let hCardProps = hCardDefaultProps;

/** POST Route info update on field tab out */
// TODO - This is not triggering

router.post("/update", async ({ body, params }, res) => {
  console.log("UPDATE");
  /* try{
      const updatedUser = updateData(body, params);
      res.status(200).json(updatedUser);
  } catch(err) {
      res.status(500).json(err);
  }  */
});

/** On submit of data */

router.post("/submit", async ({ body, params }, res) => {
  console.log("POST");
  try {
    const user = await createData(body);
    console.log(user);
    hCardProps = { ...body };
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/** Get all the files in the dist folder */

router.get(
  /\.(js|css|map|ico|png)$/,
  express.static(path.resolve(__dirname, "../dist"))
);

/** default routes */

router.get("*", async (req, res) => {
  try {
    const data = await asyncFileRead(
      path.join(__dirname, "../dist/index.html"),
      "utf-8"
    );
    const Main = require(path.join(__dirname, "../dist/build/main.js")).default;
    const markup = renderToString(<Main {...hCardProps} />);
    res.send(
      data.replace(
        '<div class="HcardApp"></div>',
        `<div class="HcardApp">${markup}</div>`
      )
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send("some error happened");
  }
});

module.exports = router;
