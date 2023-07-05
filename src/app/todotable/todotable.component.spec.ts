import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotableComponent } from './todotable.component';

describe('TodotableComponent', () => {
  let component: TodotableComponent;
  let fixture: ComponentFixture<TodotableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodotableComponent]
    });
    fixture = TestBed.createComponent(TodotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
