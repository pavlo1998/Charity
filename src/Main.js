import React from 'react'
import './StylesCalc.css'
import { Row, Col,} from 'react-bootstrap';
import NaviBar from './NaviBar'
import { Typography, Container, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>({
    mainFeaturesPost: {
   
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
       
   
    }, 
    mainFeaturesPostContent: {
       position: 'relative',
       padding: theme.spacing(3),
       textAlign: "start",
       fontWeight: 500
    },
    mainFeaturesPostContentH: {
        fontWeight: 500,
        marginTop: theme.spacing(20),
        color: "white"
    },
    mainFeaturesPostContentP: {
        fontWeight: 500,
        marginTop: theme.spacing(4),
        color: "white"
    },
    mainFeaturesPostContentButt: {
        fontWeight: 500,
        marginTop: theme.spacing(10),
        color: "white"
    }

   }))
   

export default function Main() {
    const classes = useStyles();
    return (
        <div id='mainPicture'>
            <NaviBar/>
            <Container maxWidth='lg'>
                        
                        <Grid container>
                        <div className={classes.mainFeaturesPostContent}>
                            <Grid item md={12}>
                            
                                    
                            <Typography variant='h2' className={classes.mainFeaturesPostContentH} paragraph> 
                                    Збір коштів 
                               </Typography>

                               <Typography variant='h4' className={classes.mainFeaturesPostContentP}  paragraph> 
                                    Допоможи тим, хто дійсно цього потребує!
                               </Typography>
                            </Grid>
                            <Grid item md={8}>
                               <Typography variant='h5' color='inherit' paragraph className={classes.mainFeaturesPostContentButt} >

                                        <Row>
                                            <Col>
                                            <button className="btn" id='wantToHelp' >Хочу допомогти</button>
                                            </Col>
                                            <Col>
                                            <button className="btn"  id='needHelp'>Прошу допомоги</button>
                                            </Col>
                                    
                                        </Row>
                                        

                                    </Typography>
                                </Grid>
                               </div>

                              
                            
                        </Grid>
                    </Container>
        </div>
    )
}
