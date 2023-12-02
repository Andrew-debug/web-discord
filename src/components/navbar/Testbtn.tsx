"use client";

const Testbtn = ({ handleClick }: { handleClick: () => Promise<any> }) => {
  return (
    <button onClick={async () => console.log(await handleClick())}>
      button
    </button>
  );
};

export default Testbtn;
