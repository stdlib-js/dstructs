/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

/*
* The following modules are intentionally not exported: tools
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name CircularBuffer
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/dstructs/circular-buffer}
*/
setReadOnly( ns, 'CircularBuffer', require( './../circular-buffer' ) );

/**
* @name CompactAdjacencyMatrix
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/dstructs/compact-adjacency-matrix}
*/
setReadOnly( ns, 'CompactAdjacencyMatrix', require( './../compact-adjacency-matrix' ) );

/**
* @name DoublyLinkedList
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/dstructs/doubly-linked-list}
*/
setReadOnly( ns, 'DoublyLinkedList', require( './../doubly-linked-list' ) );

/**
* @name FIFO
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/dstructs/fifo}
*/
setReadOnly( ns, 'FIFO', require( './../fifo' ) );

/**
* @name LinkedList
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/dstructs/linked-list}
*/
setReadOnly( ns, 'LinkedList', require( './../linked-list' ) );

/**
* @name namedtypedtuple
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/dstructs/named-typed-tuple}
*/
setReadOnly( ns, 'namedtypedtuple', require( './../named-typed-tuple' ) );

/**
* @name Stack
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/dstructs/stack}
*/
setReadOnly( ns, 'Stack', require( './../stack' ) );


// EXPORTS //

module.exports = ns;
