import React from "react";
import {Grid} from "@mui/material"
import { Registration } from "./Registration";
import { Subscribers } from "./common/Subscribers";
import { SubscriberList } from "./SubscriberList";
import { Services } from "./Services";

export const Home=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Registration />
            </Grid>
            <Grid item xs={4}>
                <Subscribers />
            </Grid>
            <Grid item xs={4}>
                <SubscriberList />
            </Grid>
            <Grid item xs={8}>
                <Services />
            </Grid>
        </Grid>
    );
}