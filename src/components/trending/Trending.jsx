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
            <div className={classNames(styles.trending)}>Trending</div>
            <Select className={classNames(styles.select)} />
            <Grid className={classNames(styles.cards)}>
                <Container>
                    <Card number={0} name={"Clock"} />
                    <Card number={1} name={"DOGE"}/>
                    <Card number={2} name={"BTC"}/>
                    <Card number={3} name={"Litecoin"}/>
                </Container>
            </Grid>
        </div>
    );
}