import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill="none"
        {...props}
    >
        <mask
            id="a"
            width={14}
            height={14}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <path fill="#fff" d="M0 0h14v14H0V0Z" />
        </mask>
        <g stroke="#999" strokeMiterlimit={10} strokeWidth={0.6} mask="url(#a)">
            <path d="M8.64 2.05a1.64 1.64 0 1 1-3.28 0 1.64 1.64 0 0 1 3.28 0ZM4.54 13.59H2.897c-.904 0-1.64-.736-1.64-1.64 0-.906.736-1.641 1.64-1.641.446 0 2.38 1.009 4.102 1.942" />
            <path d="M12.742 11.95c0-.906-.736-1.641-1.64-1.641-.706 0-5.137 2.527-6.563 3.28h6.563c.904 0 1.64-.735 1.64-1.64Z" />
            <path d="m8.35 11.531.667-3.77c.695 1.48 2.167 2.55 3.807 2.55-1.118-.895-1.915-2.214-2.09-3.617-.152-1.209-1.105-2.18-2.323-2.18H5.589c-1.218 0-2.172.971-2.323 2.18-.175 1.403-.972 2.722-2.09 3.616 1.559 0 3.214-.967 3.868-2.333l.606 3.554" />
        </g>
    </svg>
)
export default SvgComponent