import React from 'react'

export default function DataViewLine({
    level,
    children,
}: Readonly<{
    level: number
    children: React.ReactNode
}>) {
    return (
        <div className='flex'>
            {Array.from({ length: level }, (_, index) => (
                <span key={index}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            ))}
            {children}
        </div>
    )
}
