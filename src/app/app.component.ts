import { Component } from '@angular/core'; // controller or model
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Antonia';

  person0 = {
    givenName: 'Antonia',
    surName: 'Tsatsouli',
    age: 0x29,
    email: "tantonia@aueb.gr",
    address: "Athens, Greece",
  };

  person1 = {
    givenName: 'John',
      surName: 'Doe',
      age: 0x25,
      email: "john@example.gr",
      address: "New York, USA",
    };
}
