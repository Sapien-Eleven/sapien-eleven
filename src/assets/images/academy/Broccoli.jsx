import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={20}
        fill="none"
        {...props}
    >
        <path
            fill="#3DCA6C"
            d="M16.312 5.48c-.069-1.056-.989-1.879-2.101-1.88a2.16 2.16 0 0 0-.927.21C12.61 2.69 11.357 2 10 2c-1.357 0-2.61.69-3.284 1.81a2.16 2.16 0 0 0-.927-.21c-1.112.001-2.032.824-2.101 1.88C2.66 5.94 2.003 6.92 2 8c0 3.132 1.847 3.6 2.947 3.6.163 0 .326-.013.487-.04.724.573 2.286 2.295 2.434 5.331.04.626.587 1.113 1.247 1.109h1.77c.66.004 1.208-.483 1.247-1.109.148-3.036 1.71-4.758 2.434-5.33.161.026.324.039.487.039 1.1 0 2.947-.468 2.947-3.6-.003-1.08-.66-2.06-1.688-2.52Zm-7.154 7.309-2.162-1.98c.332-.304.584-.678.737-1.092.418.304.907.508 1.425.596v2.476Zm1.684 0v-2.476a3.383 3.383 0 0 0 1.425-.596c.153.414.405.788.737 1.092l-2.162 1.98Z"
        />
    </svg>
)
export default SvgComponent