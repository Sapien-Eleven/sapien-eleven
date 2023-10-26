import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={23}
        height={23}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)" filter="url(#b)">
            <path
                fill="#CA3C3D"
                d="m16.505 13.19.612-3.984h-3.823V6.621c0-1.09.534-2.152 2.246-2.152h1.738V1.078S15.7.808 14.193.808c-3.147 0-5.205 1.909-5.205 5.363v3.036h-3.5v3.984h3.5v9.63h4.306v-9.63l3.211-.001Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M.377.809h22.012V22.82H.377z" />
            </clipPath>
            <filter
                id="b"
                width={22.013}
                height={26.012}
                x={0.377}
                y={0.809}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={7.5} />
                <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend in2="shape" result="effect1_innerShadow_590_3050" />
            </filter>
        </defs>
    </svg>
)
export default SvgComponent