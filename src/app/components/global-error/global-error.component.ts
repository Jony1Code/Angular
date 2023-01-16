import { Component } from '@angular/core';
import { ErrorServiceService } from 'src/app/services/error-service.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent {
  constructor(public errorService: ErrorServiceService) {}
}
