import React from 'react'

import { SongView } from './SongView'
import exampleSongs from './exampleSongs.json'

interface SongListViewProps {
    songs: Song[]
}

export function SongListView(props: SongListViewProps): JSX.Element {
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
