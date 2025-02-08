import { SectionHeader } from '../components/atoms/section-header';
import { SectionAdopt } from '../components/moleculs/section-adopt';
import { SectionMissionPet } from '../components/moleculs/section-mission-pet';

import image from '../assets/images/ninja.jpg';
import { Card } from '../components/atoms/card';

export const HomePage = () => {
  return (
    <>
      <Card image={image} />
      <SectionMissionPet />
      <SectionAdopt />
    </>
  );
};
