import React, { useEffect } from 'react'
import DataView from './components/DataView'
import Input from './components/Input'
import Label from './components/Label'
import { useDataStore } from './store/dataStore'
import type { ParsedJson } from './types/ParsedJson'

export default function JsonExplorer({
    data,
}: Readonly<{
    data: ParsedJson
}>) {
    const flatData = useDataStore((state) => state.flatData)
    const setFlatData = useDataStore((state) => state.setFlatData)
    const selectedPath = useDataStore((state) => state.selectedPath)
    const setSelectedPath = useDataStore((state) => state.setSelectedPath)

    useEffect(() => {
        setFlatData(data)
    }, [data])

    const selectedValue = flatData[selectedPath]

    return (
        <div className='container py-16'>
            <section className='flex gap-2'>
                <div className='flex flex-grow flex-col'>
                    <Label htmlFor='property'>Property</Label>
                    <Input
                        type='text'
                        id='property'
                        placeholder='Property'
                        value={selectedPath}
                        onChange={({ target }) => setSelectedPath(target.value)}
                    />
                    <span className='text-base font-normal leading-relaxed text-slate-800'>
                        {selectedValue ?? 'undefined'}
                    </span>
                </div>

                <span className='self-center'>&#8594;</span>

                <div className='flex flex-grow flex-col'>
                    <Label htmlFor='variable'>Block / Variable</Label>
                    <Input type='text' id='variable' placeholder='Variable' />
                </div>

                <span className='self-center'>&#8722;</span>
            </section>

            <section className='mt-8 flex flex-col items-start'>
                <button className='px-4 py-2'>&#43; Assign to variable</button>
                <button className='px-4 py-2'>&#43; Assign to block</button>
            </section>

            <section className='mt-8'>
                <DataView data={data} />
            </section>
        </div>
    )
}
