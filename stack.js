
class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to the top
    push(element) {
        this.items[this.count] = element;
        this.count++;
        return element;
    }

    // Remove the top element
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        let deletedItem = this.items[this.count];
        this.items.length = this.count;

        return deletedItem;
    }

    // Check the top element
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    // Check if empty
    isEmpty() {
        return this.count === 0;
    }

    // Get stack size
    size() {
        return this.count;
    }

    // Clear stack
    clear() {
        this.items = [];
        this.count = 0;
    }
}

const stack = new Stack();

// Display the stack
function displayStack() {
    $("#stack").empty();

    for (let i = stack.count - 1; i >= 0; i--) {
        let block = $("<div>")
            .addClass("row push")
            .text(stack.items[i]);

        if (i === stack.count - 1) {
            block.addClass("top-item");
        }

        $("#stack").append(block);
    }
}

// Show messages
function showMessage(message) {
    $("#message").text(message);
}

$(document).ready(function() {

    // Push operation
    $("#pushBtn").click(function() {
        let value = $("#stackInput").val().trim();

        if (value === "") {
            showMessage("Please enter a value first.");
            return;
        }

        stack.push(value);
        $("#stackInput").val("");
        $("#deleted").empty();

        displayStack();
        showMessage(value + " added to the top of the stack.");
    });

    // Pop operation
    $("#popBtn").click(function() {
        if (stack.isEmpty()) {
            showMessage("Stack is empty. Nothing to remove.");
            return;
        }

        let deletedItem = stack.pop();

        $("#deleted").empty().append(
            $("<div>").addClass("row pop")
                .text(deletedItem)
        );

        displayStack();
        showMessage(deletedItem + " removed from the stack.");
    });

    // Peek operation
    $("#peekBtn").click(function() {
        if (stack.isEmpty()) {
            showMessage("Stack is empty. Nothing to peek.");
            return;
        }

        displayStack();
        showMessage("Top element is " + stack.peek());
    });

    // Clear operation
    $("#clearBtn").click(function() {
        stack.clear();
        $("#deleted").empty();
        $("#stackInput").val("");

        displayStack();
        showMessage("Stack cleared successfully.");
    });

});
            
