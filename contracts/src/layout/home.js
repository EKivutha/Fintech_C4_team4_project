import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {CardActions,CardContent,Card,CardActionArea,CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Discussions from './Discussions'
import Header from './header'
const useStyles = makeStyles({
    root: {
      minWidth: 'auto',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    assets:{
       display: 'flex',
       flexFlow:'row ',
       flexWrap:'wrap',
       justifyContent:'space-between',
    }
  });


export default function Home(){
const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>;

        
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <br/>
                <div>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Your Total asset portfolio
                        </Typography>
                        <Typography variant="h5" component="h2">
                        $2204{bull}59
                        </Typography>
                        
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card> 
                </div>
                <br/>
                <div className={classes.assets}>
                    <div >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                OIL
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $62{bull}10
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                     </Card>
                    </div>
                    <div >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                XRP
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $1{bull}0625
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                     </Card>
                    </div>
                    <div >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                FB
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $233{bull}4
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                     </Card>
                    </div>
                </div>
                <br/>
                <div>
                    <Discussions/>
                </div>
            </div>
        )
    }

