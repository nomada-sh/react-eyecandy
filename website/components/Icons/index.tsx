import React from 'react';
import './icons.css';

interface Props {
    type?: string;
    title: string;
    data: IconsData[];
}

export interface IconsData {
    name: string;
    Icon: React.FC;
}

function Icons({ title, type, data }: Props) {
    return (
        <>
            <div>
                <h6>{title}</h6>
                <ul className="anticons-list">
                    {
                        data.map(({ name, Icon }) => (
                            <li key={name} className={type}>
                                <>
                                    {Icon}
                                    <span className="anticon-class">
                                        <span className="ant-badge">{name}</span>
                                    </span>
                                </>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <br />
        </>
    );
}

export default Icons;
