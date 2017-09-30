QUnit.test('html (set,get)', function (assert) {
    assert.strictEqual($('#target').html('hello world'),undefined);
    assert.strictEqual($('#target').html(),'hello world');
});
