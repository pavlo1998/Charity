import { Typography, Container, Grid } from '@material-ui/core'
import React from 'react'
import Advert from './Advert'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-bootstrap/Carousel'
import { Col, Row } from 'react-bootstrap'
import { Height } from '@material-ui/icons'

const stylesPath = makeStyles((theme) =>({

    compH4: {
        paddingTop: theme.spacing(4),
        color: '#3259a4',
        fontWeight: 500,
        textAlign: 'center'
    },
    mainContent:{
        marginTop: theme.spacing(8),
        justifyContent: 'center'
    },


}))

export default function CurrentAds() {

    const classes = stylesPath()
    return (
        <div style={{ minWidth: 500 }}>
            
                <Typography variant='h4' className={classes.compH4}>
                    Актуальні оголошення
                </Typography>
                <Typography className={classes.mainContent}>
                <Carousel style={{ minHeight: 450 }}>
                     <Carousel.Item style={{ minHeight: 450, marginTop: 15 }}  interval={4000}>
                     <Row className="justify-content-md-center">
                          <Col className='d-flex justify-content-center' xs lg="3">
                             <Advert/>
                          </Col>
                          <Col className='d-flex justify-content-center'  xs lg="3">
                              <Advert/>
                          </Col>
                           <Col className='d-flex justify-content-center'  xs lg="3">
                              <Advert/>
                          </Col>
                          <Col className='d-flex justify-content-center'  xs lg="3">
                              <Advert/>
                          </Col>
                        </Row>
                    
                    </Carousel.Item>
                    <Carousel.Item  style={{ minHeight: 450, marginTop: 15 }}  interval={4000}>
                    <Row className="justify-content-md-center">
                          <Col className='d-flex justify-content-center' xs lg="3">
                             <Advert/>
                          </Col>
                          <Col className='d-flex justify-content-center'  xs lg="3">
                              <Advert/>
                          </Col>
                           <Col className='d-flex justify-content-center'  xs lg="3">
                              <Advert/>
                          </Col>
                          <Col className='d-flex justify-content-center'  xs lg="3">
                              <Advert/>
                          </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item style={{ minHeight: 450, marginTop: 15 }} interval={4000}>
                    <Row className="justify-content-md-center">
                          <Col className='d-flex justify-content-center' xs lg="3">
                             <Advert/>
                          </Col>
                          <Col className='d-flex justify-content-center'  xs lg="3">
                              <Advert/>
                          </Col>
                           <Col className='d-flex justify-content-center'  xs lg="3">
                              <Advert/>
                          </Col>
                          <Col className='d-flex justify-content-center'  xs lg="3">
                              <Advert/>
                          </Col>
                        </Row>
                      </Carousel.Item>
                </Carousel>
                    
                </Typography>
                
            
        </div>
    )
}
