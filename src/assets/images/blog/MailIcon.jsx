import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M11.932 9.092 18 12.928V5.095l-6.068 3.998ZM0 5.094v7.834l6.068-3.836L0 5.094Zm16.875-2.282H1.125c-.561 0-1.007.419-1.091.958L9 9.677l8.966-5.907c-.084-.539-.53-.958-1.091-.958Zm-5.974 6.96L9.31 10.82a.562.562 0 0 1-.618 0L7.099 9.77.036 14.239c.087.534.53.95 1.089.95h15.75c.56 0 1.002-.416 1.089-.95l-7.063-4.466Z"
        />
    </svg>
)
export default SvgComponent