var Node = function(val) {

    //TODO stores a value
    this.val = val;

    //TODO stores reference to the next node
    this.next = null;
};

var MyLinkedList = function() {
    //Keep a count of Nodes
    this.count = 0;

    // Keep track of the start of the List
    this.head = null;
};

MyLinkedList.prototype.get = function(index) {
if(index >= this.count || index < 0 || this.count === 0) {
    return -1;
}

let current = this.head;
    for(let i = 0; i < index-1 ; i++) {
        current = current.next;
    }

    return current.vald;
};

MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.count++;
    return;
};

MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
    if(!this.head) {
        this.head = newNode;
    }
    let current = this.head;
    while(current.next != null) {
        current = current.next;
    }
    current.next = newNode;
    this.count++;
    return;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    const newNode = new Node(val);
    if(!this.head) {
        this.head = newNode;
    }
    let current = this.head;
    for(let i = 0; i < index-1; i++) {
        current = current.next;
    }
    let temp = current.next.next;
    current.next = newNode;
    newNode.next = temp;
    this.count++;
    return;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    let current = this.head;
    for(let i = 0; i < index-1; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    this.count--;
    return;
};