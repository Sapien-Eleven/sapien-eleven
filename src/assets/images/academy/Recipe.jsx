import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill={props.fill}
                d="M10.423 0h-8.09a.467.467 0 0 0-.466.467v11.822c0 .258.21.467.467.467h.778v.777a.467.467 0 0 0 .933 0v-.777h6.378c.943 0 1.71-.768 1.71-1.712V1.711c0-.943-.767-1.711-1.71-1.711ZM6.876 5.289a1.34 1.34 0 0 1-1.12 1.32v3.315a.467.467 0 1 1-.933 0v-3.32a1.34 1.34 0 0 1-1.09-1.315V2.831a.467.467 0 0 1 .934 0v1.991h.156v-1.99a.467.467 0 0 1 .933 0v1.99h.187v-1.99a.467.467 0 0 1 .933 0v2.457Zm3.391 4.635a.467.467 0 1 1-.933 0v-1.4H7.965a.467.467 0 0 1-.467-.466V4.66a2.3 2.3 0 0 1 2.297-2.297h.006c.257 0 .466.21.466.467v7.093Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h14v14H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent