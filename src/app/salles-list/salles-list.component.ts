import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SallesService } from '../salles.service';
import { Salle } from './salles.module';

@Component({
  selector: 'app-salles-list',
  templateUrl: './salles-list.component.html',
  styleUrls: ['./salles-list.component.css']
})
export class SallesListComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,public sallesService:SallesService) { }
  public salles: Salle[] = []
  public selectedId: number = 0;
  ngOnInit(): void {
    this.salles = this.sallesService.salles
          this.route.paramMap.subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id')!);
        this.selectedId = id;
       })
  }
  onSelect(id:number) {
             this.router.navigate([id],{relativeTo:this.route})
  }

  isSelected(salle: Salle) {
    return salle.id === this.selectedId
  }


}
