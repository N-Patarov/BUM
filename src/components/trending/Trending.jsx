import { Select } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import styles from './Trending.module.scss';
import Card from "../card/Card.jsx";
import classNames from "classnames";

export default function Trending({
        cards= []
    }){
    return(
        <div className={classNames(styles.wrapper)}>
            <Container>
                <Grid container className={classNames(styles.gridContainer)}>
                    <Grid item>
                        <div className={classNames(styles.trending)}>Trending</div>
                    </Grid>
                    <Grid item>
                        <Select className={classNames(styles.select)} />
                    </Grid>
                    <Grid item className={classNames(styles.cards)}>
                        <Card number={0} name={"Clock"} />
                        <Card number={1} name={"DOGE"}/>
                        <Card number={2} name={"BTC"}/>
                        <Card number={3} name={"Litecoin"}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}