// eslint-disable-next-line react/prop-types
export default function Titles({ text }) {
  const title = `[ ${text} ]`;

  return (
    <div className="mt-[100px]">
      <h1
        className="text-center text-black w-max p-3 text-2xl relative bg-primaryColor m-[auto] 
          before:content-[''] before:absolute before:bg-grey before:w-full
          before:h-full before:z-[-1] "
      >
        {title}
      </h1>
    </div>
  );
}
