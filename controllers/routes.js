const router = require('express').Router();
const fs = require("fs")
const path = require("path")
const express = require("express")
const {renderToString} = require("react-dom/server")

const {User} = require('../models');
let Main = null;

var hCardProps = {
  givenName: 'Sam',
  surname: 'Fairfax',
  email: 'sam.fairfax@fairfaxmedia.com.au',
  phone: '0292822833',
  houseNumber: '100',
  street: 'Harris Street',
  suburb: 'Pyrmont',
  state: 'NSW',
  postcode: '2009',
  country: 'Australia'
};


/** POST Route info update on field tab out */
// TODO - This is not triggering 

router.post('/update',  async ({body, params}, res) => {
  console.log("UPDATE");
  console.log(body);
 /* try{
      const updatedUser = await User.findByIdAndUpdate(
          params.id,
          {...body}
      )
      
      res.status(200).json(updatedUser);
  } catch(err) {
      res.status(500).json(err);
  }  */
});

/** On submit of data */

router.post('/submit',  async({body, params}, res) => {
  console.log("POST");
  console.log(body);
  try{  
    const user = await User.create(body);
    console.log(user)
    hCardProps = {...body};
    res.status(200).json(user);

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }

});

/** Get all the files in the dist folder */

router.get( /\.(js|css|map|ico|png)$/, express.static( path.resolve( __dirname, '../dist' )) );

/** default routes */ 

router.get('*', async (req, res) => {

    fs.readFile(path.join(__dirname, "../dist/index.html"), "utf-8", (err, data) => {
      if(err) {
          console.log(err);
          return res.status(500).send("some error happened");
      }
      Main = require(path.join(__dirname,"../dist/build/main.js")).default;
      const markup = renderToString(<Main {...hCardProps}/>);
      res.send(data.replace('<div class="HcardApp"></div>', `
          <div class="HcardApp" >
          ${markup}
      </div>
      `));
  });
})


module.exports = router;



