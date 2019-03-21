import {BinarySearchTreeNode, CompareFunction} from "../src";

describe('binarySearch tree test', function () {
    it('binarySearchNode<number> test', () => {
        const bsn = new BinarySearchTreeNode(2);
        bsn.insert(8);
        bsn.insert((5));
        bsn.insert(3);

        bsn.insert(13);

        bsn.insert(15);

        const arr = Array.from([...bsn]).map(item => item.value);
        expect(arr).toEqual([2, 3, 5, 8, 13, 15]);
    });
    it('binarySearchNode<number>.getMax() and getMin()', () => {
        const bsn = new BinarySearchTreeNode(2);


        bsn.insert(8);
        bsn.insert((5));
        bsn.insert(3);

        bsn.insert(13);

        bsn.insert(15);

        expect(bsn.getMaxValue()).toBe(15);
        expect(bsn.getMinValue()).toBe(2);
    });
    it('binarySearchNode<number>.rermoveByNode()', () => {
        const bsn = new BinarySearchTreeNode(2);


        bsn.insert(8);
        bsn.insert((5));
        bsn.insert(3);

        bsn.insert(13);

        bsn.insert(15);

        expect(bsn.removeByValue(5)).toBe(true);

        const arr = Array.from([...bsn]).map(item => item.value);
        expect(arr).toEqual([2,3,8,13,15]);
        expect(bsn.removeByNode(new BinarySearchTreeNode(8))).toBe(true);
        expect(bsn.removeByNode(new BinarySearchTreeNode(5))).toBe(false);
        bsn.insert(1);
        expect(bsn.removeByNode(new BinarySearchTreeNode(1))).toBe(true);
    });
    it('binarySearchNode<number>.removeByValue()', () => {
        const bsn = new BinarySearchTreeNode(10);


        bsn.insert(6);
        bsn.insert((18));
        bsn.insert(14);

        bsn.insert(33);

        bsn.insert(12);
        bsn.insert(15);
        bsn.insert(13);

        bsn.removeByValue(12);
        console.log([...bsn].map(item => item.value));
        const node = bsn.findNode(13);

        expect(node!.getParent()!.value).toBe(14);
    });
    it('binarySearchNode<number>.find test', () => {
        const bsn = new BinarySearchTreeNode(2);


        bsn.insert(8);
        bsn.insert((5));
        bsn.insert(3);

        bsn.insert(13);

        bsn.insert(15);
        expect(bsn.find(3)).toBe(3);
        expect(bsn.find(99)).toBe(null);

    });


    it('binarySearchNode<Object>.find test', () => {
        type Person = {
            age: number
        }
        const compareFn: CompareFunction<Person> = (p1, p2) => {
            if (p1 === p2) return 0;

            if (p1!.age === p2!.age) {
                return 0;
            }
            return p1!.age < p2!.age ? -1 : 1;
        };
        const bsn = new BinarySearchTreeNode({age: 11}, compareFn);
        bsn.insert({age: 1});
        expect(bsn.find({age: 3})).toBe(null);
        expect(bsn.find({age: 1})).toEqual({age: 1});

    });
    it('binarySearchNode<Object>.getMax() and getMin()', () => {
        type Person = {
            age: number
        }
        const compareFn: CompareFunction<Person> = (p1, p2) => {
            if (p1 === p2) return 0;

            if (p1!.age === p2!.age) {
                return 0;
            }
            return p1!.age < p2!.age ? -1 : 1;
        };
        const bsn = new BinarySearchTreeNode({age: 11}, compareFn);


        bsn.insert({age: 8});
        bsn.insert({age: 5});
        bsn.insert({age: 3});

        bsn.insert({age: 13});

        bsn.insert({age: 15});

        expect(bsn.getMinValue()).toEqual({age: 3});
        expect(bsn.getMaxValue()).toEqual({age: 15});
    });
    it('binarySearchNode<Object> test', () => {
        type Person = {
            age: number
        }
        const compareFn: CompareFunction<Person> = (p1, p2) => {
            if (p1 === p2) return 0;

            if (p1!.age === p2!.age) {
                return 0;
            }
            return p1!.age < p2!.age ? -1 : 1;
        };
        const bsn = new BinarySearchTreeNode({age: 11}, compareFn);


        bsn.insert({age: 8});
        bsn.insert({age: 5});
        bsn.insert({age: 3});

        bsn.insert({age: 13});

        bsn.insert({age: 15});

        const arr = Array.from([...bsn]).map(item => item!.value!.age);
        expect(arr).toEqual([3, 5, 8, 11, 13, 15]);
    })
});