export type ParsedJson =
    | string
    | number
    | boolean
    | null
    | ParsedJson[]
    | { [key: string]: ParsedJson }
