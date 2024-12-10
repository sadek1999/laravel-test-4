import { TFeature } from '@/types';
import { useForm } from '@inertiajs/react';
import React, { FormEventHandler } from 'react';
import TextAreaInput from './TextAreaInput';
import PrimaryButton from './PrimaryButton';

const NewCommentForm = ({feature}:{feature:TFeature}) => {
    const {data,setData,post,processing}=useForm({'comment':''})
    const createComment :FormEventHandler=e=>{
     e.preventDefault();
     post(route('comment.store',feature.id),{
        preserveScroll:true,
        onSuccess:()=>setData('comment','')
     })
    }
    return (
        <form onSubmit={createComment} className="flex items-center py-2 rounded-lg bg-gray-50 dark:bg-gray-800 mb-4">
      <TextAreaInput
        rows={1}
        value={data.comment}
        onChange={e => setData('comment', e.target.value)}
        className="mt-1 block w-full"
        placeholder="Your comment"
      ></TextAreaInput>
      <PrimaryButton disabled={processing}>Comment</PrimaryButton>
    </form>
    );
};

export default NewCommentForm;
