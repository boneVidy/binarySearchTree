import {BinarySearchTreeNode, CompareFunction} from "../src";

describe('binarySearch tree test', function () {
    test('binarySearchNode<number> test', () => {
        const bsn = new BinarySearchTreeNode(2);


        bsn.insert(8);
        bsn.insert((5));
        bsn.insert(3);

        bsn.insert(13);

        bsn.insert(15);

        const arr = Array.from([...bsn]).map(item => item.value);
        console.log(arr);
        // const it =bsn[Symbol.iterator]();
        expect(arr).toEqual([ 3, 5, 8, 13, 15 ]);
        // Array.from([...bsn]).map(item => item.value)
    });
    test('binarySearchNode<number>.getMax() and getMin()', () => {
        const bsn = new BinarySearchTreeNode(2);


        bsn.insert(8);
        bsn.insert((5));
        bsn.insert(3);

        bsn.insert(13);

        bsn.insert(15);

        expect(bsn.getMax()).toBe(15);
        expect(bsn.getMin()).toBe(2);
    });
    test('binarySearchNode<number>.find test', () => {
        const bsn = new BinarySearchTreeNode(2);


        bsn.insert(8);
        bsn.insert((5));
        bsn.insert(3);

        bsn.insert(13);

        bsn.insert(15);
        expect(bsn.find(3)).toBe(3);
        expect(bsn.find(99)).toBe(null);

    });


    test('binarySearchNode<Object>.find test', () => {
        type Person = {
            age:number
        }
        const compareFn:CompareFunction<Person> = (p1,p2) =>{
            if (p1 === p2) return 0;

            if (p1!.age === p2!.age) {
                return 0;
            }
            return p1!.age < p2!.age ?  -1 : 1;
        };
        const bsn = new BinarySearchTreeNode( {age:11},compareFn);
        bsn.insert({age:1});
        expect(bsn.find({age:3})).toBe(null);
        expect(bsn.find({age:1})).toEqual({age:1});

    });
    test('binarySearchNode<Object>.getMax() and getMin()', () => {
        type Person = {
            age:number
        }
        const compareFn:CompareFunction<Person> = (p1,p2) =>{
            if (p1 === p2) return 0;

            if (p1!.age === p2!.age) {
                return 0;
            }
            return p1!.age < p2!.age ?  -1 : 1;
        };
        const bsn = new BinarySearchTreeNode( {age:11},compareFn);


        bsn.insert({age:8});
        bsn.insert({age:5});
        bsn.insert({age:3});

        bsn.insert({age:13});

        bsn.insert({age:15});

        expect(bsn.getMin()).toEqual({age: 3});
        expect(bsn.getMax()).toEqual({age: 15});
    });
    test('binarySearchNode<Object> test', () => {
        type Person = {
            age:number
        }
        const compareFn:CompareFunction<Person> = (p1,p2) =>{
            if (p1 === p2) return 0;

            if (p1!.age === p2!.age) {
                return 0;
            }
            return p1!.age < p2!.age ?  -1 : 1;
        };
        const bsn = new BinarySearchTreeNode( {age:11},compareFn);


        bsn.insert({age:8});
        bsn.insert({age:5});
        bsn.insert({age:3});

        bsn.insert({age:13});

        bsn.insert({age:15});

        const arr = Array.from([...bsn]).map(item => item!.value!.age);
        expect(arr).toEqual([ 3, 5, 8,11, 13, 15 ]);
    })
});