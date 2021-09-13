import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RaffleComponent } from './raffle.component';
import { RaffleService } from '../services/raffle.service';

describe('RaffleComponent', () => {
  let component: RaffleComponent;
  let fixture: ComponentFixture<RaffleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RaffleComponent ],
      providers: [
        {
          provide: RaffleService,
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
