import type { Context } from '../engines'

export function generatePackageJson(ctx: Context) {
  const {
    config: { outdir },
  } = ctx

  const pkg = {
    name: outdir,
    description: 'This package is auto-generated by CSS Panda',
    version: `0.0.0-${performance.now()}`,
    type: 'module',
    exports: {
      './css': {
        types: './css/index.d.ts',
        import: './css/index.mjs',
      },
      './jsx': {
        types: './jsx/index.d.ts',
        import: './jsx/index.mjs',
      },
      './patterns': {
        types: './patterns/index.d.ts',
        import: './patterns/index.mjs',
      },
      './recipes': {
        types: './recipes/index.d.ts',
        import: './recipes/index.mjs',
      },
      './tokens': {
        types: './tokens/index.d.ts',
        import: './tokens/index.mjs',
      },
      './types': {
        types: './types/index.d.ts',
      },
      './styles.css': './styles.css',
    },
  }

  return JSON.stringify(pkg, null, 2)
}