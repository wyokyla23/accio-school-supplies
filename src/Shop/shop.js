import React, { useState } from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { shoppingList } from './shopping-fixtures'
import { styled } from "@material-ui/core";

export default function Shop(props) {
  // const [favorited, setFavorited] = useState({})
  // console.log({ favorited })

  // const handleClick = id => event => {
  //   setFavorited((prevState) => {
  //     return {
  //       ...prevState,
  //       [id]: !prevState[id]
  //     }
  //   })
  // }

  // function handleClick(id) {
  //   return (event) => {
  //     event.preventDefault()
  //   }
  // }

  return (
    <div className="shop-content" spacing={2}>
      <header className="shop-header">
        <h1 style={{ marginLeft: '2.5em' }}>Accio School Supplies</h1>
        <IconButton style={{ marginRight: '2.5em' }}>
          <ShoppingCartIcon style={{ color: 'white' }} />
        </IconButton>
      </header>
      <ol className="shop-list">
        <li>
          1 WAND{" "}
          <Checkbox
            style={{ color: "#7f0909" }}
          />
        </li>
        <li>
          1 CAULDRON (PEWTER, STANDARD SIZE 2){" "}
          <Checkbox
            style={{ color: "#7f0909" }}
          />
        </li>
        <li>
          1 SET OF GLASS OR CRYSTAL PHIALS{" "}
          <Checkbox
            style={{ color: "#7f0909" }}
          />
        </li>
        <li>
          1 TELESCOPE{" "}
          <Checkbox
            style={{ color: "#7f0909" }}
          />
        </li>
        <li>
          1 SET OF BRASS SCALES{" "}
          <Checkbox
            style={{ color: "#7f0909" }}
          />
        </li>
        <li>
          AN OWL, A CAT, OR A TOAD{" "}
          <Checkbox
            style={{ color: "#7f0909" }}
          />
        </li>
      </ol>
      <div className="main">
        <Grid container style={{
          // backgroundColor: 'salmon'
        }}>
          {shoppingList.map((item) => (
            <ShoppingItem
              key={item.id}
              url={item.url}
              name={item.name}
              description={item.description}
              price={item.price}
              id={item.id}
            />
            // <S item
            //   key={item.id}
            //   xs={10} sm={6} md={4}>
            //   <ShoppingItem

            //     item={item}
            //   />
            // </ShoppingItem>
          ))
          }
        </Grid>
      </div>
    </div >
  );
}

const ItemCard = styled(Grid)({
})

const ShoppingItem = ({
  url,
  name,
  description,
  price,
  id,
}) => {
  const [favorited, setFavorited] = useState(false);

  const handleClick = () => {
    setFavorited(prev => !prev)
  }
  console.log({ url })
  return (
    <ItemCard
      style={{
        padding: 15,
        position: 'relative',
      }}
      item
      xs={12}
      sm={6}
      md={4}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          border: '1px solid black',
        }}
      >
        <img src={url} />
        <p>{description}</p>

      </Grid>
      <IconButton
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
        onClick={handleClick}
      >
        {favorited ?
          <FavoriteIcon style={{ color: '#7f0909' }} /> :
          <FavoriteBorderIcon style={{ color: 'black' }} />
        }
      </IconButton>
    </ItemCard>
  )
}

// const ShoppingItem = ({ item }) => {
//   const [favorited, setFavorited] = useState(false);

//   const handleClick = () => {
//     setFavorited(prev => !prev)
//   }
//   return (

//     <Grid container
//       className="image-wrapper"
//     >
//       <Grid item
//         className="image"
//         style={{
//           backgroundImage: `url(${item.url})`,
//         }}
//       >
//         {/* <Grid container className="content-wrapper"> */}
//         <Grid item className="heart-icon">

//           <IconButton
//             onClick={handleClick}
//           >
//             {favorited ?
//               < FavoriteIcon style={{ color: '#7f0909' }} /> :
//               <FavoriteBorderIcon style={{ color: 'black' }} />
//             }
//           </IconButton>

//         </Grid>
//         <Grid container className="item-content">
//           <Grid item
//             className='item-description'
//           >
//             <p>{item.description}</p>
//           </Grid>
//           <Grid item
//             className='item-price'>
//             <p>${item.price}</p>
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* </Grid> */}
//     </Grid >

//   )
// }