import { Component, OnInit } from '@angular/core';
import { GetDoctorService } from '../../../Services/get-doctor.service'
import { GetDoctor } from '../models/DoctorDb';


@Component({
  selector: 'app-editedata',
  templateUrl: './editedata.component.html',
  styleUrls: ['./editedata.component.scss']
})
export class EditedataComponent implements OnInit {

  

  doctors: GetDoctor[] = []

  constructor(private GetDoctorService: GetDoctorService) {
    
   }

   ngOnInit(): void {
     this.gitInfo()
     
  }
  

  public gitInfo() {
    this.GetDoctorService.gitInfo().subscribe({
      next:(response) => {
        console.log(response.data);
        this.doctors = response.data
      },
      error:(error) => {
        console.log(error);
      }
    })
  }

}
