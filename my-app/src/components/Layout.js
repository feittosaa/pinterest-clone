import React, { useEffect, useState } from 'react';
import API from '../API';
import Pin from './Pin';

function Layout() {

    const [photos, setPhotos] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const catchData = async () => {
            await API.get("/photos").then((response) => setPhotos(response.data))
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });

        };
        catchData();
    }, []);

    const arrayPhotos = photos;

    return (

        <div style={styles.pin_container}>
            <Pin size='small' />
            <Pin size='medium' />
            <Pin size='large' />

            {/* <input
                type="text"
                placeholder="Pesquisar"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
            /> */}

            {arrayPhotos
                .filter((photos) =>
                    photos.description.toLowerCase().includes(search) ||
                    photos.location.toLowerCase().includes(search)
                )
                .map((t, index) => {
                    return (
                        <div key={index}>
                            <Pin
                                id={t.id}
                                likes={t.likes}
                                description={t.description}
                            />
                        </div>
                    );
                })}
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        backgroundColor: 'black',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        justifyContent: 'center'
    }
}
export default Layout