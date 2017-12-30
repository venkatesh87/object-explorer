export default {
  state: {
    selectedMethod: '',
    createObj: [
      {
        name: 'create',
        shortDesc: 'create a new array',
        desc:
          'Creates a new object with the specified prototype object and properties.',
        example: `const obj2 = Object.create(obj);<br>
        console.log(obj2);`,
        output: `Object {<br>
        <span>&nbsp;&nbsp;</span>a: 1,<br>
        <span>&nbsp;&nbsp;</span>b: 2,<br>
        <span>&nbsp;&nbsp;</span>c: 3<br>
        }`
      },
      {
        name: 'assign',
        shortDesc: 'make a copy of an array',
        desc:
          'Copies the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.',
        example: `const copy = Object.assign({}, obj)<br>
        console.log(copy)`,
        output: `Object {<br>
        <span>&nbsp;&nbsp;</span>a: 1,<br>
        <span>&nbsp;&nbsp;</span>b: 2,<br>
        <span>&nbsp;&nbsp;</span>c: 3<br>
        }`
      }
    ],
    createProp: [
      {
        name: 'defineProperty',
        shortDesc: 'a new property or modify an existing one',
        desc:
          'Adds the named property described by a given descriptor to an object.',
        example: `Object.defineProperty(obj, 'd', {<br>
        <span>&nbsp;&nbsp;</span>enumerable: true,<br>
        <span>&nbsp;&nbsp;</span>configurable: true,<br>
        <span>&nbsp;&nbsp;</span>writable: true,<br>
        <span>&nbsp;&nbsp;</span>value: 4<br>
        })<br>
        <br>
        console.log(obj.d)`,
        output: `4`
      },
      {
        name: 'defineProperties',
        shortDesc: 'one or more properties or modify existing properties',
        desc:
          'Adds the named property described by a given descriptor to an object.',
        example: `Object.defineProperties(obj, {<br>
        <span>&nbsp;&nbsp;</span>d: {<br>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>
        <span>&nbsp;&nbsp;</span>},<br>
        <span>&nbsp;&nbsp;</span>e: {<br>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>
        <span>&nbsp;&nbsp;</span>}<br>
        })<br>
        console.log(obj)`,
        output: `{a: 1, b: 2, c: 3, d: 4, e: 5}`
      }
    ],
    infoObj: [
      {
        name: 'isExtensible',
        shortDesc: 'if more properties can be added',
        desc: 'Determines if extending of an object is allowed.',
        example: `console.log(Object.isExtensible(obj))`,
        output: `true`
        // example2: `Object.freeze(obj)<br>
        // console.log(Object.isExtensible(obj))`,
        // output2: `false`
      },
      {
        name: 'is',
        shortDesc: 'if two objects are exactly the same',
        desc:
          'Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).',
        example: `let obj2 = {<br>
        <span>&nbsp;&nbsp;</span>a: 1,<br>
        <span>&nbsp;&nbsp;</span>b: 2,<br>
        <span>&nbsp;&nbsp;</span>c: 3<br>
        };<br>
        <br>
        console.log(Object.is(obj, obj2));<br>
        console.log(Object.is(obj, obj));`,
        output: `false<br>
        true`
      },
      {
        name: 'isFrozen',
        shortDesc: `if an object and it's properties can't be modified`,
        desc: 'Determines if an object is frozen.',
        example: `console.log(Object.isFrozen(obj));`,
        output: `false`,
        example2: `Object.freeze(obj);<br>
        console.log(Object.isFrozen(obj));`,
        output2: `true`
      },
      {
        name: 'isSealed',
        shortDesc: `if an object can't be modified (its properties can be, though)`,
        desc: 'Determines if an object is sealed.',
        example: `Object.defineProperty(obj, 'a', {<br>
        <span>&nbsp;&nbsp;</span>configurable: false<br>
        })<br>
        <br>
        console.log(Object.isSealed(obj));<br>
        console.log(Object.isSealed(obj.a));`,
        output: `false<br>
        true`
      },
      {
        name: 'isPrototypeOf',
        shortDesc: `if an object //more`,
        desc:
          'Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.',
        example: `function Bar() {};<br>
        function Baz() {};<br>
        <br>
        Baz.prototype = Object.create(Bar);<br>
        var baz = new Baz();<br>
        <br>
        console.log(Baz.prototype.isPrototypeOf(baz));`,
        output: `true`,
        newExample: true
      }
    ],
    noChange: [
      {
        name: 'seal',
        shortDesc: `make sure properties can't be added or deleted`,
        desc:
          'Prevents other code from deleting properties of an object. Existing properties can still be modified.',
        example: `delete obj.c;<br>
        console.log(obj);`,
        output: `Object {<br>
        <span>&nbsp;&nbsp;</span>a: 1,<br>
        <span>&nbsp;&nbsp;</span>b: 2<br>
        }`,
        example2: `Object.seal(obj);<br>
        delete obj.b;<br>
        console.log(obj);`,
        output2: `Object {
        <span>&nbsp;&nbsp;</span>a: 1,
        <span>&nbsp;&nbsp;</span>b: 2
        }`
      },
      {
        name: 'freeze',
        shortDesc: `make sure properties can't be added, deleted, or modified`,
        desc: `Freezes an object: other code can't delete or change any properties.`,
        example: `Object.freeze(obj);<br>
        obj.a = 10;<br>
        <br>
        console.log(obj.a);`,
        output: `1 <span class="comment">//the value didn't update to 10</span>`
      },
      {
        name: 'preventExtensions',
        shortDesc: `make sure properties can't be added.`,
        desc: `Prevents any extensions of an object. I can still delete properties but can't add any new ones.`,
        example: `Object.preventExtensions(obj);<br>
        obj.d = 4;<br>
        <br>
        console.log(obj.d);`,
        output: `undefined`
      }
    ],
    createString: [
      {
        name: 'toString',
        shortDesc: `string representation of the object.`,
        desc: `The <code>toString()</code> method returns a string representing the object.`,
        example: `console.log(obj.toString());<br>
        console.log(obj.a.toString());`,
        output: `"[object Object]"<br>
        "1"`
      },
      {
        name: 'toLocaleString',
        shortDesc: `localized string representation of the object.`,
        desc: `The <code>toLocaleString()</code> method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes. In human terms: this means if you have something that has differnt data based on location, such as date methods, it will give you a different time format`,
        example: `obj.d = new Date();<br>
        <br>
        console.log(obj.d);<br>
        console.log(obj.d.toLocaleString());`,
        output: `Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>
        12/29/2017, 8:57:35 PM`
      }
    ]
    // infoProp: [
    //   {
    //     name: 'propertyIsEnumerable',
    //     shortDesc: `determine if a property can be traversed with a for...in loop`,
    //     desc:
    //       'Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.',
    //     example: `function Bar() {};<br>
    //     function Baz() {};<br>
    //     <br>
    //     Baz.prototype = Object.create(Bar);<br>
    //     var baz = new Baz();<br>
    //     <br>
    //     console.log(Baz.prototype.isPrototypeOf(baz));`,
    //     output: `true`,
    //     newExample: true
    //   }
    // ]
  }
}