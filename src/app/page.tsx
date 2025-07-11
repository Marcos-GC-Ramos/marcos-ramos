export default function Home() {
  return (
    <section className="bg-white w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-xl px-8 py-16 flex flex-col items-center lg:gap-4 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-lg text-blue-500 font-bold">
            500 Internal Error
          </p>
          
          <h1 className="mb-[10px] text-4xl font-extrabold tracking-tight text-gray-900">
            Whoops! That page doesn’t exist.
          </h1>
        </div>

        <img className="w-[400px] lg:w-[700px]" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/500/500.svg" alt="500 Server Error" />
      </div>
    </section>
  );
}
