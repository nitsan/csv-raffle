import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LotteryComponent } from './lottery.component';
import { LotteryService } from '../services/lottery.service';

describe('LotteryComponent', () => {
  let component: LotteryComponent;
  let fixture: ComponentFixture<LotteryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryComponent ],
      providers: [
        {
          provide: LotteryService,
          useValue: {},
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
