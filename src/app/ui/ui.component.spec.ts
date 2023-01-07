import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Ui Addition - Component', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call formula method', () => {
     // Arrange
     let resultado : number []= [] 
     let result ;
     component.numerosTxt="3.0";
     component.a = 2;
     component.b = 1;
 
     // Act
     component.formula();
     result=resultado.toString
     result = component.result;
 
     // Assert
     expect(result).toBe("7");
  });



  it('Should set a model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="a"]')).nativeElement;

    // Act 
    inputElement.value = '2';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.a).toEqual(2);
  });

  it('Should set b model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="b"]')).nativeElement;

    // Act 
    inputElement.value = '1';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.b).toEqual(1);
  });

  it('Should set numerosTxt model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="numerosTxt"]')).nativeElement;

    // Act 
    inputElement.value = '3.0';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.numerosTxt).toEqual("3.0");
  });

  it('should add a and numerosTxt and b when i click the addition button ', () => {
    // Arrange 
    let resultado : number []= [] 
    let result ;
    component.numerosTxt="3.0";
    component.a = 2;
    component.b = 1;
    let formulaButton = fixture.debugElement.query(By.css('.formula-button '));

    // Act
    formulaButton.triggerEventHandler('click', null);
    result=resultado.toString
    result = component.result;


    // Assert
    expect(component.result).toBe("7");

   });

  it('Should render form in result form', () => {
    // Arrange
    component.numerosTxt="3.0";
    component.a = 2;
    component.b = 1;
 
    // Act
    component.formula();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.result'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('7');
     
  });

});
