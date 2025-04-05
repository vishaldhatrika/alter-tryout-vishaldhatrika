import { Product } from '@/models/product.model';
import { Alter25Badge } from '@/components/ui/alter25/Alter25Badge'; // Adjust the path as necessary
import { CircleCheck } from '@/components/icons/CircleCheck';
import { Bolt } from '@/components/icons/Bolt';
import { Dumbbell } from '@/components/icons/Dumbbell';
import { Dish } from '@/components/icons/Dish';
import { Graph } from '@/components/icons/Graph';
import { Bed } from '@/components/icons/Bed';
import { CircleCheckGreen } from '@/components/icons/CircleCheckGreen';

export const productData: Product = {
  id: 'p1',
  name: 'DNA Fitness & Health Report',
	badges: [
    {
      darkText: 'HSA/FSA ',
      lightText: 'Eligible',
			icon: CircleCheck
    },
    {
      darkText: '200,000+ ',
      lightText: 'Traits in 2024',
			icon: Bolt
    }
  ],
	discountPercent: -50,
	price: 49,
  regularPrice: 100.00,
	pastMonthSales: 1100,
  description:
    'Created by experts from Stanford University, the NBA, and Mayo Clinic. This is where the guesswork ends. Find out what your body needs through your DNA in the comfort of your own home.',
	included: [
		'Medical grade at-home DNA swab',
		'Free return shipping label',
		'Comprehensive DNA fitness & health report with 13 key traits',
		'Free personalized 1:1 walkthrough of health results with Fitness Expert',
	],
	findings: ['Our ','CLIA-certified, CAP-accredited ', 'Lab analyzes ','60 polymorphisms ','to identify ','13 key traits ', 'that create your personalized wellness plan. You\'ll find out:'],
	findingsList: [
		{
			text: 'Your best type of exercise ',
			icon: Dumbbell
		},
		{
			text: 'Your unique nutritional needs ',
			icon: Dish
		},
		{
			text: 'Your weight loss roadmap ',
			icon: Graph
		},
		{
			text: 'Your recovery tendencies ',
			icon: Bed
		}
	],
  testimonials: [
    {
      name: 'Kathryn S.',
      title: 'Easy process for so many insights',
      description:
        'Loved the Alter DNA kit experience. The swab process and mailing it back was straightforward and simple. The results were fascinating and actionable. Having someone to walk through the report with me was ideal so I could ask questions real time, but the report itself was very easy to understand.',
      badges: [
        {
          darkText: 'Verified',
          lightText: 'Owner',
					icon: CircleCheckGreen
        }
      ]
    }
  ]
};
