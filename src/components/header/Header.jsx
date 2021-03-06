import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Logo from "/src/components/logo/logo";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
export default function Header(){
    return(
      <div className={classNames(styles.wrapper)}>
       <Container className={classNames(styles.container)} maxWidth="x1">
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Logo />
            </Grid>
            <Grid item xs={6}>
            <IconButton
                type="submit"
                sx={{ p: "10px", color: "white" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: "white" }}
                placeholder="Find items, users and activities"
                inputProps={{
                  "aria-label": "Find elements, users and activities",
                }}
              />
            </Grid>
            <Grid item xs={0}>
                <Button>Home</Button>
                <Button>Activity</Button>
                <Button variant="contained" className={classNames(styles.Button)}>Explore</Button>
            </Grid>
        </Grid>
       </Container>
      </div>
    );
}
