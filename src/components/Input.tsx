import React, { type InputHTMLAttributes } from 'react'

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className='flex h-12 w-full max-w-96 rounded-md border border-slate-400 bg-white px-3 py-2 text-base font-medium ring-offset-0 placeholder:font-normal placeholder:italic placeholder:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400'
            {...props}
        />
    )
}
