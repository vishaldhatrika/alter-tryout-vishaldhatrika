import ArrowRightIcon from '@public/svg/navigation/arrow-right.svg';
import clsx from 'clsx';
import Link from 'next/link';

interface Alter25ButtonProps {
  text: string;
  href: string;
  size?: 'md' | 'lg';
  style?: 'light' | 'dark';
  arrow?: boolean;
  full?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Alter25Button: React.FC<Alter25ButtonProps> = ({
  href,
  text,
  size = 'md',
  style = 'dark',
  arrow,
  full,
  className,
  children,
}: Alter25ButtonProps) => {
  let sizeClasses = '';
  let styleClasses = '';
  let arrowClasses = '';

  switch (size) {
    case 'md':
      sizeClasses = 'px-6 py-[6.5px] sm:py-2 rounded-[35px]';
      break;
    case 'lg':
      sizeClasses = 'px-10 py-5 rounded-[42px] text-lg';
      break;
    default:
      throw new Error(`ALTER25_BUTTON_SIZE_NOT_RECOGNIZED: ${size}`);
  }

  switch (style) {
    case 'dark':
      styleClasses =
        'text-white bg-alter25-button-dark ' +
        'hover:bg-alter25-button-dark/80 ' +
        'active:outline active:outline-2 active:outline-alter25-button-light-outline';
      arrowClasses = 'text-white ms-4';
      break;
    case 'light':
      styleClasses =
        'text-alter25-black-b bg-alter25-button-light ' +
        'hover:bg-alter25-button-light-hover ' +
        'active:outline active:outline-2 active:outline-alter25-button-light-outline';
      arrowClasses = 'text-alter25-black-b ms-4';

      break;
    default:
      throw new Error(`ALTER25_BUTTON_STYLE_NOT_RECOGNIZED: ${size}`);
  }

  return (
    <Link
      href={href}
      className={clsx(sizeClasses, styleClasses, className, 'duration-150 inline-block', {
        'w-full': full,
      })}
    >
      <span className="flex justify-center items-center">
        <span className="whitespace-nowrap">{text}</span>
        {arrow ? <ArrowRightIcon className={`${arrowClasses}`}></ArrowRightIcon> : children}
      </span>
    </Link>
  );
};
