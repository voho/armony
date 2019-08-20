import React from "react";

export default class HomeFeature extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h3><a href="/scale-to-chords">Chords in Scale</a></h3>
                    <p className="lead">Shows all chords that belong to the selected scale.</p>
                    <hr className="my-4"/>

                    <h3><a href="/common-chords">Common chords of two scales</a></h3>
                    <p className="lead">Shows all chords that belong to both selected scales.</p>
                    <hr className="my-4"/>

                    <p>Enjoy and thanks for using!</p>
                </div>
            </div>
        );
    }
};