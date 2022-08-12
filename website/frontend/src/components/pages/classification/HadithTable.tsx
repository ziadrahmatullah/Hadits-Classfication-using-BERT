import React from 'react';
import { useQuery } from 'react-query';
import { getHadiths } from '~/api/hadith';

interface Props {
  rawi: string;
  label: string;
}

const HadithTable = ({ rawi, label }: Props) => {
  const { data: hadiths } = useQuery(`hadith-${rawi}-${label}`, () =>
    getHadiths(rawi, label)
  );

  if (!hadiths) return null;

  return (
    <table className="table-auto border min-w-max w-full">
      <thead>
        <tr>
          <th className="table-header">No. Hadits</th>
          <th className="table-header">No. Bab</th>
          <th className="table-header w-[100rem]">Teks Arab</th>
          <th className="table-header w-[100rem]">Teks Indonesia</th>
          {/* <th className="table-header">Label</th> */}
        </tr>
      </thead>
      <tbody className="table-body">
        {hadiths.map((hadith, i) => (
          <tr className="border-b border-gray-400" key={`hadith-${i}`}>
            <td className="table-cell text-center">{hadith.haditsId}</td>
            <td className="table-cell text-center">{hadith.kitabId}</td>
            <td className="table-cell text-justify">{hadith.arab}</td>
            <td className="table-cell text-justify">{hadith.indo}</td>            
            {/* <td className="table-cell text-center">{hadith.label}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HadithTable;
