var test = require("tape");
var config = require("../index");

test("returns an object", function (t) {
  t.plan(2);
  t.equal(typeof config, "object");
  t.notEqual(config, null);
});

test("sets `env.node` to `true`", function (t) {
  t.plan(3);
  t.equal(typeof config.env, "object");
  t.notEqual(config.env, null);
  t.equal(config.env.node, true);
});

test("defines `rules`", function (t) {
  t.plan(3);
  t.equal(typeof config.rules, "object");
  t.notEqual(config.rules, null);
  t.ok(Object.keys(config.rules).length > 0);
});
