import React from 'react'

export function SongView(props: any): JSX.Element {
    return (
        <div>
            <SongArtistView name={props.artist} />
            <SongTitleView name={props.title} />
        </div>
    )
}

export function SongArtistView(props: any) {
    return <div>{props.name}</div>
}

export function SongTitleView(props: any) {
    return <div>{props.name}</div>
}
