import React from 'react';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  size: string;
  color: string;
};

export default function Button({ onClick, label, size, color }: Props) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;

  const style = {
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    backgroundColor: color,
  };

  return (
    <button
      onClick={onClick}
      type='submit'
      style={style}
      className='flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      {label}
    </button>
  );
}
