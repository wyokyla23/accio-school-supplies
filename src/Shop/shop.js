import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Checkbox from "@material-ui/core/Checkbox";
import cat from "../Images/Shop-Images/cat.jpg";
import cauldron1 from "../Images/Shop-Images/cauldron1.jpg";
import cauldron2 from "../Images/Shop-Images/cauldron2.jpg";
import cauldron3 from "../Images/Shop-Images/cauldron3.jpg";
// import necklace from "../Images/Shop-Images/cursed-necklace.jpg";
// import deluminator from "../Images/Shop-Images/deluminator.jpg";
// import felix from "../Images/Shop-Images/felix-felicis.jpg";
// import firebolt from "../Images/Shop-Images/firebolt.png";
// import gryffindor from "../Images/Shop-Images/gryffindor-robe1.jpg";
import harryWand from "../Images/wands/harry-wand1.png";
import hermioneWand from "../Images/wands/hermione-wand1.png";
// import hufflepuff from "../Images/Shop-Images/hufflepuff-robe.jpg";
// import cloak from "../Images/Shop-Images/invisibility-cloak.jpg";
import lunaWand from "../Images/wands/luna-wand1.png";
import malfoyWand from "../Images/wands/malfoy-wand1.png";
// import map from "../Images/Shop-Images/map.jpg";
import mcgonagallWand from "../Images/wands/mcgonagall-wand1.png";
// import monsterBook from "../Images/Shop-Images/monster-book.jpg";
// import nimbus from "../Images/Shop-Images/nimbus.jpg";
// import phials1 from "../Images/Shop-Images/phials1.jpg";
// import phials2 from "../Images/Shop-Images/phials2.jpg";
// import ravenclaw from "../Images/Shop-Images/ravenclaw-robe.png";
// import scale1 from "../Images/Shop-Images/scale1.jpg";
// import scale2 from "../Images/Shop-Images/scale2.jpg";
// import scale3 from "../Images/Shop-Images/scale3.jpg";
// import slytherin from "../Images/Shop-Images/slytherin-robe.jpg";
import snapeWand from "../Images/wands/snape-wand1.png";
import owl from "../Images/Shop-Images/snowy-owl.jpg";
import telescope1 from "../Images/Shop-Images/telescope1.jpg";
import telescope2 from "../Images/Shop-Images/telescope2.png";
// import timeTurner from "../Images/Shop-Images/time-turner.jpeg";
import toad from "../Images/Shop-Images/toad.jpg";

const shoppingList = [
  {
    name: "wand",
    url: `${harryWand}`,
    description: "derp",
    price: 20,
    id: 1,
  },
  {
    name: "wand",
    url: `${hermioneWand}`,
    description: "derp",
    price: 25,
    id: 2,
  },
  {
    name: "wand",
    url: `${lunaWand}`,
    description: "derp",
    price: 20,
    id: 3,
  },
  {
    name: "wand",
    url: `${malfoyWand}`,
    description: "derp",
    price: 20,
    id: 4,
  },
  {
    name: "wand",
    url: `${mcgonagallWand}`,
    description: "derp",
    price: 20,
    id: 5,
  },
  {
    name: "wand",
    url: `${snapeWand}`,
    description: "derp",
    price: 20,
    id: 6,
  },
  {
    name: "cauldron",
    url: `${cauldron1}`,
    description: "derp",
    price: 20,
    id: 7,
  },
  {
    name: "cauldron",
    url: `${cauldron2}`,
    description: "derp",
    price: 20,
    id: 8,
  },
  {
    name: "cauldron",
    url: `${cauldron3}`,
    description: "derp",
    price: 20,
    id: 9,
  },
  {
    name: "telescope",
    url: `${telescope1}`,
    description: "derp",
    price: 20,
    id: 9,
  },
  {
    name: "telescope",
    url: `${telescope2}`,
    description: "derp",
    price: 20,
    id: 9,
  },
];

export default function Shop(props) {
  console.log(`${harryWand}`);
  return (
    <div className="shop-content">
      <header className="shop-header">
        <h2>Accio School Supplies</h2>
        <ShoppingCartIcon />
      </header>
      <ol className="shop-list">
        <li>
          1 WAND <Checkbox />
        </li>
        <li>
          1 CAULDRON (PEWTER, STANDARD SIZE 2){" "}
          <Checkbox />
        </li>
        <li>
          1 SET OF GLASS OR CRYSTAL PHIALS{" "}
          <Checkbox />
        </li>
        <li>
          1 TELESCOPE <Checkbox />
        </li>
        <li>
          1 SET OF BRASS SCALES <Checkbox />
        </li>
        <li>
          AN OWL, A CAT, OR A TOAD <Checkbox />
        </li>
      </ol>
      <div className="images-wrapper">
        {shoppingList.map((item) => (
          <div
            key={item.id}
            className="image"
            style={{
              backgroundImage: `url(${item.url})`,
            }}
          >
            <div className="item-content">
              <h4>{item.description}</h4>
              <h4> ${item.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
