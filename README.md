# simple-mongoose-mock

A simplified mongoose mock.
## Usage Example

#### User.js
```JavaScript
var { Schema } = require('mongoose');

var User = new Schema({});


module.exports = mongoose.model('User', User);
```
#### User.spec.js
```JavaScript
const User = require('User');
const sinon = require('sinon');
const mongooseMockModel = require('simple-mongoose-mock');

const proxyquire = require('proxyquire');

const userExecStub = sinon.stub();
const userStubedModel = mongooseMockModel('User', { exec: userExecStub });

userExecStub.returns({ name: 'bob', age: 4});

expect(userStubedModel
       .find()
       .exec()).to.equal({ name: 'bob', age: 4});
```

As you may notice, in this example we are stubbing 'exec' with a sinon stub.
This way the mongoose chain will return the value we pass to 'userExecStub.returns'.
