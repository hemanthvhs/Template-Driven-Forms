import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    // CHECK IF THE VALUE CONTAINS UPPERCASE, LOWERCASE, NUMBERS

    const hasUpperCase = /["A-Z"]+/.test(value);
    const hasLowerCase = /["a-z"]+/.test(value);
    const hasNumbers = /[0-9]+/.test(value);

    const isPasswordValid = hasUpperCase && hasLowerCase && hasNumbers;

    return !isPasswordValid ? { passwordStrength: true } : null;
  };
}
