const SearchFilters = () => {
  return (
    <div className="h-[40px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center  justify-between ">
          <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold ">where</p>
            <p className="text-sm">wanted location</p>
          </div>
          <div className=" h-[40px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold ">checkin</p>
            <p className="text-sm">add dates</p>
          </div>

          <div className=" h-[40px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold ">checkout</p>
            <p className="text-sm">add dates</p>
          </div>
          <div className=" h-[40px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold ">who</p>
            <p className="text-sm">add guests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="p-2 lg:p-4 bg-airbnb rounded-full text-white hover:bg-airbnb-dark transition cursor-pointer">
          <svg
            viewBox="0 0 32 32"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentcolor",
              strokeWidth: 4,
              overflow: "visible",
            }}
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
