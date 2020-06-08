import React, {useState} from "react";
import {getAllMatchingChordsWithPitches} from "../common/matching";
import {ChordList} from "../components/ChordList";
import {NoteSelector} from "../components/NoteSelector";

export const ChordsByKeysFeature: React.FC = () => {
    const [selectedNotes, setSelectedNotes] = useState([] as number[]);

    return (
        <section className="p-3">
            <div className="jumbotron">
                <p className="lead">Shows all chords that contain the given notes.</p>

                <h3>Select Notes</h3>

                <NoteSelector onNoteSelectionChange={(selection) => setSelectedNotes(selection)}/>
            </div>

            <h3>Chords in selected scale</h3>

            <ChordList chords={getAllMatchingChordsWithPitches(selectedNotes)}/>
        </section>
    );
};
