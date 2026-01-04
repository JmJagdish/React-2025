const ShimmerCard = () => {
  return (
    <div
      className="rounded-2xl w-64 m-10 border border-gray-200 bg-white p-3
                    shadow-sm animate-pulse"
    >
      <div className="h-40 w-full rounded-xl bg-gray-200"></div>

      <div className="mt-3 space-y-2">
        <div className="h-5 w-3/4 rounded bg-gray-200"></div>
        <div className="h-4 w-full rounded bg-gray-200"></div>
        <div className="h-4 w-2/3 rounded bg-gray-200"></div>

        <div className="flex justify-between mt-3">
          <div className="h-4 w-16 rounded bg-gray-200"></div>
          <div className="h-4 w-20 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
