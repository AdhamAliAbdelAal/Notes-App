import { Typography, Button, Container, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useStyles = makeStyles(
    {
        my:
        {
            marginBottom: "10px !important",
            marginTop: "10px !important",
            display:"block !important"
        }
    }
);

//console.log(pink);
const Create = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState("money");
    return (
        <Container>
            <Typography
                className={classes.my}
                variant='h5'
                component='h2'
                color="textSecondary"
                buttongutter="true"
                sx={{ fontWeight: 500 }}
            >
                Create a New Note
            </Typography>
            <form noValidate autoComplete='off'>
                <TextField
                    className={classes.my}
                    variant='outlined'
                    label="Note Title"
                    color='secondary'
                    required
                    fullWidth
                    value={title}
                    onChange={e => {
                        setTitle(e.target.value);
                        setTitleError(!e.target.value);
                    }}
                    error={titleError}
                />
                <TextField
                    className={classes.my}
                    variant='outlined'
                    label="Details"
                    color='secondary'
                    required
                    multiline
                    fullWidth
                    rows={4}
                    value={details}
                    onChange={e => {
                        setDetails(e.target.value);
                        setDetailsError(!e.target.value);
                    }}
                    error={detailsError}
                />
                <FormControl className={classes.my}>
                    <FormLabel sx={{
                        marginTop: "12px",
                        marginBottom: "12px",
                        fontSize: "20px",
                        color: "rgba(0, 0, 0, 0.6) !important"
                    }}>Note category</FormLabel>
                    <RadioGroup
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                    >
                        <FormControlLabel value="money" control={<Radio color='secondary' />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio color='secondary' />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio color='secondary' />} label="Reminder" />
                        <FormControlLabel value="work" control={<Radio color='secondary' />} label="Work" />
                    </RadioGroup>
                </FormControl>
                <Button
                    type="submit"
                    variant='contained'
                    color="secondary"
                    onClick={e => {
                        e.preventDefault();
                        let flag = true;
                        if (!title) {
                            flag = false;
                            setTitleError(true);
                        }
                        if (!details) {
                            flag = false;
                            setDetailsError(true);
                        }
                        if (flag) {
                            setTitleError(false);
                            setDetailsError(false);
                            console.log(title, details);
                            fetch("http://localhost:8000/notes", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ title, details, category })
                            }).then(() => {
                                navigate('/');
                            })
                        }
                    }}
                    endIcon={<ArrowForwardIosIcon />}
                    sx={{
                        paddingTop: "10px",
                        paddingBottom: "10px"
                    }}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
}

export default Create;
