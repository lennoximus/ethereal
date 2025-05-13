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
    'perfectionist/sort-decorators': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-enums': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-heritage-clauses': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-interfaces': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-intersection-types': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-jsx-props': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-maps': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-modules': ['error', {
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
    'perfectionist/sort-sets': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-switch-case': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-union-types': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'perfectionist/sort-variable-declarations': ['error', {
      order: 'asc',
      type: 'natural',
    }],
    'vue/attributes-order': ['error', {
      alphabetical: true,
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    }],
    'vue/max-attributes-per-line': ['error', {
      multiline: {
        max: 1,
      },
      singleline: {
        max: 1,
      },
    }],
  },
})
