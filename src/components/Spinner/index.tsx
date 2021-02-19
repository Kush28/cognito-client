import * as React from "react";

function Spinner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          background: "0 0",
        }}
        width={200}
        height={200}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        display="block"
        {...props}
      >
        <path d="M10 50a40 40 0 0080 0 40 42 0 01-80 0" fill="#e15b64">
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 51;360 50 51"
          />
        </path>
      </svg>
    </div>
  );
}

export default Spinner;
