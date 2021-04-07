import { Typography, Container, Paper } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const stylesAbout = makeStyles((theme) =>({

    content:{
        backgroundColor: 'rgb(166, 210, 252)',
        minHeight: 275
    },
    contentH4:{
        paddingTop: theme.spacing(4),
        color: 'white',
        fontWeight: 500,
        textAlign: 'center'
    },
    contentH6:{
        paddingTop: theme.spacing(3),
        color: 'white',
        textAlign: 'center'
    }
}))

export default function AboutSite() {
    const classes = stylesAbout()
    return (
        <div>
            <Paper className={classes.content}>
                <Container id='infoCont'>
                    <Typography variant='h4' className={classes.contentH4}>
                        Про нас
                    </Typography>
                    <Typography variant='h6' className={classes.contentH6}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, accusamus perspiciatis. Commodi dolores porro possimus consectetur eius quasi distinctio enim ab! Nam soluta, laboriosam iste, nemo maxime laudantium nobis explicabo sapiente minima autem unde. Tempore veniam, nostrum, sit porro, repellat aperiam eligendi molestiae rerum tenetur distinctio cumque eius veritatis hic? 
                    </Typography>
                </Container>
            </Paper>
        </div>
    )
}
