import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core';
import './StylesCalc.css'
import { Row, Col,} from 'react-bootstrap';

const useStyles = makeStyles((theme) =>({
 mainFeaturesPost: {

     color: theme.palette.common.white,
     marginBottom: theme.spacing(4),

 }, 
 mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    textAlign: "center"
 }
}))

export default function Carousel() {

    const classes = useStyles();

    return (
        <div>
            <main>
                <Paper className={classes.mainFeaturesPost} id='mainPict' >
                    <Container maxWidth='lg'>
                        
                        <Grid container>
                            <Grid item md={12}>
                                <div className={classes.mainFeaturesPostContent}>
                                     <br/>
                                    <Typography variant='h5' color='inherit' paragraph>

                                        <Row>
                                            <Col>
                                            <Button className="btn"  >Благодійність</Button>
                                            </Col>
                                            <Col>
                                            <Button className="btn1" >Краудфандинг</Button>
                                            </Col>

                                        </Row>
                                        

                                    </Typography><br/><br/>
                                    <Button variant="contained" color='secondary'>
                                        Створити збір коштів
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </div>
    )
}
