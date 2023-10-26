import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={23}
        height={23}
        fill="none"
        {...props}
    >
        <g filter="url(#a)">
            <path
                fill="#CA3C3D"
                fillRule="evenodd"
                d="M1.504 2.955A1.686 1.686 0 0 1 3.19 1.27h16.804a1.685 1.685 0 0 1 1.688 1.685V19.76a1.688 1.688 0 0 1-1.687 1.688H3.19a1.687 1.687 0 0 1-1.686-1.687V2.955ZM9.49 8.963h2.732v1.372c.394-.789 1.403-1.499 2.92-1.499 2.906 0 3.595 1.572 3.595 4.454v5.34h-2.941v-4.683c0-1.642-.395-2.568-1.397-2.568-1.389 0-1.967.999-1.967 2.568v4.683H9.491V8.963Zm-5.045 9.541H7.39V8.836H4.446v9.668ZM7.81 5.683a1.892 1.892 0 1 1-3.784.083 1.892 1.892 0 0 1 3.784-.083Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <filter
                id="a"
                width={22.013}
                height={26.012}
                x={0.587}
                y={0.352}
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
                <feBlend in2="shape" result="effect1_innerShadow_590_3056" />
            </filter>
        </defs>
    </svg>
)
export default SvgComponent