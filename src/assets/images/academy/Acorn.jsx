import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={20}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#CA3C3D"
                d="M10.688 2.956V.5H8.313v2.456c-3.232.414-5.938 2.45-5.938 4.669v1.188c0 .655.532 1.187 1.188 1.187h11.875c.655 0 1.187-.532 1.187-1.187V7.625c0-2.218-2.706-4.255-5.938-4.669ZM7.99 18.82c.301.158.591.307.851.48a1.188 1.188 0 0 0 1.318 0c.26-.173.55-.322.851-.48 1.778-.93 4.174-2.198 4.405-7.633H3.585c.23 5.435 2.628 6.702 4.405 7.633Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .5h19v19H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent