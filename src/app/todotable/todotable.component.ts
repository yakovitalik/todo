import { Component } from '@angular/core';
import { Model, ToDoItem } from "../../model";

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.css']
})
export class TodotableComponent {
  model = new Model();

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem: string) {
    if(newItem != "") {
      this.model.items.push(new ToDoItem(newItem, false));
    }
  }
}
