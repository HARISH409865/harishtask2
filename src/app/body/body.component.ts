import { Component, OnInit } from '@angular/core';
import { DataModel } from '../model/data.model'
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  dataModels: Array<DataModel> = new Array<DataModel>();
  dataModel: DataModel = new DataModel();
  constructor() {  
    // object 1
    let dataModel = new DataModel();
    dataModel.title = 'BTC';
    dataModel.description = 'Bit coin is a digital assert and a payment system invented by satoshi nakamoto who published a dicated paper in 2008 and released it as open source software in 2009. the system featured as peer to peer users can interact directly with out an intermediary.'
    dataModel.issueTime = '11:23 AM';
    dataModel.tokenFullName = 'Example Full Name';
    dataModel.symbol = '%';
    dataModel.totalSupply = '2344';
    dataModel.circumSupply = '123';
    dataModel.website = 'www.btc.com';
    dataModel.explorer = 'example';
    dataModel.deposite = '10000';
    dataModel.withdrawals = '500';
    dataModel.trading = '545';
    dataModel.comment = 'going good';
    dataModel.media = 'Media example';
    this.dataModel = dataModel;
    this.dataModels.push(dataModel);

    // object 2
    dataModel = new DataModel();
    dataModel.title = 'ETH';
    dataModel.description = 'The system featured as peer to peer users can interact directly with out an intermediary. Bit coin is a digital assert and a payment system invented by satoshi nakamoto who published a dicated paper in 2008 and released it as open source software in 2009. '
    dataModel.issueTime = '12:23 AM';
    dataModel.tokenFullName = 'Example Full Name 2' ;
    dataModel.symbol = '$';
    dataModel.totalSupply = '2224';
    dataModel.circumSupply = '3666';
    dataModel.website = 'www.eth.com';
    dataModel.explorer = 'example 2';
    dataModel.deposite = '5666';
    dataModel.withdrawals = '200';
    dataModel.trading = '547675';
    dataModel.comment = 'going';
    dataModel.media = 'Media example 2';
    this.dataModels.push(dataModel);

     // object 3
     dataModel = new DataModel();
     dataModel.title = 'ABC';
     dataModel.description = 'The system featured as peer to peer users can interact directly with out an intermediary. Bit coin is a digital assert and a payment system invented by satoshi nakamoto who published a dicated paper in 2008 and released it as open source software in 2009. '
     dataModel.issueTime = '12:40 AM';
     dataModel.tokenFullName = 'Example Full Name 3' ;
     dataModel.symbol = '$';
     dataModel.totalSupply = '3344';
     dataModel.circumSupply = '5577';
     dataModel.website = 'www.eth.com';
     dataModel.explorer = 'example 3';
     dataModel.deposite = '5888';
     dataModel.withdrawals = '500';
     dataModel.trading = '847675';
     dataModel.comment = 'going';
     dataModel.media = 'Media example 3';
     this.dataModels.push(dataModel);

      // object 4
    dataModel = new DataModel();
    dataModel.title = 'BCD';
    dataModel.description = 'The system featured as peer to peer users can interact directly with out an intermediary. Bit coin is a digital assert and a payment system invented by satoshi nakamoto who published a dicated paper in 2008 and released it as open source software in 2009. '
    dataModel.issueTime = '2:00 AM';
    dataModel.tokenFullName = 'Example Full Name 4' ;
    dataModel.symbol = '$';
    dataModel.totalSupply = '2224';
    dataModel.circumSupply = '3666';
    dataModel.website = 'www.eth.com';
    dataModel.explorer = 'example 4';
    dataModel.deposite = '7888';
    dataModel.withdrawals = '400';
    dataModel.trading = '947675';
    dataModel.comment = 'going';
    dataModel.media = 'Media example 4';
    this.dataModels.push(dataModel);

     // object 5
     dataModel = new DataModel();
     dataModel.title = 'CDE';
     dataModel.description = 'The system featured as peer to peer users can interact directly with out an intermediary. Bit coin is a digital assert and a payment system invented by satoshi nakamoto who published a dicated paper in 2008 and released it as open source software in 2009. '
     dataModel.issueTime = '4:00AM';
     dataModel.tokenFullName = 'Example Full Name 5' ;
     dataModel.symbol = '$';
     dataModel.totalSupply = '2224';
     dataModel.circumSupply = '3666';
     dataModel.website = 'www.eth.com';
     dataModel.explorer = 'example 5';
     dataModel.deposite = '5666';
     dataModel.withdrawals = '200';
     dataModel.trading = '547675';
     dataModel.comment = 'going';
     dataModel.media = 'Media example 5';
     this.dataModels.push(dataModel);

      // object 6
    dataModel = new DataModel();
    dataModel.title = 'DEF';
    dataModel.description = 'The system featured as peer to peer users can interact directly with out an intermediary. Bit coin is a digital assert and a payment system invented by satoshi nakamoto who published a dicated paper in 2008 and released it as open source software in 2009. '
    dataModel.issueTime = '5:00 AM';
    dataModel.tokenFullName = 'Example Full Name 2' ;
    dataModel.symbol = '$';
    dataModel.totalSupply = '2224';
    dataModel.circumSupply = '8666';
    dataModel.website = 'www.eth.com';
    dataModel.explorer = 'example 2';
    dataModel.deposite = '2666';
    dataModel.withdrawals = '300';
    dataModel.trading = '547675';
    dataModel.comment = 'going';
    dataModel.media = 'Media example 6';
    this.dataModels.push(dataModel);

     // object 7
     dataModel = new DataModel();
     dataModel.title = 'EFG';
     dataModel.description = 'The system featured as peer to peer users can interact directly with out an intermediary. Bit coin is a digital assert and a payment system invented by satoshi nakamoto who published a dicated paper in 2008 and released it as open source software in 2009. '
     dataModel.issueTime = '12:23 AM';
     dataModel.tokenFullName = 'Example Full Name 2' ;
     dataModel.symbol = '$';
     dataModel.totalSupply = '2324';
     dataModel.circumSupply = '5666';
     dataModel.website = 'www.eth.com';
     dataModel.explorer = 'example 7';
     dataModel.deposite = '5666';
     dataModel.withdrawals = '400';
     dataModel.trading = '547675';
     dataModel.comment = 'going';
     dataModel.media = 'Media example 7';
     this.dataModels.push(dataModel);

      // object 8
    dataModel = new DataModel();
    dataModel.title = 'FGH';
    dataModel.description = 'The system featured as peer to peer users can interact directly with out an intermediary. Bit coin is a digital assert and a payment system invented by satoshi nakamoto who published a dicated paper in 2008 and released it as open source software in 2009. '
    dataModel.issueTime = '12:23 AM';
    dataModel.tokenFullName = 'Example Full Name 2' ;
    dataModel.symbol = '$';
    dataModel.totalSupply = '5224';
    dataModel.circumSupply = '9666';
    dataModel.website = 'www.eth.com';
    dataModel.explorer = 'example 8';
    dataModel.deposite = '5666';
    dataModel.withdrawals = '600';
    dataModel.trading = '547675';
    dataModel.comment = 'going';
    dataModel.media = 'Media example 8';
    this.dataModels.push(dataModel);

     // object 9
     dataModel = new DataModel();
     dataModel.title = 'GHI';
     dataModel.description = 'The system featured as peer to peer users can interact directly with out an intermediary. Bit coin is a digital assert and a payment system invented by satoshi nakamoto who published a dicated paper in 2008 and released it as open source software in 2009. '
     dataModel.issueTime = '05:20 AM';
     dataModel.tokenFullName = 'Example Full Name 2' ;
     dataModel.symbol = '$';
     dataModel.totalSupply = '2224';
     dataModel.circumSupply = '7680';
     dataModel.website = 'www.eth.com';
     dataModel.explorer = 'example 9';
     dataModel.deposite = '9266';
     dataModel.withdrawals = '800';
     dataModel.trading = '547675';
     dataModel.comment = 'going';
     dataModel.media = 'Media example 9';
     this.dataModels.push(dataModel);

      // object 10
    dataModel = new DataModel();
    dataModel.title = 'HIK';
    dataModel.description = 'The system featured as peer to peer users can interact directly with out an intermediary. Bit coin is a digital assert and a payment system invented by satoshi nakamoto who published a dicated paper in 2008 and released it as open source software in 2009. '
    dataModel.issueTime = '12:23 AM';
    dataModel.tokenFullName = 'Example Full Name 10' ;
    dataModel.symbol = '$';
    dataModel.totalSupply = '9894';
    dataModel.circumSupply = '5680';
    dataModel.website = 'www.eth.com';
    dataModel.explorer = 'example 2';
    dataModel.deposite = '5000';
    dataModel.withdrawals = '700';
    dataModel.trading = '547675';
    dataModel.comment = 'going';
    dataModel.media = 'Media example 2';
    this.dataModels.push(dataModel);
  }

  ngOnInit() {
  }
  display(option){
    console.log(option);
    this.dataModels.forEach(dataModel => {
      if(dataModel.title == option) {
        this.dataModel = dataModel;
      }
    });
  }
}
