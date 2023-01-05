class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert First Node
        //prepend(value)
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }


    //Insert Last Node
        //append(value)
    insertLast(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
        }
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            
            current.next = node;

         
        }   

    this.size++;
    }

    //Insert at Index 
    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }


    //Get at Index
        //at(index)
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }

    //Remove at Index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            console.log('Not within the range of the index')
            return;
            
        }

        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) {
            this.head = current.next;
        } 
        else {
           while (count < index) {
                count++;
                previous = current;
                current = current.next; 
           }

           previous.next = current.next;
        }

        this.size--;

    }

    //Returns the size of the Index
    sizeTotal() {
        console.log(this.size);
    }

    //Returns the First Node in the List
    headData(data) {
        console.log(this.head.data);
    }
    
    tailData(data) {
        let current = this.head;
        let count = 0;

        while (count < this.size) {
            current = current.next; 
            count++;
            if (count == (this.size - 1)) {
                console.log(current.data);
            }
        }
        console.log(count)
    }

    removeTail() {
        let current = this.head;
        let previous;
        let count = 0;

        while (count < this.size -1) {
            count++;
            previous = current;
            current = current.next;
            if (count == (this.size - 1)) {
                previous.next = current.next;
            }
        } 
        this.size--;

    };

    containsValue(value) {
        let count = 0; 
        let current = this.head;
        let previous;

        if (value == this.head.data) {
            console.log('true');
        } else {
            while (count < this.size -1) {
                count++;
                previous = current;
                current = current.next; 
                if (value == current.data) {
                    console.log('true');
                    return;
                }
            }
            previous.next = current.next;
        }
        
    }

    findValue(value) {
        let count = 0; 
        let current = this.head;
        let previous;

        if (value == this.head.data) {
            console.log(count);
        } else {
            while (count < this.size -1) {
                count++;
                previous = current;
                current = current.next; 
                if (value == current.data) {
                    console.log(count);
                    return;
                }
            }
            previous.next = current.next;
            return null;
        }
        
    }

    //Clear List
    clearList() {
        this.head = null;
        this.size = 0;
    }

    //Print List Data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;

        }
    };
    
    
    //Return the List as a String
    toString() {
        if (!this.head) return null;
    let pointer = this.head;
    let result = "";
    while (pointer.next !== null) {
      result = result.concat(`( ${pointer.data} ) --> `);
      pointer = pointer.next;
    }
    // for the tail
    result = result.concat(`( ${pointer.data} ) --> null`);
    console.log(result);
    return result;
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 4)


ll.printListData();
console.log('/////////////////////')

//ll.sizeTotal();

//ll.headData();

//ll.tailData();

//ll.removeTail();

//ll.containsValue(200);

//ll.findValue(400);

ll.toString();

console.log('/////////////////////')

// ll.printListData();



//ll.clearList();
//ll.removeAt(1)
//ll.getAt(4);