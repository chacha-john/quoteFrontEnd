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
  message = ''
  quoteSuccess = false;
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

    this.qs.getQuotes().subscribe(
      (res)=>{
        this.quoteInfo=res
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  saveQuote(){
    // console.log(this.quoteData)
    this.qs.save(this.quoteData.value).subscribe(
      (res) => {
        console.log(res)
        this.quoteInfo.push(res)
        this.quoteSuccess=true;
        this.quoteData.reset();  
        this.message = "Quote added successfully";            
     
      },
      (err) => {
        console.log(err);
      }
    )
  }
  

}
