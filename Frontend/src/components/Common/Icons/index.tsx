import React from 'react';
import { ICONS, type IconName } from './icons';

interface IconsProps {
    name: IconName;
    size?: number | string;
    color?: string;
    className?: string;
    onClick?: () => void;
}

const Icons: React.FC<IconsProps> = ({ 
    name, 
    size = 16, 
    color = 'currentColor', 
    className = '', 
    onClick 
}) => {
    return (
        <svg
            width={size}
            height={size}
            fill={color}
            className={className}
            onClick={onClick}
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
            viewBox="0 0 425 289"
            aria-hidden="true"
        >
            {ICONS[name]}
        </svg>
    );
};
export default Icons;