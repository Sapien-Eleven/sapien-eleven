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
                d="M22.236 4.774a8.555 8.555 0 0 1-2.454.672 4.284 4.284 0 0 0 1.879-2.364 8.53 8.53 0 0 1-2.713 1.036 4.274 4.274 0 0 0-7.28 3.898A12.133 12.133 0 0 1 2.86 3.551a4.274 4.274 0 0 0 1.323 5.705 4.262 4.262 0 0 1-1.935-.535v.055a4.274 4.274 0 0 0 3.427 4.19c-.63.17-1.29.196-1.93.074a4.275 4.275 0 0 0 3.992 2.966 8.574 8.574 0 0 1-5.307 1.83c-.34 0-.681-.02-1.02-.06a12.084 12.084 0 0 0 6.549 1.92c7.86 0 12.157-6.51 12.157-12.157 0-.183-.004-.369-.013-.552a8.686 8.686 0 0 0 2.131-2.21l.002-.003Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M.55.246h22.013v22.012H.55z" />
            </clipPath>
            <filter
                id="b"
                width={22.013}
                height={26.012}
                x={0.551}
                y={0.246}
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
                <feBlend in2="shape" result="effect1_innerShadow_590_3044" />
            </filter>
        </defs>
    </svg>
)
export default SvgComponent