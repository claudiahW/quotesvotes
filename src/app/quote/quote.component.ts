import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote(1, 'winston churchill','Daniel','success is not final,failure is not fatal',new Date(2020,3,14)),
    new Quote(1, 'Amelia Earhart','Mary','kindness is universal',new Date(2020,3,14)),
    new Quote(1, 'Marie Ferrero','Joline','Start before you are ready',new Date(2020,3,14)),
    new Quote(1, 'Estee Lauder','Dave','i never dreamed of success i worked for it',new Date(2020,3,14)),
    new Quote(1, 'Wycliff Jean','Samie','She used to be the sweetest girl',new Date(2020,3,14)),
    
   ];
   addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)
  }
   toggleDetails(index){
    this.quotes[index].showSender = !this.quotes[index].showSender;
    
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
