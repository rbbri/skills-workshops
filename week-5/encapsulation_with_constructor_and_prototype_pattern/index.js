
// How does the printed output of the program change if you rename
// countmodel to countmodel (everywhere it appears)? The same! function naming is camelcase by convention



  // How does the printed output of the program change if you rename
  // `set` to `_set` (and change `countModel.set(5)` below to
  // `countModel._set(5)`)? The same - private method called

  // How does the printed output of the program change if you
  // uncomment the line below? Why does this happen? countModel.set is not a function, its is hardcoded to return nothgin

  // return {};


  // How does the printed output of the program change if you add this
  // code? Why? count is 0. countModel.set has not been logged

  function CountModel() {
    this._count = 0;
  };

  CountModel.prototype.count = function() {
    return this._count;
  };

  CountModel.prototype.set = function(count) {
    this._count = count;
  };

  var countModel = new CountModel();
  countModel.set(5);
  console.log("count is", countModel.count());

  // Bonus research project. Can you find the property name below that
  // makes the statement print out `true`?
  console.log(countModel["__proto__"] === CountModel.prototype);
