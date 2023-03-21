interface SpriteIconProps {
    sprite: string,
    id: string
}


export default function SpriteIcon({ sprite, id }:SpriteIconProps) {
    return (
        <svg>
            <use href={`${sprite}#${id}`} />
        </svg>
    );
}