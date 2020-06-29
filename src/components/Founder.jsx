import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';

// import imagesrc from '../images/founder1.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Founder(props) {
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Box p={2}>
                <Card className={classes.root} >
                    <CardActionArea>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="340"
                                image={props.imagesrc}
                                title="Contemplative Reptile"
                                style={{ display: 'flex', justifyContent: 'center' }}
                            />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Grid>
    );
}