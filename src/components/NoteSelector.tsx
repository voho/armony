import React, {useEffect, useState} from "react";
import {C, E, G, getPitch, Pitch, PITCHES} from "../common/pitch";
import "./NoteSelector.css";

export interface NoteSelectorProps {
    onNoteSelectionChange: (selection: Pitch[]) => void
}

export const NoteSelector: React.FC<NoteSelectorProps> = (props) => {
    const [selectedPitches, setSelectedPitches] = useState(new Set<Pitch>());

    function setSelected(pitch: Pitch, value: boolean) {
        const newSelectedPitches = new Set(selectedPitches);
        if (value) {
            newSelectedPitches.add(pitch);
        } else {
            newSelectedPitches.delete(pitch);
        }
        setSelectedPitches(newSelectedPitches);
        props.onNoteSelectionChange(Array.from(newSelectedPitches));
    }

    useEffect(() => {
        const initialValue = new Set<Pitch>([C, E, G]);
        setSelectedPitches(initialValue);
        props.onNoteSelectionChange(Array.from(initialValue));
    }, []);

    return (
        <div className="row selector-options">
            {PITCHES.map((pitch) => {
                return (
                    <span className="selector-options-item">
                        <input
                            type="checkbox"
                            id={`pitch-${pitch}`}
                            className="form-check-input"
                            checked={selectedPitches.has(pitch)}
                            onChange={(e) => setSelected(pitch, e.target.checked)}
                            value={pitch}/>
                        <label htmlFor={`pitch-${pitch}`}>
                            {getPitch(pitch)}
                        </label>
                    </span>
                );
            })}
        </div>
    );
};
