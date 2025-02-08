export const Card = ({ image }) => {
  return (
    <div className='aspect-video max-w-2xl overflow-hidden p-4 shadow-lg rounded-2xl'>
      <img src={image} alt='' className='w-full h-full rounded-3xl' />
    </div>
  );
};
