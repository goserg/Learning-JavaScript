class _Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new _Node();
    }

    add_first(value) {
        let newNode = new _Node(value);
        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    toString() {
        let values = [];
        let currentNode = this.head.next;
        while (currentNode != null) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return String(values);
    }


}
