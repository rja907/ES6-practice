const profile = {
  name: 'Alex',
  getName: function() {
    return this.name;
  }
};

/*Because arrow functions do not bind their own 'this',
 'this' will still be pointing at the default object,
 which is the window. So window.name will return 'undefined'.
 */
