import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill="none"
        {...props}
    >
        <g fill={props.fill} clipPath="url(#a)">
            <path d="M11.556 6.418a3.078 3.078 0 0 1-.558 1.268L9.886 9.179h2.85a2.88 2.88 0 0 0-1.18-2.761Zm-7.297.949c-.204-.136-.42-.19-.55-.14-.131.05-.255.235-.316.472-.125.486.02 1.06.287 1.48h1.37c.086-.641-.243-1.448-.79-1.812Z" />
            <path d="M2.754 9.18c-.224-.534-.3-1.138-.159-1.686.13-.51.429-.887.818-1.036.389-.15.863-.068 1.302.223.768.51 1.241 1.549 1.16 2.498H7.58c.097-1.871-1.053-3.693-2.664-4.295a1.476 1.476 0 0 1-.644-.485c-.515-.663-1.265-.932-1.912-.684-.646.248-1.024.95-.963 1.788.02.285-.032.558-.154.79C.807 7.132.711 8.178.964 9.18h1.79ZM0 10.002v.274a3.023 3.023 0 0 0 3.02 3.02h7.96a3.023 3.023 0 0 0 3.02-3.02v-.274H0Zm8.405-.824h.454l1.478-1.985c.71-.954.565-2.29-.32-3.066l.019-.031a1.646 1.646 0 0 1 2.26-.565l.423-.706a2.453 2.453 0 0 0-1.736-.308l.535-.893-.706-.424-.536.894A2.46 2.46 0 0 0 9.188.707l-.424.706a1.649 1.649 0 0 1 .565 2.26l-.02.032a2.275 2.275 0 0 0-2.844 1.138C7.74 5.878 8.475 7.53 8.405 9.18Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h14v14H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent