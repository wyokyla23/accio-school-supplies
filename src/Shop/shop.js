import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import Checkbox from "@material-ui/core/Checkbox";
import { shoppingList } from './shopping-fixtures'
import ShoppingItem from './shop-item'

const useStyles = makeStyles({
  root: {},

})


export default function Shop(props) {
  const history = useHistory();

  return (
    <div className="shop-content" spacing={2}>
      <header className="shop-header">
        <h1 style={{ marginLeft: '2.5em' }}>Accio School Supplies</h1>
        <IconButton
          onClick={() => history.push('../Cart')}
          style={{ marginRight: '2.5em' }}>
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