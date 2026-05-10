import { ICONS, type IconName } from './icons';

interface IconsProps {
    name: IconName;
    size?: number | string;
    className?: string;
    color?: string;
    onClick?: () => void;
}

const Icons = ({
    name,
    size = 24,
    className = '',
    color = '#000',
    onClick
}: IconsProps) => {
    const icon = ICONS[name];

    if (!icon) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return (
        <span
            className={className}
            onClick={onClick}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: size,
                height: size,
                color: color,
            }}
        >
            {icon}
        </span>
    );
};

export default Icons;