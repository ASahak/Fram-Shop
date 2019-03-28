import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-colors',
  templateUrl: './add-colors.component.html',
  styleUrls: ['./add-colors.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddColorsComponent),
      multi: true
    }
],
})
export class AddColorsComponent implements ControlValueAccessor, OnInit {
  writeValue(obj: any): void {
    console.log(111)
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    console.log(444)
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    console.log(333)
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log(222)
    throw new Error("Method not implemented.");
  }
  public _selectedColors: Array<string> = [];
  
  @Input()
  _colorsArr:Array<string>;
  @Input()
  _appearColors:boolean;
  
  constructor() { }
  _selectedColorArr(_color: string, _activeColor: Element) {
    var _boolPush: boolean = false;
    if (this._selectedColors.length) {
        for (let i = 0; i < this._selectedColors.length; i++) {
            if (this._selectedColors.length >= 1 && this._selectedColors[i] == _color) {
                _activeColor.classList.remove('activeColor')
                _boolPush = true;
                this._selectedColors.splice(i, 1);
            }
        }
    }
    if (!_boolPush && this._selectedColors.length < 6) {
        _activeColor.classList.toggle('activeColor')
        this._selectedColors.push(_color);
    }
}

  ngOnInit() {
  }

}
