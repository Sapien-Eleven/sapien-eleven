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
            <path d="M6.995 2.39a1.195 1.195 0 1 0 0-2.39 1.195 1.195 0 0 0 0 2.39Z" />
            <path d="M13.756 2.077a.532.532 0 0 0-.694-.291l-2.315.947-2.23.099H5.462l-2.21-.1L.94 1.787a.532.532 0 0 0-.403.985l2.4.98a.532.532 0 0 0 .174.04l2.353.118V7.13l-1.79 1.926a.692.692 0 0 0 .287 1.127c3.315 1.105 3.084 1.034 3.185 1.046v2.079c0 .382.31.691.692.691.382 0 .686-.31.686-.691V3.91l2.368-.12a.531.531 0 0 0 .175-.038l2.399-.981a.532.532 0 0 0 .29-.694Zm-6.61 7.71L5.418 9.21c1.358-1.46 1.267-1.356 1.316-1.43h.412v2.006Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h14v14H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent