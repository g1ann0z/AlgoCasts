// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = (next !== undefined) ? next : null;
    } //altrimenti this.next = next; ma (next = null) nell'argomento
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);

    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        if (!this.head) {
            return null;
        } else {
            while(node.next){
                node = node.next;
            }
            return node;
        }
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        let node = this.head;
        this.head = node.next;
    }

    removeLast(){

        if(!this.head){
            return;
        } else if (!this.head.next){
            this.head = null;
            return;
        }

        let previus = this.head;
        let node = this.head.next;
        while(node.next){
            previus = previus.next;
            node = node.next;
        }
        previus.next = null;
    }
    
    insertLast(data){
        const currentLast = this.getLast();

        if(currentLast){
            currentLast.next = new Node(data);
        } else {
            this.insertFirst(data);
        }
    }

}


module.exports = { Node, LinkedList };
