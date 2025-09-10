# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-09-10)

<section class="features">

### Features

-   [`5d9761c`](https://github.com/stdlib-js/stdlib/commit/5d9761cfdea3389f82ca75aa262a9fc3ddf89439) - implement `toLocaleString` method in `dstructs/named-typed-tuple` [(#8009)](https://github.com/stdlib-js/stdlib/pull/8009)
-   [`bf26784`](https://github.com/stdlib-js/stdlib/commit/bf26784b458dee86137cc92cb269719cb6e0799e) - add `isStruct` method
-   [`cd45405`](https://github.com/stdlib-js/stdlib/commit/cd4540545270de354c76083e571c587ac3c59a6e) - add method to resolve a field type
-   [`4242b0c`](https://github.com/stdlib-js/stdlib/commit/4242b0cfa7df434d6b33ca306acfbb24d573cfa5) - add support for serializing a struct layout
-   [`13b4d50`](https://github.com/stdlib-js/stdlib/commit/13b4d50284b4f5ba44c714add98ae8d04606cb86) - add initial implementation of `dstructs/struct`
-   [`9789396`](https://github.com/stdlib-js/stdlib/commit/9789396bd5111e963f4662c57c6b4159d4166946) - update namespace TypeScript declarations [(#5364)](https://github.com/stdlib-js/stdlib/pull/5364)
-   [`b362b7b`](https://github.com/stdlib-js/stdlib/commit/b362b7b1a0ec5ac2183fc54663e51f38f6db52e5) - add `dstructs` namespace
-   [`b21584c`](https://github.com/stdlib-js/stdlib/commit/b21584cb237c4fda9d617313881ed4fa0e6307e0) - add `dstructs/stack`
-   [`54f310f`](https://github.com/stdlib-js/stdlib/commit/54f310fb122b05038de174d03acbec6d2f84a5a9) - add `dstructs/named-typed-tuple`
-   [`9cbb050`](https://github.com/stdlib-js/stdlib/commit/9cbb0501b718418e3722d5d44a7e21a72080edb7) - add `dstructs/linked-list`
-   [`9f66b7f`](https://github.com/stdlib-js/stdlib/commit/9f66b7f6d12b1897bf9692e780cc4b3e51355810) - add `dstructs/fifo`
-   [`e208fa6`](https://github.com/stdlib-js/stdlib/commit/e208fa66285056dc232f51c354215d2fe46032e9) - add `dstructs/doubly-linked-list`
-   [`e9ce766`](https://github.com/stdlib-js/stdlib/commit/e9ce76615e34f13dce149feed5f7ffeda17ca5c2) - add `dstructs/compact-adjacency-matrix`
-   [`f572c74`](https://github.com/stdlib-js/stdlib/commit/f572c746191a2d8bac1ddf173d9143bdd0e493e6) - add `dstructs/circular-buffer`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`4d872c8`](https://github.com/stdlib-js/stdlib/commit/4d872c85075efbb806cae6e16043bd6edc6ab55c) - always limit DataViews to a minimal view of struct memory
-   [`bab3575`](https://github.com/stdlib-js/stdlib/commit/bab35754c3c4269f78c0968bdd09c4e59d435f0c) - revert offset changes for scalars
-   [`7053c83`](https://github.com/stdlib-js/stdlib/commit/7053c83f7aa75b9f9682b355be6d73cf868835ba) - address `byteOffset` bugs
-   [`b8eaf74`](https://github.com/stdlib-js/stdlib/commit/b8eaf74c49f8c0c5b256de4640a10e57bfa7d790) - address missing attribute and relax brand checks

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`35b2ba1`](https://github.com/stdlib-js/stdlib/commit/35b2ba1424e7e89e9cd0f4cb5a199738a3f98747): require nested struct types be struct constructors

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#6976](https://github.com/stdlib-js/stdlib/issues/6976)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`d8ad76b`](https://github.com/stdlib-js/stdlib/commit/d8ad76b37fa2b01cd66585f6389f415f61246a63) - **test:** add tests for `toJSON` method in `dstructs/named-typed-tuple` [(#8049)](https://github.com/stdlib-js/stdlib/pull/8049) _(by Gaurav Kaushik, Athan Reines)_
-   [`a540e07`](https://github.com/stdlib-js/stdlib/commit/a540e076b9bfeacd4c7e85add92d095f1ca042bf) - **test:** add tests for `forEach` method in `dstructs/named-typed-tuple` [(#8042)](https://github.com/stdlib-js/stdlib/pull/8042) _(by Gaurav Kaushik, Athan Reines)_
-   [`f501596`](https://github.com/stdlib-js/stdlib/commit/f501596714b0f5d5d54416aefba7fff57b000760) - **test:** add tests for `toString` method in `dstructs/named-typed-tuple` [(#8041)](https://github.com/stdlib-js/stdlib/pull/8041) _(by Gaurav Kaushik, Athan Reines)_
-   [`5d9761c`](https://github.com/stdlib-js/stdlib/commit/5d9761cfdea3389f82ca75aa262a9fc3ddf89439) - **feat:** implement `toLocaleString` method in `dstructs/named-typed-tuple` [(#8009)](https://github.com/stdlib-js/stdlib/pull/8009) _(by Gaurav Kaushik, Athan Reines, stdlib-bot)_
-   [`90b8f5a`](https://github.com/stdlib-js/stdlib/commit/90b8f5a00c6a252d4f66b3d3e22ad8009efa96d6) - **test:** update test messages _(by Athan Reines)_
-   [`389cecc`](https://github.com/stdlib-js/stdlib/commit/389cecc1b8f977b3923e2f2ed13aa119c25f5bc0) - **test:** fix variable name _(by Athan Reines)_
-   [`7add020`](https://github.com/stdlib-js/stdlib/commit/7add0201c13e56a0381926ccfd4073c84eaf2ed4) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`f344466`](https://github.com/stdlib-js/stdlib/commit/f344466c6dcfb8f52d7f3148acaadd52772938da) - **test:** use .strictEqual() instead of .equal() and fix lint errors _(by Philipp Burckhardt)_
-   [`bf26784`](https://github.com/stdlib-js/stdlib/commit/bf26784b458dee86137cc92cb269719cb6e0799e) - **feat:** add `isStruct` method _(by Athan Reines)_
-   [`76ebd1b`](https://github.com/stdlib-js/stdlib/commit/76ebd1b06c85827a8166579c0a97c6bb20737e24) - **refactor:** use assert utility _(by Athan Reines)_
-   [`5aeb4ef`](https://github.com/stdlib-js/stdlib/commit/5aeb4ef105b90890e89ab138a55316c2d6546f71) - **chore:** update package meta data [(#7442)](https://github.com/stdlib-js/stdlib/pull/7442) _(by stdlib-bot)_
-   [`6d57645`](https://github.com/stdlib-js/stdlib/commit/6d576457c3f4c7ed67481aaf6161d7c1c63874eb) - **docs:** fix descriptions _(by Athan Reines)_
-   [`35b2ba1`](https://github.com/stdlib-js/stdlib/commit/35b2ba1424e7e89e9cd0f4cb5a199738a3f98747) - **refactor:** require nested struct types be struct constructors _(by Athan Reines)_
-   [`cd45405`](https://github.com/stdlib-js/stdlib/commit/cd4540545270de354c76083e571c587ac3c59a6e) - **feat:** add method to resolve a field type _(by Athan Reines)_
-   [`009da93`](https://github.com/stdlib-js/stdlib/commit/009da9301a20e2dedd243ba9b7f747fd962f105e) - **docs:** fix types _(by Athan Reines)_
-   [`4242b0c`](https://github.com/stdlib-js/stdlib/commit/4242b0cfa7df434d6b33ca306acfbb24d573cfa5) - **feat:** add support for serializing a struct layout _(by Athan Reines)_
-   [`1d86748`](https://github.com/stdlib-js/stdlib/commit/1d867483b41d6624413b5e7e2f50610158a5fe92) - **docs:** update parameter description _(by Athan Reines)_
-   [`4d872c8`](https://github.com/stdlib-js/stdlib/commit/4d872c85075efbb806cae6e16043bd6edc6ab55c) - **fix:** always limit DataViews to a minimal view of struct memory _(by Athan Reines)_
-   [`4ecf9ad`](https://github.com/stdlib-js/stdlib/commit/4ecf9ad5376fd7362fa915b9a9308b3d9cb271b8) - **refactor:** create a minimal view _(by Athan Reines)_
-   [`bab3575`](https://github.com/stdlib-js/stdlib/commit/bab35754c3c4269f78c0968bdd09c4e59d435f0c) - **fix:** revert offset changes for scalars _(by Athan Reines)_
-   [`7053c83`](https://github.com/stdlib-js/stdlib/commit/7053c83f7aa75b9f9682b355be6d73cf868835ba) - **fix:** address `byteOffset` bugs _(by Athan Reines)_
-   [`578606d`](https://github.com/stdlib-js/stdlib/commit/578606d017a4b5422da0f7e7cab73d80c97271e1) - **docs:** add note _(by Athan Reines)_
-   [`b8eaf74`](https://github.com/stdlib-js/stdlib/commit/b8eaf74c49f8c0c5b256de4640a10e57bfa7d790) - **fix:** address missing attribute and relax brand checks _(by Athan Reines)_
-   [`f4a90b1`](https://github.com/stdlib-js/stdlib/commit/f4a90b18816acbb01c3c5afd7fba965c8a617ec1) - **chore:** add test and benchmark stubs _(by Athan Reines)_
-   [`24a79a0`](https://github.com/stdlib-js/stdlib/commit/24a79a0b97e2191aa52abe3fe336505472060d35) - **docs:** add note _(by Athan Reines)_
-   [`195071c`](https://github.com/stdlib-js/stdlib/commit/195071c47d1088fc1b024023c9b9b693fc6282cb) - **style:** disable lint rule _(by Athan Reines)_
-   [`13b4d50`](https://github.com/stdlib-js/stdlib/commit/13b4d50284b4f5ba44c714add98ae8d04606cb86) - **feat:** add initial implementation of `dstructs/struct` _(by Athan Reines)_
-   [`3755dd5`](https://github.com/stdlib-js/stdlib/commit/3755dd57eaedf6fae43a5fabc0be8a887fd30a12) - **docs:** update related packages sections [(#6418)](https://github.com/stdlib-js/stdlib/pull/6418) _(by stdlib-bot)_
-   [`3ee65c8`](https://github.com/stdlib-js/stdlib/commit/3ee65c87a762ab26fe1b97487f799f5a740afe17) - **docs:** update related packages sections [(#5936)](https://github.com/stdlib-js/stdlib/pull/5936) _(by stdlib-bot)_
-   [`5ff74c4`](https://github.com/stdlib-js/stdlib/commit/5ff74c49798543b846d66f6b7eb7e64b5b3d7aa6) - **docs:** update related packages sections [(#5529)](https://github.com/stdlib-js/stdlib/pull/5529) _(by stdlib-bot)_
-   [`3ec92ae`](https://github.com/stdlib-js/stdlib/commit/3ec92aeaefd8a73587ab8a9e153e654da87c553f) - **docs:** update related packages sections [(#5401)](https://github.com/stdlib-js/stdlib/pull/5401) _(by stdlib-bot)_
-   [`f2f05d9`](https://github.com/stdlib-js/stdlib/commit/f2f05d91b9e5960b7c69a7d157a50ede9b381335) - **docs:** update related packages sections [(#5384)](https://github.com/stdlib-js/stdlib/pull/5384) _(by stdlib-bot)_
-   [`3772f8f`](https://github.com/stdlib-js/stdlib/commit/3772f8f53a07408b72cf4ec3e8334758f9aded0d) - **docs:** update namespace table of contents [(#5366)](https://github.com/stdlib-js/stdlib/pull/5366) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9789396`](https://github.com/stdlib-js/stdlib/commit/9789396bd5111e963f4662c57c6b4159d4166946) - **feat:** update namespace TypeScript declarations [(#5364)](https://github.com/stdlib-js/stdlib/pull/5364) _(by stdlib-bot)_
-   [`b362b7b`](https://github.com/stdlib-js/stdlib/commit/b362b7b1a0ec5ac2183fc54663e51f38f6db52e5) - **feat:** add `dstructs` namespace _(by Athan Reines)_
-   [`b21584c`](https://github.com/stdlib-js/stdlib/commit/b21584cb237c4fda9d617313881ed4fa0e6307e0) - **feat:** add `dstructs/stack` _(by Athan Reines)_
-   [`54f310f`](https://github.com/stdlib-js/stdlib/commit/54f310fb122b05038de174d03acbec6d2f84a5a9) - **feat:** add `dstructs/named-typed-tuple` _(by Athan Reines)_
-   [`9cbb050`](https://github.com/stdlib-js/stdlib/commit/9cbb0501b718418e3722d5d44a7e21a72080edb7) - **feat:** add `dstructs/linked-list` _(by Athan Reines)_
-   [`9f66b7f`](https://github.com/stdlib-js/stdlib/commit/9f66b7f6d12b1897bf9692e780cc4b3e51355810) - **feat:** add `dstructs/fifo` _(by Athan Reines)_
-   [`e208fa6`](https://github.com/stdlib-js/stdlib/commit/e208fa66285056dc232f51c354215d2fe46032e9) - **feat:** add `dstructs/doubly-linked-list` _(by Athan Reines)_
-   [`e9ce766`](https://github.com/stdlib-js/stdlib/commit/e9ce76615e34f13dce149feed5f7ffeda17ca5c2) - **feat:** add `dstructs/compact-adjacency-matrix` _(by Athan Reines)_
-   [`f572c74`](https://github.com/stdlib-js/stdlib/commit/f572c746191a2d8bac1ddf173d9143bdd0e493e6) - **feat:** add `dstructs/circular-buffer` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gaurav Kaushik
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

