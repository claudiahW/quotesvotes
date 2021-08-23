export class Quote {
    showSender:boolean;
    constructor ( public id:number, public author:string , public sender:string , public quote:string,public date:Date){
     this.showSender=false
    }

}


