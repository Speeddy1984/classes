import Swordsman from "../Swordsman";

test("test Swordsman", () => {
  const result = new Swordsman("Petr", "Swordsman");
  expect(result).toEqual({
    name: "Petr",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
