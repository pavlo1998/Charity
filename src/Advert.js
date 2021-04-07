
import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import exampleImage from './img/exampleImage.jpg'

export default class Advert extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Петро Петренко',
            info: 'Збираю гроші на вєлік бо дєд зробив з нього самогонний апарат',
            amountNeeded: 345739,
            currency: 'UAH'
        }
    }
    
    
    render() {
        return (
                <Card id='userAddCard' style={{ maxWidth: 300, whiteSpace: "normal", borderRadius: 20 }}>
                  <CardActionArea>
                    <CardMedia
                      style={{ height: 140 }}
                      image={exampleImage}
                      title="Contemplative Reptile"
                    />
                    <CardContent style={{maxWidth: 290, whiteSpace: "normal"}}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {this.state.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {this.state.info}
                      </Typography><br/>
                      <Typography variant="body3" color="textSecondary" component="p">
                        Не вистачає: {this.state.amountNeeded}{this.state.currency}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Дізнатись більше
                    </Button>
                  </CardActions>
                </Card>
            
        )
    }
}



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function MediaCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }



















// export default function MediaCard() {
//  

//   return (
//     
//   );
// }