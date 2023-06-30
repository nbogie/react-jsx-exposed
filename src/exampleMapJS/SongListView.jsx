import React from 'react'

import { SongView } from './SongView'
import exampleSongs from './exampleSongs.json'

export function SongListView(props) {
    return (
        <div>
            {exampleSongs.map((song) => (
                <SongView
                    artist={song.artist}
                    title={song.title}
                />
            ))}
        </div>
    )
}
