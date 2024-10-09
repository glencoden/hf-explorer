import React from 'react'
import { createRoot } from 'react-dom/client'
import JsonExplorer from './JsonExplorer'
import demoData from './data/demo-data.json'

const rootElement = document.getElementById('root')

if (rootElement === null) {
    throw new Error('Root element not found')
}

const root = createRoot(rootElement)

root.render(<JsonExplorer data={demoData} />)
