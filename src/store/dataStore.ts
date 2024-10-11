import { create } from 'zustand'
import { jsonToFlatMap } from '../helpers/json-to-flat-map'
import type { ParsedJson } from '../types/ParsedJson'

type State = {
    flatData: Record<string, string> // path value pair
    setFlatData: (data: ParsedJson) => void
    selectedPath: string
    setSelectedPath: (path: string) => void
}

export const useDataStore = create<State>((set) => ({
    flatData: {},
    setFlatData: (data) => set({ flatData: jsonToFlatMap(data) }),
    selectedPath: '',
    setSelectedPath: (path) => set({ selectedPath: path }),
}))
