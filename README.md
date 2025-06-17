<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dstructs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Data structures.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/dstructs@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { CircularBuffer, CompactAdjacencyMatrix, DoublyLinkedList, FIFO, LinkedList, Stack, namedtypedtuple } from 'https://cdn.jsdelivr.net/gh/stdlib-js/dstructs@deno/mod.js';
```

#### ns

Data structures.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`CircularBuffer( buffer )`][@stdlib/dstructs/circular-buffer]</span><span class="delimiter">: </span><span class="description">circular buffer constructor.</span>
-   <span class="signature">[`CompactAdjacencyMatrix( N )`][@stdlib/dstructs/compact-adjacency-matrix]</span><span class="delimiter">: </span><span class="description">compact adjacency matrix constructor.</span>
-   <span class="signature">[`DoublyLinkedList()`][@stdlib/dstructs/doubly-linked-list]</span><span class="delimiter">: </span><span class="description">doubly linked list constructor.</span>
-   <span class="signature">[`FIFO()`][@stdlib/dstructs/fifo]</span><span class="delimiter">: </span><span class="description">first-in-first-out (FIFO) queue.</span>
-   <span class="signature">[`LinkedList()`][@stdlib/dstructs/linked-list]</span><span class="delimiter">: </span><span class="description">singly linked list.</span>
-   <span class="signature">[`namedtypedtuple( fields[, options] )`][@stdlib/dstructs/named-typed-tuple]</span><span class="delimiter">: </span><span class="description">create a factory for generating named typed tuples.</span>
-   <span class="signature">[`Stack()`][@stdlib/dstructs/stack]</span><span class="delimiter">: </span><span class="description">stack data structure.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@deno/mod.js';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/dstructs@deno/mod.js';

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/dstructs.svg
[npm-url]: https://npmjs.org/package/@stdlib/dstructs

[test-image]: https://github.com/stdlib-js/dstructs/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/dstructs/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/dstructs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/dstructs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/dstructs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/dstructs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/dstructs/tree/deno
[deno-readme]: https://github.com/stdlib-js/dstructs/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/dstructs/tree/umd
[umd-readme]: https://github.com/stdlib-js/dstructs/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/dstructs/tree/esm
[esm-readme]: https://github.com/stdlib-js/dstructs/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/dstructs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/dstructs/main/LICENSE

<!-- <toc-links> -->

[@stdlib/dstructs/circular-buffer]: https://github.com/stdlib-js/dstructs/tree/main/circular-buffer

[@stdlib/dstructs/compact-adjacency-matrix]: https://github.com/stdlib-js/dstructs/tree/main/compact-adjacency-matrix

[@stdlib/dstructs/doubly-linked-list]: https://github.com/stdlib-js/dstructs/tree/main/doubly-linked-list

[@stdlib/dstructs/fifo]: https://github.com/stdlib-js/dstructs/tree/main/fifo

[@stdlib/dstructs/linked-list]: https://github.com/stdlib-js/dstructs/tree/main/linked-list

[@stdlib/dstructs/named-typed-tuple]: https://github.com/stdlib-js/dstructs/tree/main/named-typed-tuple

[@stdlib/dstructs/stack]: https://github.com/stdlib-js/dstructs/tree/main/stack

<!-- </toc-links> -->

</section>

<!-- /.links -->
