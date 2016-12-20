function Item(purchase, prices) {
    this.purchase = purchase;
    this.prices = prices;
}


 
var AppComponent = ng.core.Component({
    selector: 'my-app',
    template:  `<div class="page-header">
        <h1> Журнал посещений </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Студент" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Количество баллов" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
                </div>               
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addLesson()" >Добавить пару</button>
                </div>               
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <!--<tr>
                    <th>Студент</th>
                    <th>Количество баллов</th>
                    <th>Номер пары</th>
                    <th>Присутствие на паре</th>
                </tr>-->
                <tr >
                    <th>Студент</th>
                    <th *ngFor="let lesson of countLesson">{{lesson}}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!--<tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.numberOfLesson}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>-->
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td *ngFor="let price of item.prices"><input type="number" class="form-control" value ={{price}} placeholder="{{price}}" /></td>
                </tr>
            </tbody>
        </table>
    </div>`
    })
  .Class({
    constructor: function() { 
     
        this.items= [
            new Item("Александра Новикова",[5]),
            new Item("Тимур Стрельцов",[5]),
            new Item("Евгений Радьков",[5]),
            new Item("Евгений Руцкий",[5])
        ];
        this.countLesson = [1];
        this.numberLastLesson = 1;
    }

     
});
 
AppComponent.prototype.addItem = function (text, price) {
        if (text == null || text == undefined || text.trim() == "")
            return;
        if (price == null || price == undefined)
            return;
        this.items.push(new Item(text, price));
};
AppComponent.prototype.addLesson = function(){
    this.numberLastLesson = this.numberLastLesson + 1;
    this.countLesson.push(this.numberLastLesson);

/*    for(item of items){
        item.prices.push(0);
    }*/
}