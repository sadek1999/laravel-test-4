// import Authenticated from '@/Layouts/AuthenticatedLayout';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TFeature } from "@/types";
import { Head } from "@inertiajs/react";


const index = ({ features }: { features: TFeature[] }) => {
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


        </AuthenticatedLayout>
    );
};

export default index;
