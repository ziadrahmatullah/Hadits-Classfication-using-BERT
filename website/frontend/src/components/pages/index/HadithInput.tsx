import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

type HadithInputType = {
  rawi: string;
  label: string;
};

const HadithInput = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<HadithInputType>();

  const onSubmit = (data: HadithInputType) => {
    router.push(`/classification/${data.rawi}/${data.label}`);
  };

  return (
    <form
      className="flex flex-col space-y-2 w-80"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row space-x-2 items-center">
        <p>Rawi</p>
        <input
          className="input-text"
          type="text"
          required
          {...register('rawi', { required: true })}
        />
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <p>No. label</p>
        <input
          className="input-text"
          type="number"
          min={1}
          max={77}
          required
          {...register('label', { required: true })}
        />
      </div>
      <button className="button button-primary" type="submit">
        Lihat hadits
      </button>
    </form>
  );
};

export default HadithInput;
