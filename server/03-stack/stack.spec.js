describe('a stack', () => {
    it('canary shows the infrastructure works',() => {
        expect(true).toBe(true);
    });

    let makeStack = (capacity = 3) => {
        let elements = [];
        if (capacity  < 1) throw new Error('invalid stack capacity');
        return {
            isEmpty: () => {return elements.length === 0;},
            size: () => {return elements.length},
            push: (element) => {
                if (elements.length === 3) throw new Error('stack capacity exceeded');
               
                elements.push(element);
            },
            pop: () => {
                if (elements.length === 0) throw new Error('stack is empty');
           
                return elements.pop();
                
            }
        }
    }

    let stack = makeStack();
    beforeEach(() => {
        stack = makeStack()
    });

    it('starts empty', () => {
        expect(stack.isEmpty()).toBe(true);
    });
    it('starts with stack size 0', () => {
        expect(stack.size()).toBe(0);
    });
    it('it not empty when pushed', () => {
        stack.push();
        expect(stack.isEmpty()).toBe(false);
    });
    it('stack size 1 when pushed', () => {
        stack.push();
        expect(stack.size()).toBe(1);
    });
    it('stack is empty when pushed and popped',() => {
        stack.push();
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });
    it('stack size 0 when pushed and popped',() => {
        stack.push();
        stack.pop();
        expect(stack.size()).toBe(0);
    });
    it('overflows when pushed over capacity',() => {
        stack.push();
        stack.push();
        stack.push();

        expect(() => {
            stack.push()
        }).toThrowError('stack capacity exceeded');

    });
    it('under-flows when popped when empty',() => {
       stack.push();
       stack.pop();
       expect(() => {
           stack.pop();
       }).toThrowError('stack is empty');
    });
    it('pops the same one pushed',() => {
       stack.push('Apples');
       expect(stack.pop()).toBe('Apples');
    });
    it('pops the same two pushed', () => {
        stack.push('Apples');
        stack.push('Oranges');
        expect(stack.pop()).toBe('Oranges');
        expect(stack.pop()).toBe('Apples');
    });
    it('accepts only positive capacity', () => {
        expect(() => {
            makeStack(-1);
        }).toThrowError('invalid stack capacity')
    });
        
});
