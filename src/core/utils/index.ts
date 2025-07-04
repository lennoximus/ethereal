export function getPropsDefaults<PropsKeys extends string, Props extends Record<PropsKeys, any>>(props: Props) {
  return Object
    .entries(props)
    .reduce((acc, entry) => {
      const key = entry[0] as keyof Props
      const value = entry[1]

      if (typeof value === 'undefined') {
        // @ts-expect-error Leave it be for now.
        acc[key] = undefined
      }
      else if (typeof value === 'object') {
        // @ts-expect-error Leave it be for now.
        acc[key] = value
          ? () => value
          : value
      }
      else {
        // @ts-expect-error Leave it be for now.
        acc[key] = value
      }

      return acc
    }, {} as {
      [Key in keyof Props]: Props[Key] extends object
        ? () => Props[Key]
        : Props[Key]
    })
}

export function pixelize(value: number | string) {
  return typeof value === 'number' ? `${value}px` : value
}
