import React from 'react'
import type { ParsedJson } from '../types/ParsedJson'
import DataViewButton from './DataViewButton'
import DataViewLine from './DataViewLine'

export default function DataView({
    data,
    currentKey,
    path,
    level = 0,
}: Readonly<{
    data: ParsedJson
    currentKey?: string
    path?: string
    level?: number
}>) {
    // If the path is not provided, we are at the data root
    if (!path) {
        return (
            <div>
                <h4 className='mb-2 text-sm font-normal leading-none text-slate-500'>
                    Response
                </h4>
                <div className='flex flex-col overflow-hidden rounded-md border border-slate-400 p-4'>
                    <DataView data={data} path='res' />
                </div>
            </div>
        )
    }

    if (typeof data === 'string') {
        return (
            <DataViewLine level={level}>
                <DataViewButton
                    currentKey={currentKey}
                    path={path}
                    value={data}
                />
                <span>'{data}',</span>
            </DataViewLine>
        )
    }

    if (typeof data === 'number' || typeof data === 'boolean') {
        return (
            <DataViewLine level={level}>
                <DataViewButton
                    currentKey={currentKey}
                    path={path}
                    value={data.toString()}
                />
                <span>{data.toString()},</span>
            </DataViewLine>
        )
    }

    if (data === null) {
        return (
            <DataViewLine level={level}>
                <DataViewButton
                    currentKey={currentKey}
                    path={path}
                    value='null'
                />
                <span>null,</span>
            </DataViewLine>
        )
    }

    if (Array.isArray(data)) {
        return (
            <>
                <DataViewLine level={level}>
                    <DataViewButton
                        currentKey={currentKey}
                        path={path}
                        value='undefined'
                    />
                    &#91;&nbsp;
                </DataViewLine>

                {data.map((entry, index) => (
                    <DataView
                        key={`${entry}-${index}`}
                        data={entry}
                        path={`${path}[${index}]`}
                        level={level + 1}
                    />
                ))}

                <DataViewLine level={level}>
                    <span>&#93;</span>
                </DataViewLine>
            </>
        )
    }

    return (
        <>
            <DataViewLine level={level}>
                <DataViewButton
                    currentKey={currentKey}
                    path={path}
                    value='undefined'
                />
                &#123;&nbsp;
            </DataViewLine>

            {Object.entries(data).map(([key, value]) => (
                <DataView
                    key={key}
                    data={value}
                    currentKey={key}
                    path={`${path}.${key}`}
                    level={level + 1}
                />
            ))}

            <DataViewLine level={level}>
                <span>&#125;</span>
            </DataViewLine>
        </>
    )
}
