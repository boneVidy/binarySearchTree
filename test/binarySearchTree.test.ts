import {BinarySearchTreeNode} from "../src";

describe('binarySearch tree test', function () {
    test('binarySearchNode test', () => {
        const bsn = new BinarySearchTreeNode(11);


        bsn.insert(8);
        bsn.insert((5));
        bsn.insert(3);

        bsn.insert(13);

        bsn.insert(15);

        const arr = Array.from([...bsn]).map(item => item.value);
        console.log(arr);
        // const it =bsn[Symbol.iterator]();
        expect(arr).toEqual([ 3, 5, 8, 11, 13, 15 ]);
        // Array.from([...bsn]).map(item => item.value)
    })
});