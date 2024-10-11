import type { ParsedJson } from '../types/ParsedJson'

export const jsonToFlatMap = (json: ParsedJson): Record<string, string> => {
    const flatMap: Record<string, string> = {}

    const traverse = (data: ParsedJson, path: string) => {
        if (typeof data === 'string') {
            flatMap[path] = data
        } else if (typeof data === 'number' || typeof data === 'boolean') {
            flatMap[path] = data.toString()
        } else if (data === null) {
            flatMap[path] = 'null'
        } else if (Array.isArray(data)) {
            data.forEach((entry, index) => {
                traverse(entry, `${path}[${index}]`)
            })
        } else {
            Object.entries(data).forEach(([key, value]) => {
                traverse(value, `${path}.${key}`)
            })
        }
    }

    traverse(json, 'res')

    return flatMap
}
