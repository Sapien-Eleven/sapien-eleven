import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        fill="none"
        {...props}
    >
        <g fill="#666" clipPath="url(#a)">
            <path d="M29.019 4.98c-6.734-6.541-17.498-6.382-24.039.352-6.408 6.594-6.408 17.093 0 23.687 6.734 6.54 17.498 6.381 24.039-.352 6.408-6.594 6.408-17.093 0-23.687Zm-12.02 26.35C9.098 31.33 2.67 24.902 2.67 17c0-7.903 6.428-14.331 14.33-14.331 7.903 0 14.331 6.428 14.331 14.33S24.902 31.33 17 31.33Z" />
            <path d="M24.331 15.663h-5.996V9.667a1.335 1.335 0 0 0-2.67 0v5.996H9.67a1.335 1.335 0 0 0 0 2.67h5.996v5.996a1.335 1.335 0 0 0 2.67 0v-5.996h5.996a1.335 1.335 0 1 0 0-2.67Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h34v34H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent