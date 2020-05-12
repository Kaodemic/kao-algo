import PriorityQueue from "../PriorityQueue";

describe('PriorityQueue', () => {
    it('should create default priority queue', () => {
        const priorityQueue = new PriorityQueue();
        expect(priorityQueue).toBeDefined()
    })

    it('should be possible to use object in prioty queue', () => {
        const priorityQueue = new PriorityQueue();
        const user1 = { name: "Mike" }
        const user2 = { name: "Bill" }
        const user3 = { name: "Jane" }

        priorityQueue.add(user1, 1)
        expect(priorityQueue.peek()).toBe(user1)

        priorityQueue.add(user2, 2)
        expect(priorityQueue.peek()).toBe(user1)

        priorityQueue.add(user3, 0)
        expect(priorityQueue.peek()).toBe(user3)
    })

    it('should pool from queue with respect to priorities', () => {
        const priorityQueue = new PriorityQueue();
        priorityQueue.add(10, 1);
        priorityQueue.add(5, 2);
        priorityQueue.add(100, 0);
        priorityQueue.add(200, 0);

        expect(priorityQueue.poll()).toBe(100);
        expect(priorityQueue.poll()).toBe(200);
        expect(priorityQueue.poll()).toBe(10);
        expect(priorityQueue.poll()).toBe(5);
    })

    it('should be possible to change priority head node', () => {
        const priorityQueue = new PriorityQueue();
        priorityQueue.add(10, 1);
        priorityQueue.add(5, 2);
        priorityQueue.add(100, 0);
        priorityQueue.add(200, 0);

        expect(priorityQueue.peek()).toBe(100);
        priorityQueue.changePriority(100, 10);
        priorityQueue.changePriority(10, 20);
        //100 200 10 5
        // after change Priority :  200  5 100 10
        expect(priorityQueue.poll()).toBe(200)
        expect(priorityQueue.poll()).toBe(5)
        expect(priorityQueue.poll()).toBe(100)
        expect(priorityQueue.poll()).toBe(10)
    })

    it('should be possible to change priority of internal nodes', () => {
        const priorityQueue = new PriorityQueue();

        priorityQueue.add(10, 1);
        priorityQueue.add(5, 2);
        priorityQueue.add(100, 0);
        priorityQueue.add(200, 0);

        expect(priorityQueue.peek()).toBe(100);

        priorityQueue.changePriority(200, 10);
        priorityQueue.changePriority(10, 20);

        expect(priorityQueue.poll()).toBe(100);
        expect(priorityQueue.poll()).toBe(5);
        expect(priorityQueue.poll()).toBe(200);
        expect(priorityQueue.poll()).toBe(10);
    });

    it('should be possible to change priority along with node addition', () => {
        const priorityQueue = new PriorityQueue();

        priorityQueue.add(10, 1);
        priorityQueue.add(5, 2);
        priorityQueue.add(100, 0);
        priorityQueue.add(200, 0);

        priorityQueue.changePriority(200, 10);
        priorityQueue.changePriority(10, 20);

        priorityQueue.add(15, 15);

        expect(priorityQueue.poll()).toBe(100);
        expect(priorityQueue.poll()).toBe(5);
        expect(priorityQueue.poll()).toBe(200);
        expect(priorityQueue.poll()).toBe(15);
        expect(priorityQueue.poll()).toBe(10);
    });

    it('shoud be possible to search in priority queue by value', () => {
        const priorityQueue = new PriorityQueue();

        priorityQueue.add(10, 1);
        priorityQueue.add(5, 2);
        priorityQueue.add(100, 0);
        priorityQueue.add(200, 0);
        priorityQueue.add(15, 15);

        expect(priorityQueue.hasValue(70)).toBe(false)
        expect(priorityQueue.hasValue(15)).toBe(true)
    })

});

