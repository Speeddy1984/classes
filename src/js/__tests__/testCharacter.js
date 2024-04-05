import Character from "../Character";

test("test Character with valid arguments", () => {
  const result = new Character("Olga", "Daemon");
  expect(result).toEqual({
    name: "Olga",
    type: "Daemon",
    health: 100,
    level: 1,
  });
});

test("test Character with empty name", () => {
  expect(() => new Character("", "Daemon")).toThrowError("Имя не является строкой или длина имени меньше 2 или больше 10 символов");
});

test("test Character with non-string name", () => {
  expect(() => new Character(123, "Daemon")).toThrowError("Имя не является строкой или длина имени меньше 2 или больше 10 символов");
});

test("test Character with long name", () => {
  expect(() => new Character("LooooooongName", "Daemon")).toThrowError("Имя не является строкой или длина имени меньше 2 или больше 10 символов");
});

test("test Character with short name", () => {
  expect(() => new Character("x", "Daemon")).toThrowError("Имя не является строкой или длина имени меньше 2 или больше 10 символов");
});

test("test Character with invalid type", () => {
  expect(() => new Character("Ivan", "Programmer")).toThrowError("Неверный тип персонажа");
});
