import clsx from 'clsx';

interface Alter25BadgeProps {
  darkText: string;
  lightText: string;
  icon?: React.ReactNode;
}

export const Alter25Badge: React.FC<Alter25BadgeProps> = ({
  darkText,
  lightText,
  icon,
}: Alter25BadgeProps) => {
  return (
    <span
      className={clsx(
        'inline-flex flex-nowrap items-center gap-1 py-1 px-3',
        'rounded border border-1 border-badge-gray',
        'tracking-[-0.48px]'
      )}
    >
      {icon}
      <span className="text-base text-alter-black/80">{darkText}</span>
      <span className="text-base text-alter-black/80 font-light">{lightText}</span>
    </span>
  );
};
