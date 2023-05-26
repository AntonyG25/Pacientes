import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';
import { pacientesI } from 'src/app/interfaces/pacientesI';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'surname', 'gender', 'birthdate', 'age'];
  dataSource: any;
  pacientes: any = {};

  constructor(private service: RestService){ }

  ngOnInit(): void {
    this.service.getAllPacientes().subscribe(pacientes => {
      this.dataSource = pacientes;
      console.log(this.pacientes);
    })

  }

}
