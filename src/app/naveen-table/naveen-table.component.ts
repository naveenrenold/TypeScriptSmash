import { Component,OnInit } from '@angular/core';
import { tableData } from '../models/tableData';
import { TableLazyLoadEvent, TablePageEvent } from 'primeng/table';

@Component({
  selector: 'app-naveen-table',
  templateUrl: './naveen-table.component.html',
  styleUrls: ['./naveen-table.component.css']
})
export class NaveenTableComponent implements OnInit{
tableDatas :tableData[]=[];
tempTableDatas :tableData[]=[];

ngOnInit(): void {
  this.tableDatas=[new tableData('Naveen',new Date(),25)
,
new tableData('Renold',new Date(),18),
new tableData('J',new Date(),5)
];
this.tempTableDatas=[this.tableDatas[0]];
}
setTempTableData(event:TableLazyLoadEvent):void
{
console.log(`First:${event.first},Rows:${event.rows}`);
this.tempTableDatas=[this.tableDatas[event.first??0]];
}
}
