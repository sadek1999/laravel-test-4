import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TFeature } from "@/types";
import React from "react";
import { Head } from "@inertiajs/react";
import UpvoteDownvote from "@/Components/UpvoteDownvote";

const show = ({ feature }: { feature: TFeature }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Features
                </h2>
            }
        >
            <Head title="Feature " />
            <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
                    <div>
                        <UpvoteDownvote></UpvoteDownvote>
                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl m-2 font-bold ">

                                {feature.name}

                        </h1>
                        <p className="py-3">{feature.description}</p>


                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default show;
