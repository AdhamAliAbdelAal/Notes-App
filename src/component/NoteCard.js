import { Card, CardHeader, CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useStyles } from "../pages/Create";

const NoteCard = ({ note, setRefresh }) => {
    const { title, details, category,id } = note;
    const classes = useStyles();
    return (
        <Card
            elevation={2}
            className={classes.my}
        >
            <CardHeader
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
