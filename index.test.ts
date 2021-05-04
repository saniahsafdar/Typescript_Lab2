import { Room } from ".";

describe("Room", function() {
    it("initial values are set from constructo paraams", ()=> {
        let room: Room = new Room ("Purple", 10, 20);
        expect(room.name).toBe("Purple");
        expect(room.length).toBe(10);
        expect(room.width).toBe(20);
    });
    test("get Area returns length x width", () => {
        let room: Room = new Room ("Red", 20, 50);
        let result: number = room.getArea();
        expect(result).toBe(1000);
    })
})