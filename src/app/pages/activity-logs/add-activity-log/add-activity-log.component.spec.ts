import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddActivityLogComponent } from './add-activity-log.component';

describe('AddActivityLogComponent', () => {
  let component: AddActivityLogComponent;
  let fixture: ComponentFixture<AddActivityLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddActivityLogComponent, HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddActivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
