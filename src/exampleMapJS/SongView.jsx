import React from 'react'

export function SongView(props) {
    function handleButtonClick() {
        console.log('clicked button!')
    }
    return (
        <div className="song">
            <h1>Song!</h1>
            <button onClick={handleButtonClick}></button>
            <SongArtistView name={props.artist} />
            <SongTitleView name={props.title} />
        </div>
    )
}

export function SongArtistView(props) {
    return <div>{props.name}</div>
}

export function SongTitleView(props) {
    return <div>{props.name}</div>
}
