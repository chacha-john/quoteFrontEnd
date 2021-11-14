import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quoteInfo: any = [];
  quoteData: any
  constructor(
    private fb: FormBuilder,
    private qs: QuoteService,
  ) {
    this.quoteData=this.fb.group({
      quoteId: [''],
      quoteOwner: [''],
      quoteMessage: [''],
      quoteOwnerDescription: ['']
    })
  }

  ngOnInit(): void {
  }
  saveQuote(){
    // console.log(this.quoteData)
    this.qs.save(this.quoteData.value).subscribe(
      (res) => {
        console.log(res)
        this.quoteInfo.push(res)
        // console.log(this.quoteData.value)
     
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
