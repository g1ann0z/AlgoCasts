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

    getAt(index){

        if(!this.head){
            return null;
        }
        let node = this.head;
        let position = 0;
        while(node){
            if(position === index){
                return node;
            } else {
                position++;
                node = node.next;
            }

        }
        if (position > this.size()){
            return null;
        }
        

    }

    removeAt(index){
        if (!this.head){
            return;
        }

        if (index === 0){
            this.head = this.head.next;
            return;
        }

        const previus = this.getAt(index - 1);

        if(!previus || !previus.next){
          return;  
        }
        previus.next = previus.next.next;
    }

    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }

        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }

        const previusNode = this.getAt(index - 1) || this.getLast();
        const nextNode = this.getAt(index);

        if(!nextNode){
            previusNode.next = new Node(data);
            return;
        }
        previusNode.next = new Node(data, nextNode);
    }

}


module.exports = { Node, LinkedList };
