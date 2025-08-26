
'use client';

import './shiny-text.css';
import { cn } from '@/lib/utils';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    style?: React.CSSProperties;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '', style }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={cn(`shiny-text`, disabled && 'disabled', className)}
            style={{ ...style, '--shine-speed': animationDuration } as React.CSSProperties}
        >
            {text}
        </div>
    );
};

export default ShinyText;
