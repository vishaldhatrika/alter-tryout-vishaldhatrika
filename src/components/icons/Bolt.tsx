interface BoltProps {
  className?: string;
}

export const Bolt = ({ className = '' }: BoltProps) => {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9.7375 5.05312L10.425 2.30938L11 0L9.09688 1.42813L1 7.5V9L3.13125 9.28438L4.62813 9.48438L4.2625 10.95L3.575 13.6938L3 16L4.90312 14.5719L13 8.5V7L10.8687 6.71562L9.37187 6.51562L9.7375 5.05V5.05312ZM10.8625 8.23125L5.48125 12.2656L6.08437 9.84688L6.49062 8.21875L4.825 7.99687L3.13438 7.77187L8.51875 3.73438L7.91563 6.15312L7.50938 7.78125L9.175 8.00313L10.8656 8.22812L10.8625 8.23125Z" fill="var(--foreground)"/>
		</svg>
  );
};
