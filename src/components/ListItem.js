import React from 'react';


const ListItem = ({song, index, onSongClick}) => {

    const handleClick = function() {
        onSongClick(song);
    };

    return (

        <li onClick={handleClick}>
            <img src={song["im:image"][0].label}></img>

            <audio controls>
                <source src={song.link[1].attributes.href}></source>
            </audio>

            {index +1 }.
            <b>{song.title.label}</b>
            <hr></hr>
        </li>
    );
};

export default ListItem;
