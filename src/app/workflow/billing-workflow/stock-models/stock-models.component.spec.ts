import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockModelsComponent } from './stock-models.component';

describe('StockModelsComponent', () => {
  let component: StockModelsComponent;
  let fixture: ComponentFixture<StockModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
