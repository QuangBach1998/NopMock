import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import nhaHaoTam from '../../../../../asset/img/nha-hao-tam.jpg'
import ModalRequest from '../Modal/ModalRequest';
import TableDonation from '../../Donation/component/table/TableDonation';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function DonationPrograms({id,name,total,unitName,createdDate}) {
    // const icon = name.splice('');
    const navigate = useNavigate();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [showHideModalRequest,setShowHideModalRequest] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const hanldeClickCart = () => {
        setShowHideModalRequest(true);
    }

    return (
        <Card className={classes.root} onClick={hanldeClickCart}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={name}
                subheader={createdDate}
            />
            <CardMedia
                className={classes.media}
                image={nhaHaoTam}
                title="Nhà Hảo Tâm : "
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                   <p>Lượt quyên góp <i>{total}</i></p>
                   <p>Nhà hảo tâm <i>{unitName}</i></p>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
        {showHideModalRequest &&(
            navigate('/admin-donation')
        )}
        </Card>
    );
}
