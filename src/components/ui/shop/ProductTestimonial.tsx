import clsx from 'clsx';
import React from 'react';
import { Product } from '@/models/product.model';
import { Alter25Badge } from '@/components/ui/alter25/Alter25Badge';


interface ProductTestimonialProps {
  product: Product | undefined;
}

export const ProductTestimonial: React.FC<ProductTestimonialProps> = ({
	product,
}) => {

		return (
			<div className="hidden lg:block">
				{product &&
					product.testimonials &&
					product.testimonials.map((testimonial) => (
						<div className={clsx('border','p-[1.5rem]','rounded-lg','border-badge-gray', 'leading-[1.5]')} key={testimonial.name}>
						<h2 className={clsx('text-lg','font-normal', 'leading-[1.5]')}>{testimonial.title}</h2>
						<br />
						<p className={clsx('font-light','my-4','leading-[1.5]')}>{testimonial.description}</p>
						<p className="my-3 font-normal leading-[1.5]">{testimonial.name}</p>
						{testimonial.badges.map((badge, key) => (
							<Alter25Badge
								key={key}
								darkText={badge.darkText}
								lightText={badge.lightText}
								icon={badge.icon}
							/>
							))
						}
						</div>
					))
				}
			</div>
		);
	};




