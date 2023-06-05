type SVGClickEvent = React.MouseEvent<SVGElement>;

interface DeleteIconProps {
    onClickHandler: (e: SVGClickEvent) => void;
}
export const DeleteIcon = ({ onClickHandler }: DeleteIconProps) => (
    <svg onClick={(e: SVGClickEvent) => onClickHandler(e)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path
            fill="#000"
            d="M18.84 5.16c-0.48 -0.48 -1.2 -0.48 -1.68 0L12 10.32l-3.96 -3.96c-0.48 -0.48 -1.2 -0.48 -1.68 0s-0.48 1.2 0 1.68L10.32 12l-3.96 3.96c-0.48 0.48 -0.48 1.2 0 1.68 0.24 0.24 0.6 0.36 0.84 0.36s0.6 -0.12 0.84 -0.36L12 13.68l3.96 3.96c0.24 0.24 0.6 0.36 0.84 0.36s0.6 -0.12 0.84 -0.36c0.48 -0.48 0.48 -1.2 0 -1.68L13.68 12l3.96 -3.96c0.48 -0.48 0.48 -1.2 0 -1.68z"
        />
    </svg>
);
