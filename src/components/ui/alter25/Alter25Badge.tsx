import clsx from 'clsx';

import { Alter25BadgeProps } from '@/models/badge.model';

export const Alter25Badge: React.FC<Alter25BadgeProps> = ({
  darkText,
  lightText,
  icon: Icon,
}: Alter25BadgeProps) => {
  return (
    <span
      className={clsx(
        'inline-flex flex-nowrap items-center gap-1 py-1 px-3',
        'rounded border border-1 border-badge-gray',
        'tracking-[-0.48px] text-foreground'
      )}
    >
      {Icon && <Icon />}

    	<span
				className={clsx(
				'text-base',
				'font-normal',
				'text-alter-black-80'
      )}
			>
				{darkText}
			</span>
      <span
				className={clsx(
				'text-base',
				'font-light',
				'text-alter-black-80'

      )}
			>
				{lightText}
			</span>
    </span>
  );
};
