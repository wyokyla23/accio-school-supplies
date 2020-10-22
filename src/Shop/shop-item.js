import React, { useContext } from 'react'

import { Context } from '../Context'
import { styled } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite';


const ItemCard = styled(Grid)({
})

const ShoppingItem = ({
  url,
  name,
  description,
  price,
  id,
}) => {

  const { favorited, toggleFavorite } = useContext(Context)

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
          border: '1px solid lightgray',
          paddingTop: '20px'
        }}
      >
        <img src={url} alt='shopping item' />
        <p>{description}</p>
        <p>${price}</p>
      </Grid>
      <IconButton
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
        onClick={toggleFavorite(id)}
      >
        {favorited[id] ?
          <FavoriteIcon style={{ color: '#7f0909' }} /> :
          <FavoriteBorderIcon style={{ color: 'black' }} />
        }
      </IconButton>
    </ItemCard >
  )
}

export default ShoppingItem