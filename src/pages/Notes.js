import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import NoteCard from '../component/NoteCard';
const Notes = () => {
    const [data, setdata] = useState([]);
    const [refresh,setRefresh]=useState(false);
    useEffect(() => {
        fetch("http://localhost:8000/notes").then(response => response.json()).then(data => setdata(data)).catch(err => console.log(err));
    }, [refresh])
    return (
        <Container>
            <Grid container spacing={6}>
                {
                    data.map(ele => {
                        return (
                            <Grid item xs={12} md={6} lg={4} key={ele.id}>
                                <NoteCard note={ele} setRefresh={setRefresh}>
                                    {ele.title}
                                </NoteCard>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>

    );
}

export default Notes;