import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={20}
        fill="none"
        {...props}
    >
        <g fill="#CA3C3D">
            <path d="M10.869 7.829a41.447 41.447 0 0 1-3.947-4.12.557.557 0 0 0-.855 0 41.452 41.452 0 0 1-3.947 4.12A6.489 6.489 0 0 0 0 12.62a6.11 6.11 0 0 0 6.102 6.103h.784a6.11 6.11 0 0 0 6.102-6.103c0-1.82-.772-3.567-2.12-4.791Zm-3.983 8.667h-.784a3.88 3.88 0 0 1-3.875-3.876c0-1.194.506-2.34 1.39-3.144.856-.778 1.68-1.59 2.471-2.433a.557.557 0 0 1 .812 0 43.66 43.66 0 0 0 2.471 2.434 4.256 4.256 0 0 1 1.39 3.143 3.88 3.88 0 0 1-3.875 3.876Z" />
            <path d="M8.622 10.3a44.753 44.753 0 0 1-2.128-2.068A44.768 44.768 0 0 1 4.366 10.3a3.141 3.141 0 0 0-1.026 2.32 2.766 2.766 0 0 0 2.598 2.757v-1.664a.557.557 0 1 1 1.113 0v1.664a2.766 2.766 0 0 0 2.597-2.757c0-.881-.374-1.727-1.026-2.32Zm10.072-3.015a41.449 41.449 0 0 1-1.358-5.542.557.557 0 0 0-.74-.427 41.447 41.447 0 0 1-5.48 1.595 6.477 6.477 0 0 0-2.455 1.11 40.381 40.381 0 0 0 2.956 2.984 7.604 7.604 0 0 1 2.485 5.615 7.174 7.174 0 0 1-.604 2.889 6.097 6.097 0 0 0 4.635-3.014 6.489 6.489 0 0 0 .56-5.21Z" />
        </g>
    </svg>
)
export default SvgComponent