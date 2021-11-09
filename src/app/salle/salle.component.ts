import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SallesService } from '../salles.service';
import { Salle } from './../salles-list/salles.module';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  public salle: Salle = { id: 0, capacite: 0, nom: "" };
  public sallesLength = 0;
  constructor(private route:ActivatedRoute,private router:Router,public sallesService:SallesService) { }
  public salleId = 0;
  public salles:Salle[] = [];
  ngOnInit(): void {
    this.salles = this.sallesService.salles
    this.sallesLength = this.salles.length;
      this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
        this.salleId = id;
        this.salle = this.salles.filter(el => el.id === this.salleId)[0];
      })

  }

    onPrevious() {
    let previousId = this.salleId - 1;
    this.router.navigate(["../",previousId],{relativeTo:this.route} )
  }

  onNext() {
    let nextId = this.salleId + 1;
    this.router.navigate(["../",nextId],{relativeTo:this.route} )
  }

  goBack() {
    let selectedId = this.salleId ? this.salleId : null;
    //this.router.navigate(["/departements", { id: selectedId, test: "testvalue" }])
    this.router.navigate(["../", { id: selectedId }], { relativeTo: this.route })
  }

}
