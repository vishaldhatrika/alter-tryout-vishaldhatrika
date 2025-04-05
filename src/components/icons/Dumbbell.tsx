interface DumbbellProps{
  className?: string;
}

export const Dumbbell = ({ className = '' }: DumbbellProps) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="48" height="48" rx="24" fill="white"/>
			<rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#2A373B" strokeOpacity="0.2"/>
			<path d="M18 17H18.75H21.25H22V17.75V23.25H26V17.75V17H26.75H29.25H30V17.75V19.25H31.75H32.5V20V23.25H33.25H34V24.75H33.25H32.5V28V28.75H31.75H30V30.25V31H29.25H26.75H26V30.25V24.75H22V30.25V31H21.25H18.75H18V30.25V28.75H16.25H15.5V28V24.75H14.75H14V23.25H14.75H15.5V20V19.25H16.25H18V17.75V17ZM19.5 19.25V20V28V28.75V29.5H20.5V18.5H19.5V19.25ZM18 20.75H17V27.25H18V20.75ZM28.5 28V20V19.25V18.5H27.5V29.5H28.5V28.75V28ZM31 27.25V20.75H30V27.25H31Z" fill="#1A1818"/>
		</svg>
  );
};
