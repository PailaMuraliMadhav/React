import React from "react";

function App() {
  return (
    <div>
      <h1 className="bg-amber-300 p-4">Helloo Guysss</h1>

      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://imgs.search.brave.com/iMtPWbPixY_jjWXtsXAP8X4qAN8QnTj8jyGVj0MIbk0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzYwLzg1Lzg4/LzM2MF9GXzEwNjA4/NTg4NzBfNnRDWlFn/ZmRHMEtqb2VtYzRF/SHR3RTVsRTZOWk5w/aTguanBn"
          alt=""
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
