import { Hadith } from '~/models/hadith';
import { BaseInstance } from './base';

export const getHadiths = async (
  rawi: string,
  label: string
): Promise<Hadith[]> => {
  const { data } = await BaseInstance.get<Hadith[]>(`/csv/${rawi}/${parseInt(label)-1}`);

  return data;
};
