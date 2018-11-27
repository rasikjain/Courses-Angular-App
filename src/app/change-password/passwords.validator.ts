import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static validOldPassword(control: AbstractControl) {
    return new Promise((resolve, reject) => {
      if (control.value !== '1234') {
        resolve({ invalidOldPassword: true });
      } else {
        resolve(null);
      }
    });
  }
}
