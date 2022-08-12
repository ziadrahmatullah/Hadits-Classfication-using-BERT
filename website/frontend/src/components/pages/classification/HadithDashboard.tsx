import { useRouter } from 'next/router';
import React from 'react';
import HadithTable from './HadithTable';

const HadithDashboard = () => {
  const router = useRouter();

  const { rawi, label } = router.query;

  return (
    <div className="flex flex-col p-4 space-y-2">
      <p className="page-title">Klasifikasi Hadits dengan Bab Kitab Hadits Bukhari</p>
      <p className="mb-4">
        Kitab hadits <span className="font-semibold">{rawi}</span> untuk label{' '}
        <span className="font-semibold">{label}</span>
      </p>
      <HadithTable rawi={rawi as string} label={label as string} />
    </div>
  );
};

export default HadithDashboard;
