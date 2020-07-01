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

    pop(index) {
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