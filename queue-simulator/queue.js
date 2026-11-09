
class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the rear
    enqueue(element) {
        this.items.push(element);
        return element;
    }

    // Remove the front element
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.shift();
    }

    // Check the front element
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get queue size
    size() {
        return this.items.length;
    }

    // Clear queue
    clear() {
        this.items = [];
    }
}

const queue = new Queue();

// Display queue
function displayQueue() {
    $("#queue").empty();

    queue.items.forEach(function(item, index) {
        let block = $("<div>")
            .addClass("queue-item")
            .text(item);

        if (index === 0) {
            block.addClass("front-item");
        }

        $("#queue").append(block);
    });

    if (queue.isEmpty()) {
        $("#frontLabel, #rearLabel").hide();
    } else {
        $("#frontLabel, #rearLabel").show();
    }
}

// Display messages
function showMessage(message) {
    $("#message").text(message);
}

$(document).ready(function() {

    // ENQUEUE
    $("#enqueueBtn").click(function() {
        let value = $("#queueInput").val().trim();

        if (value === "") {
            showMessage("Please enter a value first.");
            return;
        }

        queue.enqueue(value);

        $("#queueInput").val("");
        $("#deleted").empty();

        displayQueue();

        showMessage(value + " added to the rear of the queue.");
    });

    // DEQUEUE
    $("#dequeueBtn").click(function() {
        if (queue.isEmpty()) {
            showMessage("Queue is empty. Nothing to remove.");
            return;
        }

        let deletedItem = queue.dequeue();

        $("#deleted").empty().append(
            $("<div>")
                .addClass("deleted-item")
                .text(deletedItem)
        );

        displayQueue();

        showMessage(deletedItem + " removed from the front of the queue.");
    });

    // PEEK
    $("#peekBtn").click(function() {
        if (queue.isEmpty()) {
            showMessage("Queue is empty. Nothing to peek.");
            return;
        }

        displayQueue();

        showMessage("Front element is " + queue.peek());
    });

    // CLEAR
    $("#clearBtn").click(function() {
        queue.clear();

        $("#deleted").empty();
        $("#queueInput").val("");

        displayQueue();

        showMessage("Queue cleared successfully.");
    });

    displayQueue();
});
