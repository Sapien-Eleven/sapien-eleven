import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <mask
            id="a"
            width={16}
            height={16}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <path fill="#fff" d="M0 0h16v16H0V0Z" />
        </mask>
        <g
            stroke="#999"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.7}
            mask="url(#a)"
        >
            <path
                strokeMiterlimit={22.926}
                d="M0 14.57V1.43C0 .817.503.313 1.118.313h10.823a.56.56 0 0 1 .559.56v12.02M0 14.57c0-.615.503-1.118 1.118-1.118h10.823a.56.56 0 0 0 .559-.559M0 14.57c0 .615.503 1.118 1.118 1.118h10.823a.56.56 0 0 0 .559-.559v-2.236M11.25 13.541v2.053"
            />
            <path
                strokeMiterlimit={2.613}
                d="M3.784 3.682c.298 0 .577.085.812.233a1.534 1.534 0 0 1 2.808 0 1.534 1.534 0 1 1 1.153 2.798v3.878a.17.17 0 0 1-.17.17H3.613a.17.17 0 0 1-.17-.17V6.712a1.535 1.535 0 0 1 .34-3.03ZM4.363 9.512h4"
            />
        </g>
    </svg>
)
export default SvgComponent