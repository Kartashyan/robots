function looper(initialState) {
    let sideMap = new Map();

    sideMap.set(1, "N");
    sideMap.set(2, "E");
    sideMap.set(3, "S");
    sideMap.set(4, "W");
    sideMap.set("N", 1);
    sideMap.set("E", 2);
    sideMap.set("S", 3);
    sideMap.set("W", 4);
    let state = sideMap.get(initialState);
    return {
        rightRotate: function () {
            state++;
            if (state > 4) {
                state = 1;
            }
        },
        leftRotate: function () {
            state--;
            if (state < 1) {
                state = 4;
            }
        },
        getDirection: function () {
            return sideMap.get(state);
        }
    }
}

export function getNewPosition(currentPosition, instructions) {

    let [x, y, z] = currentPosition.split(' ');
    let getNewDirection = looper(z);
    instructions.split('').map(instruction => {
        if (instruction === "F") {
            switch (getNewDirection.getDirection()) {
                case "N":
                    y++;
                    break;
                case "E":
                    x++;
                    break;

                case "S":
                    y--;
                    break;
                default:
                    x--;
            }
        } else if (instruction === "R") {
            getNewDirection.rightRotate();
            z = getNewDirection.getDirection();
        } else {
            getNewDirection.leftRotate();
            z = getNewDirection.getDirection();
        }
    });

    return [x, y, z].join(' ');
}

export function isLost(gridSize, currentPosition) {
    let {x, y} = gridSize;
    let [x1, y1, z1] = currentPosition.split(' ');
    return x1 < 0 || y1 < 0 || x1 > x || y1 > y;
}



