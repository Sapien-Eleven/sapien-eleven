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
                d="M.808 11.485C.808 5.35 5.613.809 11.814.809c6.2 0 11.006 4.541 11.006 10.676 0 6.134-4.805 10.676-11.006 10.676-1.114 0-2.182-.148-3.186-.423a.88.88 0 0 0-.588.042l-2.185.965a.88.88 0 0 1-1.235-.778l-.06-1.958a.88.88 0 0 0-.296-.627C2.123 17.467.808 14.693.808 11.485Zm7.63-2.008-3.233 5.13c-.31.492.294 1.046.758.696l3.474-2.637a.66.66 0 0 1 .795-.002l2.571 1.929a1.65 1.65 0 0 0 2.387-.44l3.233-5.13c.311-.492-.294-1.047-.758-.696l-3.474 2.636a.66.66 0 0 1-.795.003l-2.571-1.93a1.652 1.652 0 0 0-2.387.44v.001Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M.808.809H22.82V22.82H.808z" />
            </clipPath>
            <filter
                id="b"
                width={22.013}
                height={26.012}
                x={0.808}
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
                <feBlend in2="shape" result="effect1_innerShadow_590_3041" />
            </filter>
        </defs>
    </svg>
)
export default SvgComponent
