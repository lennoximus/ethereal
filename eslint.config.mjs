import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
}, {
  rules: {
    'perfectionist/sort-array-includes': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-classes': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-enums': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-imports': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-interfaces': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-modules': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-named-exports': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-named-imports': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-object-types': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-objects': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-union-types': ['error', {
      newlinesBetween: 'always',
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-variable-declarations': ['error', {
      order: 'asc',
      type: 'natural',
    }],
  },
})
