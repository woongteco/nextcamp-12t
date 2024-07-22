import clsx from "clsx";

export default function BannerImage({ className }: { className?: string }) {
  return (
    <div className={clsx("bg-main-600 h-[216px] overflow-hidden", className)}>
      <svg
        width="1440"
        height="1492"
        viewBox="0 0 1440 1492"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-auto translate-x-1/4 md:translate-x-1/2 xl:translate-x-2/3 -translate-y-1/4"
      >
        <path
          d="M1389.18 1014.42L546.37 1475.52C505.516 1497.49 455.583 1497.49 415.233 1475.52L298.723 1411.49C104.036 1304.93 -15.5 1108.07 -15.5 895.439V807.042C-15.5 535.639 137.325 284.782 385.98 149.081L658.341 0C584.198 41.5705 539.309 118.022 539.309 199.252C539.309 280.482 586.215 358.845 661.367 399.937L1389.68 797.963C1477.44 845.745 1477.44 965.679 1389.68 1013.94L1389.18 1014.42Z"
          fill="#0FFED4"
        />
      </svg>
    </div>
  );
}
