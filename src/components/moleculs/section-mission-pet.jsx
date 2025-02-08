import { Button } from '../atoms/button';
import { SectionHeader } from '../atoms/section-header';

export const SectionMissionPet = () => {
  return (
    <div className='p-4 space-y-6'>
      <SectionHeader
        subtitle='our mission for pet'
        title="Let's Choose and Adopt your New Lovely Pet"
        desc='You need to see some pets in Adoptme. We have the friend that`s you need to have. We also have the equipment you need to take care of it.'
      />
    </div>
  );
};
