import Sprite from '../../assets/img/sprite.svg';


interface SpriteIconProps {
    id: string
}


export default function SpriteIcon({ id }:SpriteIconProps) {
    return (
        <svg>
            <use href={`${Sprite}#${id}`} />
        </svg>
    );
}