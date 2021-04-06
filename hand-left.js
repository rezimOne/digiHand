class LeftHand{
    constructor(){
        const hand1 = document.createElement('object');
        hand1.id = "handL";
        hand1.className = 'fingers';
        hand1.type = 'image/svg+xml';
        hand1.data = './handParts/handL.svg';

        const wrist1 = document.createElement('object');
        wrist1.id = 'wristLh';
        wrist1.className = 'fingers';
        wrist1.type = 'image/svg+xml';
        wrist1.data = './handParts/wristLh.svg';

        const finger1 = document.createElement('object');
        finger1.id = 'thumbLh';
        finger1.className = 'fingers';
        finger1.type = 'image/svg+xml';
        finger1.data = './handParts/thumbLh.svg';

        const finger2 = document.createElement('object');
        finger2.id = 'indexLh';
        finger2.className = 'fingers';
        finger2.type = 'image/svg+xml';
        finger2.data = './handParts/indexLh.svg';

        const finger3 = document.createElement('object');
        finger3.id = 'middleLh';
        finger3.className = 'fingers';
        finger3.type = 'image/svg+xml';
        finger3.data = './handParts/middleLh.svg';

        const finger4 = document.createElement('object');
        finger4.id = 'ringLh';
        finger4.className = 'fingers';
        finger4.type = 'image/svg+xml';
        finger4.data = './handParts/ringLh.svg';

        const finger5 = document.createElement('object');
        finger5.id = 'littleLh';
        finger5.className = 'fingers';
        finger5.type = 'image/svg+xml';
        finger5.data = './handParts/littleLh.svg';

        document.body.append(finger1);
        document.body.append(finger2);
        document.body.append(finger3);
        document.body.append(finger4);
        document.body.append(finger5);
        document.body.append(hand1);
        document.body.append(wrist1);

    }
}
const myLeftHand = new LeftHand();

class LeftHandMethods{
    constructor(){

    }
}



