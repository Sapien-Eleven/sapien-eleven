import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={66}
        height={66}
        fill="none"
        {...props}
    >
        <path
            fill="#CA3C3D"
            d="M33 56.203c12.815 0 23.203-10.388 23.203-23.203S45.815 9.797 33 9.797 9.797 20.185 9.797 33 20.185 56.203 33 56.203Z"
        />
        <path
            fill="#FFFCEE"
            d="m28.071 43.443 16.39-9.463a1.132 1.132 0 0 0 0-1.96l-16.39-9.464a1.133 1.133 0 0 0-1.698.98v18.927a1.136 1.136 0 0 0 1.698.98Z"
        />
    </svg>
)
export default SvgComponent