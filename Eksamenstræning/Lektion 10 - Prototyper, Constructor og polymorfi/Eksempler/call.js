let o = {x: 1, m(v){ return this.x + v; }};
let t = {x: 2};
console.log(o.m(10)); // => 11
console.log(o.m.call(t, 20)); // => 22
