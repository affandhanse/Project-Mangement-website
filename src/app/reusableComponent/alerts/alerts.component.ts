import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
@Input() alertType: string = "";
@Input() message: string = "";
}
