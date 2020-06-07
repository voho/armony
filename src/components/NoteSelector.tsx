import React, {useEffect, useState} from "react";
import {C, E, G, getPitch, Pitch, PITCHES} from "../common/pitch";

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
        <section>
            <p>
                {PITCHES.map((pitch) => {
                    return (
                        <div className="form-check form-check-inline form-control-lg">
                            <input
                                type="checkbox"
                                id={`pitch-${pitch}`}
                                className="form-check-input"
                                checked={selectedPitches.has(pitch)}
                                onChange={(e) => setSelected(pitch, e.target.checked)}
                                value={pitch}/>
                            <label
                                htmlFor={`pitch-${pitch}`}
                                className="form-check-label">
                                {getPitch(pitch)}
                            </label>
                        </div>
                    );
                })}
            </p>
        </section>
    );
};
