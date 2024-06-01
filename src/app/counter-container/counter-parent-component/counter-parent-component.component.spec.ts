import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterParentComponentComponent } from 'src/app/counter-container/counter-parent-component/counter-parent-component.component';

describe('CounterParentComponentComponent', () => {
  let component: CounterParentComponentComponent;
  let fixture: ComponentFixture<CounterParentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterParentComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
