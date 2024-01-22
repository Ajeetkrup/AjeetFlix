const Loading = () => {
  return (
    <div className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
      <div
        className="w-12 h-12 rounded-full animate-spin
                  border-8 border-dashed border-purple-500 border-t-transparent"
      ></div>
    </div>
  );
};

export default Loading;
