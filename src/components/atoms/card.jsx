export const Card = ({ image }) => {
  return (
    <div className=' max-w-2xl overflow-hidden p-4 shadow-lg rounded-2xl'>
      <img src={image} alt='' className='w-full h-full rounded-3xl' />
      <h1 className='text-[#151515] text-2xl leading-14'>Halo</h1>
    </div>
  );
};
