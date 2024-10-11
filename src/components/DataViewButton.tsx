import React from 'react'
import { useDataStore } from '../store/dataStore'

export default function DataViewButton({
    currentKey,
    path,
}: Readonly<{
    currentKey: string | undefined
    path: string
}>) {
    const setSelectedPath = useDataStore((state) => state.setSelectedPath)

    if (!currentKey) {
        return null
    }

    return (
        <>
            <button
                className='inline-flex text-blue-500'
                onClick={() => {
                    setSelectedPath(path)
                }}
            >
                {currentKey}
            </button>
            :&nbsp;
        </>
    )
}
