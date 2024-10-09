import React, { type LabelHTMLAttributes } from 'react'

export default function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label
            className='mb-2 text-sm font-normal leading-none text-slate-500'
            {...props}
        />
    )
}
