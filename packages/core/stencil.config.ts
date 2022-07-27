import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'legodesignsystem',

  plugins: [
    sass({
      injectGlobalPaths: ['src/global/global.scss'],
    }),
  ],
  globalStyle: 'src/global/global.css',

  outputTargets: [
    angular({
      componentCorePackage: '@sandhyahonnappa/lego-design-system',
      directivesProxyFile: '../angular/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/component-library/src/lib/stencil-generated/index.ts',
      includeImportCustomElements: true,
    }),
    react({
      componentCorePackage: '@sandhyahonnappa/lego-design-system',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: false,
      includeImportCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true,
      generateTypeDeclarations: true,
      copy: [
        {
          src: './global/global.css',
          dest: './css/variables.css',
          warn: true,
        },
      ],
      dir: 'components',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
  ],
};
