import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RaffleComponent } from './raffle.component';
import { LotteryService } from '../services/lottery.service';

describe('RaffleComponent', () => {
  let component: RaffleComponent;
  let fixture: ComponentFixture<RaffleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RaffleComponent ],
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
    fixture = TestBed.createComponent(RaffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
