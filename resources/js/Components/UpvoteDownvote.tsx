import React from "react";

import { Link, useForm } from "@inertiajs/react";
import { TFeature } from "@/types";

const UpvoteDownvote = ({ feature }: { feature: TFeature }) => {
    const upvoteData = useForm({ upvote: true });
    const downvoteData = useForm({ upvote: false });
    const upvoteDownvote = (upvote: boolean) => {
        if (
            (feature.user_has_upvoted && upvote) ||
            (feature.user_has_downvoted && !upvote)
        ) {
            upvoteData.delete(route("upvote.destroy", feature.id),{
                preserveScroll:true
            });
        }

        console.log(upvote);
        let vote = null;
        if (upvote) {
            vote = upvoteData;
        } else {
            vote = downvoteData;
        }
        vote.post(route("upvote.store", feature.id), {
            preserveScroll: true,
        });
    };
    return (
        <div className=" items-center justify-center ">
            <button
                onClick={() => upvoteDownvote(true)}
                className={`${
                    feature.user_has_upvoted ? "text-amber-500" : ""
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                </svg>
            </button>

            <p className=" text-center text-2xl"> {feature.upvote_count}</p>

            <button
                onClick={() => upvoteDownvote(false)}
                className={`${
                    feature.user_has_downvoted ? "text-amber-500" : ""
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </button>
        </div>
    );
};

export default UpvoteDownvote;
