import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={20}
        fill="none"
        {...props}
    >
        <path
            fill="#FEDD4B"
            d="M11.844 7.896c.221-.228.59.04.437.32-1.529 2.792-4.606 4.214-7.873 3.836a1.447 1.447 0 0 0-1.28.512.27.27 0 0 1-.38.034 8.937 8.937 0 0 1-1.25-1.27.902.902 0 0 1-.032-1.093l.195-.268a.9.9 0 0 1 1.057-.31c3.224 1.265 6.774.662 9.126-1.76Zm1.703.19c.025-.305-.394-.414-.52-.136-1.526 3.342-5.007 5.071-8.682 4.645a.9.9 0 0 0-.943.57l-.12.309a.902.902 0 0 0 .31 1.049c.705.518 1.485.93 2.3 1.219.409.144.337-.596 1.274-.788 3.404-.697 6.089-3.285 6.381-6.869Zm2.368-3.167c-.294-.392.06-.574.005-1.848a1.122 1.122 0 0 0-1.596-.96l-.373.173a1.13 1.13 0 0 0-.57 1.451c2.241 5.502-.772 10.662-6.105 11.755a.899.899 0 0 0-.719.835l-.017.331a.902.902 0 0 0 .621.9c3.065 1.002 6.313.269 8.355-1.791 2.7-2.722 2.975-7.402.399-10.846Z"
        />
    </svg>
)
export default SvgComponent