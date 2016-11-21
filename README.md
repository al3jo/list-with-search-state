This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a simple example of a component that display a list of customers. A customer is an object of the following form:
```json
  {
    "id":1,
    "dateGA":"2016-04-27T03:00:00.000Z",
    "description":"Customer 1",
    "domain":"www.customer1.com",
    "host":"customer1.customers.com",
    "name":"customer1",
    "type":"Enterprise",
    "version":"5.9.15.2"
  }
```

Type can be either `Lite` or `Enterprise`. Then the list has 3 links on top: `All`, `Lite` and `Enterprise`. This is
to allow some basic filtering on what customers are displayed. The idea with this is to emulate a tab behavior.

On top of that, there's also an input of type text, in which the user can write something and that will be used to
filter the customers further. The text will be matched agains the customer `description` and the customer `version`.
Only the customers with either `description` or `version` will be displayed when some text is written in the input.

The purpose of this is to show how to manage state in components (each tab has independent search text).

# Usage
After cloning, run `npm install` and then `npm start`.
