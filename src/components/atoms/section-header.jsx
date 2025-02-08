export const SectionHeader = ({
  variant = 'default',
  title = 'Default title',
  subtitle = 'Default Subtitle',
  desc = 'Default description for desc props.',
}) => {
  return (
    <div
      className={`flex gap-5 ${
        variant == 'default' ? 'flex-col' : ''
      } max-w-[485px]`}
    >
      <div className='flex flex-col gap-1.5'>
        <h2 className='text-[#637C95] text-lg uppercase'>{subtitle}</h2>
        <h1 className='text-[#151515] text-4xl leading-14'>{title}</h1>
      </div>

      <p className='text-xl font-normal text-[#6D6D6D]'>{desc}</p>
    </div>
  );
};
