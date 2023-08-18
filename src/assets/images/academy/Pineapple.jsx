import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={20}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="#FEDD4B"
                d="M11.459 3.555a.269.269 0 0 1-.258-.45l2.027-2.028a2.59 2.59 0 0 0-3.531.259.27.27 0 0 1-.396 0A2.57 2.57 0 0 0 7.398.5c-.6 0-1.17.203-1.629.577l2.028 2.027a.27.27 0 0 1-.258.45 3.655 3.655 0 0 0-3.244.73c.354.254.997.728 1.635 1.264.977.823 1.587 1.49 1.844 2.018a4.94 4.94 0 0 1 1.725-.31c.609 0 1.192.11 1.731.312.21-.406.705-1.017 1.837-1.984a30.412 30.412 0 0 1 1.64-1.296 3.656 3.656 0 0 0-3.248-.733Zm2.442 8.217-1.881 1.881 1.88 1.88c.015-.15.023-.303.023-.457v-2.857c0-.151-.007-.3-.022-.447Zm-8.804 0a4.453 4.453 0 0 0-.022.447v2.857c0 .154.008.307.023.457l1.88-1.88-1.881-1.88Zm1.442-2.838a4.429 4.429 0 0 0-1.328 2.191l2.148 2.148 1.76-1.76-2.58-2.58Zm2.96 7.24L6.97 18.703c.717.502 1.589.797 2.529.797a4.4 4.4 0 0 0 2.529-.797l-2.53-2.529Zm2.14-2.14-1.76 1.76 2.574 2.572a4.428 4.428 0 0 0 1.331-2.187l-2.145-2.145Zm-3.9-.381 1.76-1.76 1.76 1.76-1.76 1.76-1.76-1.76Zm4.72-4.72-2.58 2.58 1.76 1.76 2.147-2.148a4.43 4.43 0 0 0-1.327-2.191Zm-5.1 5.1L5.214 16.18a4.43 4.43 0 0 0 1.331 2.187l2.573-2.573-1.76-1.76Zm2.14-6.239c-.943 0-1.817.298-2.536.802l2.536 2.536 2.536-2.536a4.398 4.398 0 0 0-2.536-.802Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .5h19v19H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent