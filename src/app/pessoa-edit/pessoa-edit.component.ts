import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../shared/pessoa.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit, OnDestroy {

  pessoa: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private pessoaService: PessoaService, ) { }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.pessoaService.get(id).subscribe((pessoa: any) => {
          if (pessoa) {
            this.pessoa = pessoa;
            this.pessoa.href = pessoa._links.self.href;
          } else {
            console.log(`Pessoa com id ${id} não encontrada`);
            this.gotoList();
          }
        })
      }
    });
  }

  gotoList() {
    this.router.navigate(['/pessoa-list']);
  }

  save(form: NgForm) {
    this.pessoaService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.log('error ', error))
  }

  remove(href) {
    this.pessoaService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
