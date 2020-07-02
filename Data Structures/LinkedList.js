class _Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new _Node();
        this.size = 0;
    }

    static fromArray(array) {
        let ll = new LinkedList();
        for (let i of array.reverse()) {
            ll.add_first(i);
        }
        return ll;
    }

    insert(index, value) {
        if (index < 0 || index > this.size) {
            throw Error("index is out of bounds");
        }
        let newNode = new _Node(value);
        let currentNode = this.head;
        let counter = 0;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
    }

    append(value) {
        this.insert(this.size, value);
    }

    add_first(value) {
        let newNode = new _Node(value);
        newNode.next = this.head.next;
        this.head.next = newNode;
        this.size++;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw Error("index is out of bounds");
        }
        let currentNode = this.head.next;
        let currentIndex = 0;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode.value;
    }

    pop(index = this.size - 1) {
        if (index < 0 || index >= this.size) {
            throw Error("index is out of bounds");
        }
        let currentNode = this.head.next;
        let lastNode = this.head;
        let currentIndex = 0;
        while (currentIndex !== index) {
            lastNode = currentNode;
            currentNode = currentNode.next;
            currentIndex++;
        }
        lastNode.next = currentNode.next;
        this.size--;
        return currentNode.value;
    }

    del(index) {
        this.pop(index)
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

module.exports = {LinkedList}