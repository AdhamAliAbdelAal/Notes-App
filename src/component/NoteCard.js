import { Card, CardHeader, CardContent, IconButton, Typography, Avatar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useStyles } from "../pages/Create";
import { yellow,green,blue,pink } from "@mui/material/colors";

const NoteCard = ({ note, setRefresh }) => {
    const { title, details, category,id } = note;
    const classes = useStyles();
    const avatarBG={
        "work":yellow[500],
        "reminders":pink[500],
        "money":blue[500],
        "todos":green[500]
    }
    return (
        <Card
            elevation={2}
            className={classes.my}
        >
            <CardHeader
            avatar={
                <Avatar sx={{
                    backgroundColor:avatarBG[category]
                }}>
                    {category[0].toUpperCase()}
                </Avatar>
            }
                action={
                    <IconButton onClick={() => {
                        if (window.confirm("you will not be able to restore the note again!")) {
                            fetch(`http://localhost:8000/notes/${id}`, {
                                method: "DELETE"
                            }).then(
                                () => {
                                    setRefresh(refresh=>!refresh);
                                }
                            )
                        }
                    }}>
                        <DeleteIcon />
                    </IconButton>
                }
                title={title}
                subheader={category}
            />
            <CardContent>
                <Typography color="textSecondary">
                    {details}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default NoteCard;
