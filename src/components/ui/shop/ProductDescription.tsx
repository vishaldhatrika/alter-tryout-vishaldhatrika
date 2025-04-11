import clsx from 'clsx';
import React from 'react';
import { Product } from '@/models/product.model';
import { Alter25Badge } from '@/components/ui/alter25/Alter25Badge'; // Adjust the path as necessary
import { Alter25Button } from '../alter25/Alter25Button';

interface ProductDescriptionProps {
  product: Product;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  product,
}) => {
  return (
    <div className="p-4 space-y-4">
			{/* Title */}
      <h1 className="text-4xl font-light">{product.name}</h1>
			{/* Badges */}
      {product.badges && Array.isArray(product.badges) && product.badges.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{product.badges.map((badge, key) => (
						<Alter25Badge
							key={key}
							darkText={badge.darkText}
							lightText={badge.lightText}
							icon={badge.icon}
						/>
					))}
				</div>
			)}

			{/* Prices */}
			<div className="space-y-8">
			{product.discountPercent && (
          <span className={clsx('text-alter25-red','text-3xl','font-light')}>
            {product.discountPercent}%&nbsp;
          </span>
        )}
        <span className="text-3xl mr-3">${product.price}</span>
				<br className='lg:block hidden' />
        {product.regularPrice && product.regularPrice > product.price && (
          <span className="opacity-80">
            Regular Price: <span className="line-through">${product.regularPrice.toLocaleString('en-US',{minimumFractionDigits:2})}</span>
          </span>
        )}

      </div>
			{/* Past Sales */}
			<p><span className='font-normal'>{product.pastMonthSales?.toLocaleString('en-US')}+ bought </span>in past month.</p>

			{/* horizontal line */}
			<div className='HorizontalLine lg:block hidden'></div>

			{/* Buy Now only mobile btn */}
			<Alter25Button href="/shop/swab-kit" text="Buy Now" size="lg" className='w-full block lg:hidden'></Alter25Button>

			{/* Description */}
			<p className="hidden lg:block text-lg">{product.description}</p>

			{/* Features */}
      {product.included && (
				<div>
				<p className="text-lg font-normal">Included: </p>
        <ul className={clsx("tick-list","")}>
          {product.included.map((feature) => (
            <li className="tick-list-item my-3" key={feature}>{feature}</li>
          ))}
        </ul>
				</div>
      )}

			{/* findings */}
			<p className='leading-[1.5]'>
				{product.findings.map((_,idx)=>(
					<span key={idx} className={idx%2 ===0 ? 'font-light': 'font-normal'}>{_}</span>
				))}
			</p>

			<div className="findings-grid grid grid-cols-1 lg:grid-cols-2">
				{product.findingsList.map((findingsListItem, itemIdx) => {
					const Icon = findingsListItem.icon;
					return (
							<div key={itemIdx} className='flex items-center gap-2 lg:gap-3 my-2 lg:my-3'>
							{Icon && <Icon className="w-4 h-4 text-gray-700" />}
							<p>{findingsListItem.text}</p>
							</div>
					);
				})}
			</div>

			{/* Buy Now mobile btn */}
			<Alter25Button href="/shop/swab-kit" text="Buy Now" size="lg" className='w-full hidden lg:block' style='light'></Alter25Button>
    </div>
  );
};
