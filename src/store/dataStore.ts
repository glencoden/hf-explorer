import { create } from 'zustand'

type State = {
    flatData: Record<string, string> // path value pair
    addEntry: (entry: { path: string; value: string }) => void
    selectedPath: string
    setSelectedPath: (path: string) => void
}

export const useDataStore = create<State>((set) => ({
    flatData: {},
    addEntry: (entry) =>
        set((state) => ({
            flatData: {
                ...state.flatData,
                [entry.path]: entry.value,
            },
        })),
    selectedPath: '',
    setSelectedPath: (path) => set({ selectedPath: path }),
}))
