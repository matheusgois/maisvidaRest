import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../shared/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  pessoas: Array<any>;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaService.getAll().subscribe(data => {
      console.table("data ", data);
      this.pessoas = data;
    })
  }

}
