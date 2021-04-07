import { Container, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Row, Col,} from 'react-bootstrap';
import checkMark from './img/checkMark.png'
import { Autorenew } from '@material-ui/icons';

const stylesPath = makeStyles((theme) =>({

    compH4: {
        paddingTop: theme.spacing(4),
        color: '#3259a4',
        fontWeight: 500,
        textAlign: 'center'
    },
    mainContent:{
        marginTop: theme.spacing(8)
    },
    mainContentCols:{

    }


}))

export default function PathToCreateAdd() {

    const classes = stylesPath()

    return (
        <div>
            <Paper id='createAdd'>
                <Container>
                    <Typography variant='h4' className={classes.compH4}>
                        Як створити оголошення
                    </Typography>
                    <div className={classes.mainContent}>
                    <Grid container >
                        <Grid item md={12}>
                        <Typography>
                            <Row lg={12} id='row' style={{ backgroundColor: 'greenyellow' }}>
                                <Col className={classes.mainContentCols} style={{ textAlign: 'center' }}>
                                <h5>Крок 1</h5><br/>
                                <h6>Реєстрація на сайті</h6><br/>
                                <img id='checkMark' src={checkMark}/>
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                <h5>Крок 2</h5><br/>
                                <h6>Заповнення анкети</h6><br/>
                                <img id='checkMark' src={checkMark}/>
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                <h5>Крок 3</h5><br/>
                                <h6>Публікація оголошення</h6><br/>
                                <img id='checkMark' src={checkMark}/>
                                </Col>
                            </Row>
                        </Typography>
                        </Grid>
                    </Grid>
                    </div>
                </Container>
            </Paper>
        </div>
    )
}
