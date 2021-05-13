# Changelog

### [3.1.1](https://www.github.com/googleapis/nodejs-service-directory/compare/v3.1.0...v3.1.1) (2021-05-12)


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#135](https://www.github.com/googleapis/nodejs-service-directory/issues/135)) ([410e92b](https://www.github.com/googleapis/nodejs-service-directory/commit/410e92b844ac0012409df4f37582c9896a4af02f))
* use require() to load JSON protos ([#138](https://www.github.com/googleapis/nodejs-service-directory/issues/138)) ([2bda8f7](https://www.github.com/googleapis/nodejs-service-directory/commit/2bda8f786599bbac10f6a5e833338ff83dd6806e))

## [3.1.0](https://www.github.com/googleapis/nodejs-service-directory/compare/v3.0.0...v3.1.0) (2021-01-09)


### Features

* adds style enumeration ([#105](https://www.github.com/googleapis/nodejs-service-directory/issues/105)) ([0807e17](https://www.github.com/googleapis/nodejs-service-directory/commit/0807e17411d6608d0cbad33a417bed25c883bcb4))


### Bug Fixes

* **deps:** update dependency json-schema to ^0.3.0 ([#102](https://www.github.com/googleapis/nodejs-service-directory/issues/102)) ([e7cb54b](https://www.github.com/googleapis/nodejs-service-directory/commit/e7cb54bac1f0101f47b10d9244487ae91ca4239d))

## [3.0.0](https://www.github.com/googleapis/nodejs-service-directory/compare/v2.1.2...v3.0.0) (2020-11-19)


### ⚠ BREAKING CHANGES

* make v1 API default (#96)

### Features

* make v1 API default ([#96](https://www.github.com/googleapis/nodejs-service-directory/issues/96)) ([b269328](https://www.github.com/googleapis/nodejs-service-directory/commit/b269328de96363d3a2fb1e0c57d6658c3b9ada73)), closes [#4](https://www.github.com/googleapis/nodejs-service-directory/issues/4)


### Bug Fixes

* only fallback if fetch exists on window ([59233c1](https://www.github.com/googleapis/nodejs-service-directory/commit/59233c1499218aa107ab0688cf0d004a67c47c96))

### [2.1.2](https://www.github.com/googleapis/nodejs-service-directory/compare/v2.1.1...v2.1.2) (2020-11-06)


### Bug Fixes

* do not modify options object, use defaultScopes ([#88](https://www.github.com/googleapis/nodejs-service-directory/issues/88)) ([17f1b3d](https://www.github.com/googleapis/nodejs-service-directory/commit/17f1b3d0bd010f895b09569e77333474048a8d66))

### [2.1.1](https://www.github.com/googleapis/nodejs-service-directory/compare/v2.1.0...v2.1.1) (2020-07-06)


### Bug Fixes

* update node issue template ([#53](https://www.github.com/googleapis/nodejs-service-directory/issues/53)) ([ebe5c3a](https://www.github.com/googleapis/nodejs-service-directory/commit/ebe5c3a3d49c44b380cf63bab8fa0aab67a84d98))

## [2.1.0](https://www.github.com/googleapis/nodejs-service-directory/compare/v2.0.0...v2.1.0) (2020-06-12)


### Features

* **secrets:** begin migration to secret manager from keystore ([#49](https://www.github.com/googleapis/nodejs-service-directory/issues/49)) ([bf9dc4e](https://www.github.com/googleapis/nodejs-service-directory/commit/bf9dc4ed47c1ba57b91d18859abdad8640bbe240))


### Bug Fixes

* handle fallback option properly ([#52](https://www.github.com/googleapis/nodejs-service-directory/issues/52)) ([11478aa](https://www.github.com/googleapis/nodejs-service-directory/commit/11478aaaaba0b10a715e37a54fabd4adca436aa8))

## [2.0.0](https://www.github.com/googleapis/nodejs-service-directory/compare/v1.0.1...v2.0.0) (2020-05-27)


### ⚠ BREAKING CHANGES

* The library now supports Node.js v10+. The last version to support Node.js v8 is tagged legacy-8 on NPM.

### Features

* drop node8 support, support for async iterators ([#22](https://www.github.com/googleapis/nodejs-service-directory/issues/22)) ([ee3a803](https://www.github.com/googleapis/nodejs-service-directory/commit/ee3a8034adae034ad811c81874bf6ed639d33536))
* **samples:** add Service directory samples ([#42](https://www.github.com/googleapis/nodejs-service-directory/issues/42)) ([a29a180](https://www.github.com/googleapis/nodejs-service-directory/commit/a29a180985f2d69a3f92814affbe8459c5e084d3))


### Bug Fixes

* regenerated unit tests ([#40](https://www.github.com/googleapis/nodejs-service-directory/issues/40)) ([7fb86a9](https://www.github.com/googleapis/nodejs-service-directory/commit/7fb86a9ffd810ef4e8ccc2c862bfc0f760e9dba4))
* remove eslint, update gax, fix generated protos, run the generator ([#26](https://www.github.com/googleapis/nodejs-service-directory/issues/26)) ([30e89c3](https://www.github.com/googleapis/nodejs-service-directory/commit/30e89c31462195b33aad1727cedc272c6c42dbfd))

### [1.0.1](https://www.github.com/googleapis/nodejs-service-directory/compare/v1.0.0...v1.0.1) (2020-03-17)


### Bug Fixes

* **docs:** fixed link in .repo-metadata.json ([#8](https://www.github.com/googleapis/nodejs-service-directory/issues/8)) ([2403cad](https://www.github.com/googleapis/nodejs-service-directory/commit/2403cadc97efb9802d621b002ab4985124cef433))

## 1.0.0 (2020-03-13)


### ⚠ BREAKING CHANGES

* initial generation of library (#1)

### Features

* initial generation of library ([#1](https://www.github.com/googleapis/nodejs-service-directory/issues/1)) ([afad0b1](https://www.github.com/googleapis/nodejs-service-directory/commit/afad0b1eab03831f63271e0ad296fe10217689bb))
