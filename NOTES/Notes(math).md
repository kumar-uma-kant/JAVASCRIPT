## `Object.GetOwnPropertyDescriptor()`

The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain).

## Syntax: Object.getOwnPropertyDescriptor(object, property)

## Parameters: object,Property 👇

obj: The object in which to look for the property.

prop: The name or Symbol of the property whose description is to be retrieved.

## Note: A property descriptor is a record with some of the following attributes:

1.value:
The value associated with the property (data descriptors only).

2.writable:
true if and only if the value associated with the property may be changed (data descriptors only).

3.get:
A function which serves as a getter for the property, or undefined if there is no getter (accessor descriptors only).

4.set:
A function which serves as a setter for the property, or undefined if there is no setter (accessor descriptors only).

5.configurable:
true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.

6.`enumerable`:
true if and only if this property shows up during enumeration of the properties on the corresponding object

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## Object.defineProperty()

The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

## Syntax: Object.defineProperty(obj, prop, descriptor)

## Parameters: object,Property,descriptor 👇

obj: The object on which to define the property.

prop: A string or Symbol specifying the key of the property to be defined or modified.

descriptor: The descriptor for the property being defined or modified.

`notes making`
Basic Markdown Formatting
Markdown provides a set of simple formatting options:

Headings: #, ##, ###, etc.
Bold: **bold text**
Italic: _italic text_
Strikethrough: ~~strikethrough~~
Lists: - item or 1. item
Code blocks: `inline code` and for block code
Blockquotes: > quote
Links: [link text](url)
Images: ![alt text](url)............................................................
