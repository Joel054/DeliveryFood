import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { IconButton } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import BagCard from './list';
import { Card, CardContent, CardActions } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '18rem',
  },
  icon: {
    margin: '4px',
    fontSize: '1.5rem',
  },
}));

export default function PopoverPopupState() {
  const classes = useStyles();
  const products = useSelector((data) => data.checkoutCartStore.shoppingCart);
  useEffect(() => {}, [products]);
  return (
    <PopupState variant="popover" popupId="shopingCart">
      {(popupState) => (
        <div>
          <IconButton variant="contained" color="inherit" {...bindTrigger(popupState)}>
            <Badge badgeContent={products.length} color="secondary">
              Sacola
              <LocalMallOutlinedIcon className={classes.icon} />
            </Badge>
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}>
            <Card className={classes.root}>
              <CardContent>
                <h2>Sacola de pedidos</h2>
                <BagCard products={products} />
              </CardContent>
              <CardActions style={{ flexDirection: 'row-reverse' }}>
                <Link to="/checkout">
                  <Button ariant="outlined" size="medium">
                    Finalizar
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
