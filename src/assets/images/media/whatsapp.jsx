import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <g filter="url(#a)">
            <path
                fill="#CA3C3D"
                fillRule="evenodd"
                d="M15.041 12.106c-.245-.123-1.45-.715-1.674-.797-.224-.082-.387-.122-.551.124-.163.244-.632.796-.775.959-.143.164-.286.184-.53.062-.245-.124-1.035-.382-1.97-1.216-.728-.65-1.22-1.451-1.363-1.697-.143-.245-.016-.378.107-.5.11-.11.245-.286.368-.428.123-.144.163-.246.245-.41.082-.163.04-.306-.021-.428-.061-.123-.55-1.329-.755-1.82-.199-.477-.4-.412-.55-.42a10.601 10.601 0 0 0-.47-.008.897.897 0 0 0-.653.307c-.225.244-.857.837-.857 2.043 0 1.205.877 2.37 1 2.534.122.163 1.726 2.637 4.183 3.698.585.252 1.041.403 1.396.515.587.187 1.121.16 1.543.097.47-.07 1.45-.592 1.654-1.164.203-.572.203-1.063.142-1.165-.06-.102-.224-.163-.47-.286h.001Zm-4.469 6.102h-.003a8.136 8.136 0 0 1-4.147-1.136l-.297-.177-3.084.81.823-3.007-.194-.308a8.128 8.128 0 0 1-1.245-4.335c.002-4.493 3.656-8.147 8.15-8.147 2.177 0 4.222.849 5.76 2.388a8.099 8.099 0 0 1 2.384 5.764c-.002 4.492-3.656 8.148-8.147 8.148Zm6.934-15.081A9.74 9.74 0 0 0 10.572.252C5.17.252.772 4.649.77 10.054c0 1.727.45 3.414 1.308 4.9l-1.39 5.08 5.195-1.364a9.792 9.792 0 0 0 4.685 1.193h.004c5.402 0 9.8-4.397 9.802-9.802a9.742 9.742 0 0 0-2.868-6.934Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <filter
                id="a"
                width={19.686}
                height={23.781}
                x={0.688}
                y={0.252}
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
                <feBlend in2="shape" result="effect1_innerShadow_590_3063" />
            </filter>
        </defs>
    </svg>
)
export default SvgComponent