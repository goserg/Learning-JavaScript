const {LinkedList} = require("./LinkedList")

test("testing add_first()", () => {
    let ll = new LinkedList();
    ll.add_first(10);
    expect(String(ll)).toBe("10");
    ll.add_first(1);
    expect(String(ll)).toBe("1,10");
});

test("testing get()", () =>{
    let ll = new LinkedList();
    ll.add_first(1);
    ll.add_first(2);
    expect(ll.get(0)).toBe(2);
    expect(ll.get(1)).toBe(1);
})

test("testing pop()", () =>{
    let ll = new LinkedList();
    ll.add_first(1);
    ll.add_first(2);
    expect(ll.pop(0)).toBe(2);
    expect(ll.pop(0)).toBe(1);
})

test("testing del()", () =>{
    let ll = new LinkedList();
    ll.add_first(1);
    ll.add_first(2);
    ll.del(0);
    ll.del(0);
    expect(String(ll)).toBe("");
})