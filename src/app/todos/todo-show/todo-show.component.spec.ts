import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoShowComponent } from './todo-show.component';

describe('TodoShowComponent', () => {
  let component: TodoShowComponent;
  let fixture: ComponentFixture<TodoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
