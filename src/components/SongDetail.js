import React from 'react';

const SongDetail = ({song}) => {
    return (
        <>
            <p>{song.title.label}</p>
            <p>{song["im:artist"].label}</p>
        </>
    );
};

export default SongDetail;