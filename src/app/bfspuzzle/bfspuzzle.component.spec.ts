import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfspuzzleComponent } from './bfspuzzle.component';

describe('BfspuzzleComponent', () => {
  let component: BfspuzzleComponent;
  let fixture: ComponentFixture<BfspuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BfspuzzleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BfspuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
