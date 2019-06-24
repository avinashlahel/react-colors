import React from 'react';

function PaletteFooter(props) {
    const {palette} = props;
    return (
        <footer className="Palette-footer">
            {palette.paletteName}
            <span className="emoji">{palette.emoji}</span>
        </footer>
    );
}

export default PaletteFooter;