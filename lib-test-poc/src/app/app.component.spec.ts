import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CalculatorService } from 'calculator';

describe('AppComponent', () => {
  let calculatorServiceMock: any;
  
  beforeEach(async () => {

    calculatorServiceMock = jasmine.createSpyObj('CalculatorService', ['add']);

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: CalculatorService, useValue: calculatorServiceMock }
      ]      
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lib-test-poc'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lib-test-poc');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('lib-test-poc app is running!');
  });

  it('externalAdd should call calculatorService.add', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const a = 1, b = 2;
    calculatorServiceMock.add.and.returnValue(3); // Mock return value

    const result = app.externalAdd(a, b);

    expect(calculatorServiceMock.add).toHaveBeenCalledWith(a, b);
    expect(result).toEqual(3); // This ensures the mocked add method is called and its return value is used
  });  
});
