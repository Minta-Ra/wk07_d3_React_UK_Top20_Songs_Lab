import React from 'react';
import ListItem from './ListItem';

// onSongClick - passed from SongContainer.js
const SongList = ({songs, onSongClick}) => {


    const songsItems = songs.map((song, index) => {
        return <ListItem song={song} key={index} index={index} onSongClick={onSongClick}/>
    });

    return (
        <div>
            <ul>
                {songsItems}
            </ul>
        </div>
    );
};

export default SongList;