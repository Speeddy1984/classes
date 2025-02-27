export default class Character {
  constructor(name, type) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error(
        "Имя не является строкой или длина имени меньше 2 или больше 10 символов"
      );
    }

    const types = [
        "Bowerman",
        "Swordsman",
        "Magician",
        "Daemon",
        "Undead",
        "Zombie",
      ];
    
      if (typeof type !== 'string' || !types.includes(type)) {
      throw new Error("Неверный тип персонажа");
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}