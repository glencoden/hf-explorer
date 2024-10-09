import React, { useEffect } from 'react'
import { useDataStore } from '../store/dataStore'

export default function DataViewButton({
    currentKey,
    path,
    value,
}: Readonly<{
    currentKey: string | undefined
    path: string
    value: string
}>) {
    const addEntry = useDataStore((state) => state.addEntry)
    const setSelectedPath = useDataStore((state) => state.setSelectedPath)

    useEffect(() => {
        if (!currentKey) {
            return
        }
        addEntry({ path, value })
    }, [currentKey, path, value])

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
