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
            <path d="M13.25 6.59a3.745 3.745 0 0 0-3.17 1.754c.194.421.326.869.391 1.329a4.773 4.773 0 0 1 4.423 4.034A3.746 3.746 0 0 0 13.25 6.59Zm1.705 3.75a.681.681 0 1 1-.001-1.363.681.681 0 0 1 .001 1.363ZM5.75 6.59a3.75 3.75 0 0 0-.323 7.484 4.775 4.775 0 0 1 4.018-4.353A3.748 3.748 0 0 0 5.75 6.59Zm-1.705 5.455a.681.681 0 1 1 0-1.363.681.681 0 0 1 0 1.363Z" />
            <path d="M10.183 10.68a3.75 3.75 0 1 0 .001 7.502 3.75 3.75 0 0 0 0-7.501Zm0 5.796a.681.681 0 1 1 0-1.362.681.681 0 0 1 0 1.362ZM5.752 5.566c1.521 0 2.875.72 3.75 1.831a4.764 4.764 0 0 1 3.75-1.83c.092 0 .183.008.275.014.528-.867.806-1.919.737-3.072-2.267-.135-4.144 1.056-4.978 2.9-.642-2.226-2.693-3.733-5.229-3.582-.087 1.48.389 2.796 1.243 3.763.15-.015.3-.023.452-.023Z" />
        </g>
    </svg>
)
export default SvgComponent