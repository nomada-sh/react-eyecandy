import React from 'react';
import './colors.css';

interface Props {
    data: ColorPaletteData[];
}

export interface ColorPaletteData {
    name: string;
    value: string;
    comment?: string;
}

const ColorPalette = ({ data }: Props) => {
    return (
        <ul className="sg-colors">
            {
                data.map(({ name, value, comment }) => (
                    <li key={value}>
                        <span className="sg-swatch" style={{ background: value }} />
                        <span className="sg-label">
                            { name }
                            <br /> { value }
                            <br /> { comment }
                        </span>
                    </li>
                ))
            }
        </ul>
    );
}

export default ColorPalette;
