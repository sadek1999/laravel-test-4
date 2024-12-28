
import FeatureItem from "@/Components/FeatureItem";
// import PermissionEnum from '../../../../app/Enum/PermissionEnum.php';
import { can } from "@/helper";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TFeature, TPaginateData } from "@/types";
import { Head, Link, usePage } from "@inertiajs/react";

const index = ({ features }: { features: TPaginateData<TFeature> }) => {
    const user=usePage().props.auth.user;
    // console.log(user)

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Features
                </h2>
            }
        >
            <Head title="Feature" />

         {can(user ,'manageFeature') && <Link href={route('feature.create')}
           className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300 my-2"
           >create Feature</Link>}

            {features?.data.map((feature: TFeature) => (
                <FeatureItem feature={feature} key={feature.id}></FeatureItem>
            ))}
        </AuthenticatedLayout>
    );
};

export default index;
