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
            <path d="M6.789 7.402a6.333 6.333 0 0 0-1.845-.02c-.085-.815-.507-4.12-1.96-5.94L4.256.716c.43.7 2.313 3.906 2.534 6.687h-.001Zm4.005.111a6.327 6.327 0 0 1 1.897-.376c.13-.727.8-4.08 2.417-5.813L13.896.5c-.513.709-2.897 4.135-3.102 7.014Zm-2.14 11.744a8.5 8.5 0 0 1-.437.086h-.005c-.252.026-4.223.362-5.127-3.597-.173-.757-.101-1.67.136-2.55.253-.942.692-1.841 1.217-2.473.424-.509.763-.95.893-1.453.12-.458.063-.95-.265-1.556a6.069 6.069 0 0 1 1.949.08c.674.134 1.33.376 1.943.704a7.916 7.916 0 0 0-1.075.952c-1.276 1.354-2.084 3.155-2.056 4.993l.002.079c.067 2.382 1.263 3.95 2.826 4.735Z" />
            <path d="M13.537 13.672a.173.173 0 0 0-.3.169c1.125 1.993 1.076 3.452.464 4.387-.44.67-1.17 1.076-1.963 1.217.066-.092.128-.2.186-.323.467-.994.698-3.125.145-6.38a.173.173 0 0 0-.341.056c.54 3.18.326 5.235-.117 6.178-.162.346-.342.522-.51.526h-.023c-.166-.011-.342-.187-.501-.526-.443-.943-.657-2.998-.117-6.178a.173.173 0 0 0-.341-.057c-.553 3.256-.321 5.387.145 6.381.058.124.12.232.186.323-.793-.141-1.524-.547-1.962-1.217-.613-.935-.662-2.394.464-4.388a.172.172 0 1 0-.3-.168c-1.201 2.126-1.131 3.712-.454 4.746.078.118.163.23.256.333-1.28-.783-2.222-2.188-2.28-4.237a5.77 5.77 0 0 1-.001-.073c-.027-1.746.744-3.46 1.961-4.753A7.544 7.544 0 0 1 9.83 8.343c.275-.159.56-.298.855-.417a6.07 6.07 0 0 1 1.906-.437c-.211.657-.177 1.15.024 1.578.222.472.636.843 1.145 1.265.634.525 1.23 1.328 1.652 2.207.395.821.633 1.705.602 2.482-.077 1.956-1.124 3.284-2.506 3.959.184-.166.347-.355.483-.562.677-1.035.748-2.62-.453-4.746ZM7.792 7.636c.064-.405.195-1.354.215-2.466.023-1.224-.09-2.643-.573-3.75l1.415-.373c.232.78 1.206 4.308.73 7.042a7.452 7.452 0 0 0-.304.19 7.616 7.616 0 0 0-1.482-.643Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 .5h19v19H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent