export const Button = ({ actionFn, text }) => {
  return (
    <button
      onClick={actionFn}
      className='bg-[#304057] px-6 py-4 text-white rounded-md hover:bg-zinc-500 cursor-pointer'
    >
      {text}
    </button>
  );
};
