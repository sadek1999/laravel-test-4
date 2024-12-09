import { TFeature } from '@/types';
import React from 'react';

const FeatureItem = ({feature}:{feature:TFeature}) => {
    return (
        <div>

        <h1 className=' text-white '>{feature.name}</h1>

        </div>
    );
};

export default FeatureItem;
