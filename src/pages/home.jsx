import { SectionHeader } from '../components/atoms/section-header';
import { Card } from '../components/card';
import { SectionAdopt } from '../components/moleculs/section-adopt';
import { SectionMissionPet } from '../components/moleculs/section-mission-pet';

export const HomePage = () => {
  return (
    <>
      <SectionMissionPet />
      <SectionAdopt />
    </>
  );
};
