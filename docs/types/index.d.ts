/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import CircularBuffer = require( './../../circular-buffer' );
import CompactAdjacencyMatrix = require( './../../compact-adjacency-matrix' );
import DoublyLinkedList = require( './../../doubly-linked-list' );
import FIFO = require( './../../fifo' );
import LinkedList = require( './../../linked-list' );
import namedtypedtuple = require( './../../named-typed-tuple' );
import Stack = require( './../../stack' );

/**
* Interface describing the `dstructs` namespace.
*/
interface Namespace {
	/**
	* Circular buffer.
	*/
	CircularBuffer: typeof CircularBuffer;

	/**
	* TODO
	*
	* @example
	* // TODO
	*/
	CompactAdjacencyMatrix: typeof CompactAdjacencyMatrix;

	/**
	* List node.
	*/
	DoublyLinkedList: typeof DoublyLinkedList;

	/**
	* First-in-first-out (FIFO) queue.
	*/
	FIFO: typeof FIFO;

	/**
	* List node.
	*/
	LinkedList: typeof LinkedList;

	/**
	* Returns a named typed tuple factory.
	*
	* @param names - field (property) names
	* @param options - options
	* @param options.dtype - default data type (default: 'float64')
	* @param options.name - tuple name (default: 'tuple')
	* @throws must provide distinct field names
	* @throws cannot provide a reserved field (property) name
	* @throws must provide valid options
	* @throws must provide a recognized data type
	* @returns factory function
	*
	* @example
	* var point = ns.namedtypedtuple( [ 'x', 'y' ] );
	*
	* var p = point( [ 1.0, -1.0 ] );
	*
	* var x = p[ 0 ];
	* // returns 1.0
	*
	* x = p.x;
	* // returns 1.0
	*
	* var y = p[ 1 ];
	* // returns -1.0
	*
	* y = p.y;
	* // returns -1.0
	*/
	namedtypedtuple: typeof namedtypedtuple;

	/**
	* Stack
	*/
	Stack: typeof Stack;
}

/**
* Data structures.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
