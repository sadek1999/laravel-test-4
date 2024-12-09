// import Authenticated from '@/Layouts/AuthenticatedLayout';
import FeatureItem from "@/Components/FeatureItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TFeature, TPaginateData } from "@/types";
import { Head } from "@inertiajs/react";


const index = ({ features }: { features: TPaginateData<TFeature> }) => {
    console.log(features)
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Features
                </h2>
            }
        >
            <Head title="Feature" />

           {
            features?.data.map((feature:TFeature)=>(
                <FeatureItem feature={feature} key={feature.id}></FeatureItem>
            ))
           }

        </AuthenticatedLayout>
    );
};

export default index;
