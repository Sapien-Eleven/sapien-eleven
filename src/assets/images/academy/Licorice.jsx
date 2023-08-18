import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={20}
        fill="none"
        {...props}
    >
        <g fill="#CA3C3D" clipPath="url(#a)">
            <path d="M18.446 3.968a.59.59 0 0 1-.038-.142l-.155-1.123a1.69 1.69 0 0 0-.155-.51l-9.32 9.32c.236.352.389.754.446 1.175l.145 1.056.403.988c.09.218.15.446.182.68l8.417-8.428a1.71 1.71 0 0 0 .503-1.967l-.428-1.05ZM4.768 9.728l.987.402 1.057.145c.42.058.822.21 1.176.446l9.32-9.32a1.69 1.69 0 0 0-.511-.155l-1.123-.154a.585.585 0 0 1-.142-.038l-1.05-.428a1.71 1.71 0 0 0-1.966.503L4.098 9.546c.23.033.455.094.67.181Zm.27 4.734a.855.855 0 0 0-1.213 0 .851.851 0 0 0-.186.934.858.858 0 1 0 1.399-.934Z" />
            <path d="M8.308 14.105a.582.582 0 0 1-.038-.143l-.154-1.122a1.71 1.71 0 0 0-1.457-1.456l-1.123-.154a.576.576 0 0 1-.139-.037l-1.053-.43a1.695 1.695 0 0 0-.643-.126c-.531 0-1.022.24-1.347.66l-.695.896a.581.581 0 0 1-.102.103l-.898.696a1.71 1.71 0 0 0-.533 1.99l.428 1.05c.018.043.03.09.038.139l.154 1.126a1.71 1.71 0 0 0 1.457 1.456l1.123.154c.049.007.096.02.141.038l1.05.429a1.693 1.693 0 0 0 1.99-.534l.696-.895a.582.582 0 0 1 .104-.105l.896-.694a1.71 1.71 0 0 0 .533-1.99l-.428-1.05Zm-2.48 2.36a1.97 1.97 0 0 1-1.397.578 1.97 1.97 0 0 1-1.397-.577 1.962 1.962 0 0 1-.579-1.397 1.978 1.978 0 0 1 3.951 0c0 .527-.205 1.024-.578 1.397Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .5h19v19H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent