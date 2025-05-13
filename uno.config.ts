import {
  defineConfig,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
})
