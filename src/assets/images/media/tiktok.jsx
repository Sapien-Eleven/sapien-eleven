import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={21}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)" filter="url(#b)">
            <path
                fill="#CA3C3D"
                d="M9.973.995c1.039-.016 2.072-.007 3.104-.016.062 1.215.5 2.453 1.39 3.312.887.88 2.143 1.284 3.365 1.42V8.91c-1.145-.038-2.296-.276-3.335-.77-.453-.204-.874-.468-1.287-.738-.005 2.32.01 4.637-.015 6.948a6.044 6.044 0 0 1-1.073 3.13C11.083 19 9.28 19.992 7.429 20.023c-1.135.065-2.27-.244-3.237-.815-1.604-.945-2.732-2.677-2.897-4.534-.02-.394-.024-.788-.01-1.182a5.952 5.952 0 0 1 2.05-3.939c1.316-1.145 3.158-1.69 4.882-1.368.016 1.176-.03 2.351-.03 3.527-.789-.255-1.71-.183-2.398.295a2.75 2.75 0 0 0-1.083 1.39c-.164.402-.117.849-.108 1.277.19 1.302 1.442 2.398 2.78 2.28.886-.01 1.736-.525 2.198-1.278.15-.264.317-.534.326-.844.078-1.42.047-2.835.056-4.255.007-3.2-.01-6.392.015-9.583Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M.023.979h19.055v19.055H.023z" />
            </clipPath>
            <filter
                id="b"
                width={19.055}
                height={23.055}
                x={0.023}
                y={0.979}
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
                <feBlend in2="shape" result="effect1_innerShadow_590_3061" />
            </filter>
        </defs>
    </svg>
)
export default SvgComponent