import { TFeature } from '@/types';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import UpvoteDownvote from './UpvoteDownvote';
import Dropdown from './Dropdown';
import FeatureActionDropdown from './FeatureActionDropdown';

const FeatureItem = ({feature}:{feature:TFeature}) => {
    const [isExpanded,setIsExpanded]=useState(false)
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);

      }
    return (
        <div className='mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800'>

      <div className='p-6 text-gray-900 dark:text-gray-100 flex gap-8'>
       <div>
        <UpvoteDownvote></UpvoteDownvote>
       </div>
       <div className='flex-1'>
         <h1 className='text-2xl '>
            <Link href={route('feature.show',feature)}>
            {feature.name}
            </Link>

            </h1>

         {
            (feature.description || '').length >=200 && (
                <>
                <p>{isExpanded ? feature.description : `${(feature.description).slice(0,200)}`}</p>
                <button onClick={toggleReadMore} className="text-amber-500 hover:underline">
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>

                </>
            )
         }
       </div>
      <FeatureActionDropdown feature={feature}></FeatureActionDropdown>
      </div>


        </div>
    );
};

export default FeatureItem;
