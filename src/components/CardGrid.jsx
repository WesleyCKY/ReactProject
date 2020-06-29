import React from "react";
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";


const CardGrid = props => (
    <Grid container justify="center">
    <Box p={2}>
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="input" className="card-img-top bg-cover" />
            </div>
            <div className="card-body text-dark">
                <h5 className="card-title product-title-size">{props.title}</h5>
                <p className="card-text text-secondary">
                    {props.text}
                </p>
                <ul className="text-left product-text-size">
                    {props.li1}
                    {props.li2}
                    {props.li3}
                    {props.li4}
                    {props.li5}
                </ul>
            </div>
        </div>
    </Box>
    </Grid>
)

export default CardGrid;