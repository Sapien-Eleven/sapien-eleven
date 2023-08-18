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
            <path d="M18.39 1.02a.297.297 0 0 0-.36-.214c-3.55.909-6.017 2.265-7.736 3.676-.557-.19-3.428-1.104-6.264-.796A7.422 7.422 0 0 0 .741 4.78a.3.3 0 0 0-.137.243C.53 5.35 1.953 6.074 4.577 6.1a18.615 18.615 0 0 0 4.68-.674c-2.07 2.09-2.657 4.111-2.804 4.8-1.764.17-3.159 2.11-3.159 4.48.19 5.968 6.629 5.968 6.82 0 0-2.32-1.337-4.233-3.048-4.471.226-.878 1.132-3.463 4.272-5.773-.041.439-.002.882.117 1.306-1.835.826-2.264 3.303-1.65 5.198.994 3.463 5.153 4.92 6.52 1.28 1.098-2.882-1.307-7.202-4.302-6.654a2.655 2.655 0 0 1 .048-1.638 20.412 20.412 0 0 1 6.106-2.571.297.297 0 0 0 .214-.362Z" />
            <path d="M2.23 3.45c1.918-.637 4.555-.45 6.372-.036-1.856-1.01-4.765-2.17-7.428-1.413-.586.272.085.822 1.057 1.449Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .5h19v19H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent