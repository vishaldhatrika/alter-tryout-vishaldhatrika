interface CircleCheckGreenProps {
  className?: string;
}

export const CircleCheckGreen = ({ className = '' }: CircleCheckGreenProps) => {
  return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_2_343)">
				<path d="M14.6667 7.38662V7.99995C14.6658 9.43756 14.2003 10.8364 13.3396 11.9878C12.4788 13.1393 11.2689 13.9816 9.89023 14.3892C8.51162 14.7968 7.03817 14.7479 5.68964 14.2497C4.34112 13.7515 3.18976 12.8307 2.4073 11.6247C1.62484 10.4186 1.25319 8.99199 1.34778 7.55749C1.44237 6.12299 1.99813 4.7575 2.93218 3.66467C3.86623 2.57183 5.12852 1.81021 6.53079 1.49338C7.93306 1.17656 9.40017 1.32151 10.7133 1.90662M14.6667 2.66662L8 9.33995L6 7.33995" stroke="#33912E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
			</g>
			<defs>
				<clipPath id="clip0_2_343">
					<rect width="16" height="16" fill="white"/>
				</clipPath>
			</defs>
		</svg>

  );
};
