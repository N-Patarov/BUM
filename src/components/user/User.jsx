import styles from './User.module.scss';
import Avatar from '../avatar/Avatar';
import classNames from 'classnames';
import Box from "@mui/material/Box";
export default function User({name="", info="", avatar="", size = 55, verified=false}){
    return(
        <div className={classNames(styles.user)}>
            <Avatar />
            <Box className={styles.box}>
                <div className={styles.name}>{name}</div>
                <div className={styles.info}>{info}</div>
            </Box>
        </div>
    );
}