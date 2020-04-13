import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})


export class RepositoriesComponent implements OnInit {
  //propiedades
  repositories: any = [];
  repository: IRepository = { name: "", description: "" };
  newRepository: IRepository = { name: "", description: "" };

  constructor(private reporService: RepositoriesService) { }

  ngOnInit() {
    // this.repository = { name: "Angular code for CF", description: "Proyecto demo CF" };
    //setTimeout(() => {
    //    this.repositories = [
    //    { name: "Angular code for CF", description: "Proyecto demo CF" },
    //  { name: "Boostrap", description: "Frontend Framework" },
    // { name: "PHP E comerce", description: "Codigo del curo e comerce" },
    //{ name: "Ruby code", description: "Proyecto demo CF" }
    //];
    //this.newRepository.name = "Esta es la nueva";
    //}, 5000);

    //setTimeout(()=>{
    // this.repositories = [];
    //},8000)

    this.reporService.getRepos().subscribe((data) => {
      this.repositories = data.json();
      this.repository = this.repositories[0];//traer el primer valor
      //console.log(this.repositories[0]);
    })
  }
  //colocar como principal el item
  setMainRepository(repository) {
    this.repository = repository;
  }

  addNewRepo() {
    //console.log(this.newRepository);

    //unshift insertar al principio de un arreglo
    this.repositories.unshift(this.newRepository);
    this.newRepository = { name: "", description: "" };


  }
}

interface IRepository {
  name: string,
  description: string
}