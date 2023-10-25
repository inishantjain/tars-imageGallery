function Spinner() {
  return (
    <div className="h-64 py-10 w-screen z-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-400"></div>
    </div>
  );
}

export default Spinner;
