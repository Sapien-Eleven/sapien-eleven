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
                fill="#CA3C3D"
                d="M17.969 2.805a1.146 1.146 0 0 1 .61.735c.244.75-.07 1.241-.448 1.671a1.867 1.867 0 0 0-.511-.159c-.807-.127-1.609.26-2.118.588-.505-1.115-2.159-1.524-3.277-.7l-5.771 4.4a2.235 2.235 0 0 0-.24-2.133 2.04 2.04 0 0 0-.525-.473L16.082 2.94c.727-.295 1.433-.346 1.887-.135ZM4.602 13.557c-.502.102-.95.377-1.269.777a2.173 2.173 0 0 0-1.305-.786l10.596-8.075c.769-.565 1.987-.331 2.32.567L4.601 13.557Zm9.16-12.197c.817-.304 1.786.226 1.855 1.04l-10.961 4a1.998 1.998 0 0 0-1.277.343 2.011 2.011 0 0 0-.894-.974L13.763 1.36ZM2.24 10.724C1.026 10.374-.182 8.996.023 7.579c.112-.775.618-1.416 1.426-1.416a1.435 1.435 0 0 1 1.298.8.837.837 0 0 1-.493 1.159.8.8 0 0 1-.992-.396.333.333 0 0 0-.604.282 1.48 1.48 0 0 0 2.202.542c.056.131.127.255.214.367a1.48 1.48 0 0 0 1.94.347.333.333 0 0 0-.362-.56.802.802 0 0 1-1.05-.194.839.839 0 0 1 .195-1.246 1.442 1.442 0 0 1 1.889.347A1.633 1.633 0 0 1 5.78 9.24c-.576 1.31-2.33 1.833-3.54 1.484Zm1.094 8.11c-1.395 0-3.098-1.09-3.312-2.654a1.808 1.808 0 0 1 .602-1.707c.277-.2.61-.308.952-.306a1.568 1.568 0 0 1 1.185.52.942.942 0 0 1-.176 1.41.913.913 0 0 1-1.206-.12.333.333 0 0 0-.503.439 1.592 1.592 0 0 0 2.458-.13 1.591 1.591 0 0 0 2.458.13.333.333 0 0 0-.502-.438.912.912 0 0 1-1.206.118.94.94 0 0 1-.176-1.408 1.618 1.618 0 0 1 2.137-.214 1.808 1.808 0 0 1 .6 1.707c-.21 1.563-1.915 2.653-3.31 2.653ZM18.368 8.352c-.359.719-1.498 1.486-2.178 1.945-1.372.924-6.13 4.512-8.982 6.419.043-.146.076-.295.098-.446a2.445 2.445 0 0 0-.867-2.335 2.213 2.213 0 0 0-.739-.351c4.45-3.236 9.895-7.198 9.839-7.154.688-.537 1.427-.805 1.978-.72.366.063.686.28.878.599.528.78.277 1.437-.027 2.043Z"
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