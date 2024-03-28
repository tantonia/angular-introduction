import { Component } from '@angular/core'; // controller or model

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Antonia';

  person = {
    givenName: 'Antonia',
    surName: 'Tsatsouli',
    age: 0x29,
    email: "tantonia@aueb.gr",
  };
}
