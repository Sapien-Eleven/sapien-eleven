import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={20}
        fill="none"
        {...props}
    >
        <g fill="#CA3C3D">
            <path d="M9.878 9.002c-1.319-1.336-3.294-1.91-4.974-1.208l2.054 2.054a.297.297 0 1 1-.42.42l-2.198-2.2a5.307 5.307 0 0 0-1.092.841 6.83 6.83 0 0 0-1.488 2.25l1.944 1.945a.297.297 0 0 1-.42.42l-1.748-1.75a8.169 8.169 0 0 0 .291 5.507.846.846 0 0 0 .368.38c2.703 1.07 5.425.831 7.677-.8l-2.278-2.28a.297.297 0 0 1 .421-.417l2.32 2.32c2.5-2.27 2.008-5.365-.457-7.482Zm-.055-.849c.158.133.315.273.47.425l.101.1 1.83-1.831a.297.297 0 0 1 .42.42l-1.826 1.827c.185.182.358.375.519.578A6.568 6.568 0 0 0 15.9 6.097a1.81 1.81 0 0 0-2.505-2.506 6.556 6.556 0 0 0-3.573 4.562Z" />
            <path d="M17.748 7.434a1.734 1.734 0 0 0-1.232-1.254c-.03.071-.06.14-.094.208a7.214 7.214 0 0 1-4.707 3.81c.075.118.144.234.207.352a6.546 6.546 0 0 0 5.21-1.26 1.735 1.735 0 0 0 .616-1.856Zm-8.447.34a7.17 7.17 0 0 1 4.01-4.797c-.306-1.36-2.297-1.768-3.105-.62A6.562 6.562 0 0 0 8.944 7.56c.12.064.24.138.357.214Z" />
        </g>
    </svg>
)
export default SvgComponent