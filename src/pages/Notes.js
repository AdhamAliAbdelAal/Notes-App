import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { breakpoints, Container } from '@mui/system';
import NoteCard from '../component/NoteCard';
import Masonry from 'react-masonry-css';
const Notes = () => {
    const [data, setdata] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetch("http://localhost:8000/notes").then(response => response.json()).then(data => setdata(data)).catch(err => console.log(err));
    }, [refresh]);
    const breakpoints={
        default:3,
        1200:2,
        1000:1
    }
    return (
        <Container>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    data.map(ele => {
                        return (
                            <div key={ele.id}>
                                <NoteCard note={ele} setRefresh={setRefresh}>
                                    {ele.title}
                                </NoteCard>
                            </div>
                        )
                    })
                }
            </Masonry>
        </Container>

    );
}

export default Notes;