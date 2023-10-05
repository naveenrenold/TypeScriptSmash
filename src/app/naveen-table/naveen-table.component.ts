import { Component,OnInit } from '@angular/core';
import { tableData } from '../models/tableData';

@Component({
  selector: 'app-naveen-table',
  templateUrl: './naveen-table.component.html',
  styleUrls: ['./naveen-table.component.css']
})
export class NaveenTableComponent implements OnInit{
tableDatas :tableData[]=[];

ngOnInit(): void {
  this.tableDatas=[new tableData('Naveen',new Date(),25)
,
new tableData('Renold',new Date(),18),
new tableData('J',new Date(),5)
]
}
}
