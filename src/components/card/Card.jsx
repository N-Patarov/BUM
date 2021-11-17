import MuiCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import styles from './Card.module.scss';
import classNames from 'classnames';
import Avatar from '../avatar/Avatar';
import Chip from '@mui/material/Chip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import millify from 'millify';

export default function Card({name = "asd", likes = 0, user = {}, mediaUrl = "", price = 0, currency = "", timeLeft = 0}){
    return(
        <MuiCard className={classNames(styles.card)}>
            <CardHeader className={classNames(styles.avatar)} avatar={
            <Avatar size={33} url={user.avatarUrl} verified={user.verified}/>
            }>
            </CardHeader>
            <CardMedia className={classNames(styles.media)} picture={mediaUrl}>
                media
            </CardMedia>
            <CardContent className={classNames(styles.content)}>
                <div className={classNames(styles.title)}>{name}</div>
                <div className={classNames(styles.price)}>~{price} {currency}</div>
                <Chip className={classNames(styles.likes)} icon={<FavoriteIcon />} label={millify(likes)} variant="outlined" />
            </CardContent>
        </MuiCard>
    );
} 