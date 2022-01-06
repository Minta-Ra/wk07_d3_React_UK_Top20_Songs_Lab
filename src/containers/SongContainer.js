import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';


const SongContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);


    const onSongClick = function(song) {
        setSelectedSong(song);
    };

    useEffect(() => {
        getSongs();
    },[]);

    const getSongs = function() {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(songs => {
            // console.log(songs.feed.entry);
            setSongs(songs.feed.entry);
        });
    };

    return (
        <>
            {selectedSong ? <SongDetail song={selectedSong}/> : null}
            <SongList songs={songs} onSongClick={onSongClick}/>
        </>
    );
};

export default SongContainer;