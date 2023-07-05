export class Model {
  user;
  items;

  constructor() {
    this.user = "Виталий";
    this.items = [new ToDoItem("Прочитать книгу Angular для профессионалов", false),
        new ToDoItem("Изучить Spring Cloud", false),
        new ToDoItem("Написать приложение на Spring+Angular", false),
        new ToDoItem("Покормить собаку", false)];
  }
}

export class ToDoItem {
  action: string;
  done: boolean;

  constructor(action: string, done: boolean) {
    this.action = action;
    this.done = done;
  }
}
